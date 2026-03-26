import React, { useState, useRef } from "react";
import Heading from "../components/Heading";
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from "@paypal/react-paypal-js";

// const url = "http://192.168.1.226:5000";
const url = "https://iem-singapore-backend.smartsociety.org"

const PAYPAL_CLIENT_ID =
  "AXNR7IWGqOkozeabmf8lE6VJr9dHsjK4nzFEAoJ24fM3kWumXXBPjK0b8c_P-tscRbzXuXIpfZwcMNso";

// ── helpers ────────────────────────────────────────────────────────────────────
const getAmount = (category, presentationMode) => {
  if (category === "Developing Countries") return "250";
  if (!presentationMode) return "0";
  if (category === "Students")
    return presentationMode === "online" ? "250" : "350";
  if (category === "Postdoc/Academia/Industry")
    return presentationMode === "online" ? "350" : "450";
  if (category === "Attendee")
    return presentationMode === "online" ? "150" : "250";
  return "0";
};

const inputCls =
  "w-full p-3 border border-gray-300 text-gray-700 rounded-lg shadow-sm text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition bg-white";

const labelCls = "font-semibold text-gray-800 text-sm";

// ── sub-components ─────────────────────────────────────────────────────────────
function StepIndicator({ step }) {
  const steps = ["Participant Info", "Card Payment", "Upload Proof"];
  return (
    <div className="flex items-center w-full mb-2">
      {steps.map((label, i) => {
        const num = i + 1;
        const active = step === num;
        const done = step > num;
        return (
          <React.Fragment key={num}>
            <div className="flex flex-col items-center gap-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors
                  ${done ? "bg-green-500 text-white" : active ? "bg-blue-theme text-white" : "bg-gray-200 text-gray-500"}`}
              >
                {done ? "✓" : num}
              </div>
              <span
                className={`text-xs poppins hidden sm:block ${active ? "text-blue-theme font-semibold" : "text-gray-400"}`}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-2 transition-colors ${done ? "bg-green-500" : "bg-gray-200"}`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function FieldRow({ children }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">{children}</div>
  );
}

function Field({ label, required, children }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className={labelCls}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

// ── main component ─────────────────────────────────────────────────────────────
export default function Registration() {
  // step 1
  const [category, setCategory] = useState("");
  const [presentationMode, setPresentationMode] = useState("");

  // step 3
  const [screenshot, setScreenshot] = useState(null);
  const [screenshotPreview, setScreenshotPreview] = useState(null);

  // shared
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const formRef = useRef(null);
  const paymentIdRef = useRef(null); // always fresh in PayPal callbacks
  const formPayloadRef = useRef(null); // stores form data before form unmounts on step 2

  const amount = getAmount(category, presentationMode);

  // ── reset ──────────────────────────────────────────────────────────────────
  const handleReset = () => {
    setCategory("");
    setPresentationMode("");
    setScreenshot(null);
    setScreenshotPreview(null);
    setStep(1);
    paymentIdRef.current = null;
    formPayloadRef.current = null;
    setError("");
    setSuccess(false);
    if (formRef.current) formRef.current.reset();
  };

  // ── STEP 1 "Proceed" button — saves form data to ref then moves to step 2 ──
  const handleStep1Submit = (e) => {
    e.preventDefault();
    setError("");
    // Capture all form values NOW while the form is still mounted
    const form = new FormData(formRef.current);
    formPayloadRef.current = {
      category: form.get("category"),
      type: form.get("presentationMode"),
      name: form.get("name"),
      email: form.get("email"),
      phoneNo: form.get("phone"),
      designation: form.get("designation"),
      instituteOrCompany: form.get("institute"),
      address: form.get("address"),
      paperId: form.get("paperId"),
    };
    setStep(2);
  };

  // ── STEP 2 → create-order (called by PayPal SDK on button click) ──────────
  // formRef.current is null here (form unmounted), so we use formPayloadRef
  const createOrder = async () => {
    setError("");
    const payload = formPayloadRef.current;
    if (!payload)
      throw new Error("Form data missing. Please go back and try again.");

    const res = await fetch(`${url}/api/v1/payments/create-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!data.success)
      throw new Error(data.message || "Failed to create order");

    paymentIdRef.current = data.data.paymentId;
    return data.data.orderId; // PayPal SDK needs this to proceed
  };

  // ── After PayPal approves card payment → go to step 3 ────────────────────
  const onApprove = () => {
    setError("");
    setStep(3);
  };

  const onError = (err) => {
    console.error("PayPal error:", err);
    setError("Payment failed. Please try again or use a different card.");
  };

  // ── STEP 3 → capture-order ────────────────────────────────────────────────
  const handleStep3Submit = async (e) => {
    e.preventDefault();
    setError("");

    if (!screenshot) {
      setError("Please upload a payment screenshot.");
      return;
    }

    const formData = new FormData();
    formData.append("paymentId", paymentIdRef.current);
    formData.append("file", screenshot);

    setIsSubmitting(true);
    try {
      const res = await fetch(`${url}/api/v1/payments/capture-order`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Capture failed");
      setSuccess(true);
    } catch (err) {
      setError(
        err.message ||
          "Failed to complete registration. Please contact support.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── screenshot handler ─────────────────────────────────────────────────────
  const handleScreenshotChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setScreenshot(file);
    const reader = new FileReader();
    reader.onload = (ev) => setScreenshotPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  // ── success screen ─────────────────────────────────────────────────────────
  if (success) {
    return (
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:gap-16 gap-10 lg:py-20 py-14 px-6 items-center">
        <Heading title2="Registration" />
        <div className="w-full rounded-3xl shadow-md border border-gray-300 lg:p-16 md:p-12 p-8 flex flex-col items-center gap-6 text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 poppins">
            Registration Successful! 🎉
          </h2>
          <p className="text-gray-600 poppins text-sm max-w-md">
            Your registration has been completed. A confirmation will be sent to
            your email shortly.
          </p>
          <button
            onClick={handleReset}
            className="px-8 py-2.5 bg-blue-theme rounded-lg text-white font-medium poppins text-sm hover:bg-[#102768] transition-colors"
          >
            Register Another
          </button>
        </div>
      </div>
    );
  }

  // ── main render ────────────────────────────────────────────────────────────
  return (
    // PayPalScriptProvider wraps the entire page so it's always ready
    <PayPalScriptProvider
      options={{
        "client-id": PAYPAL_CLIENT_ID,
        currency: "SGD",
        intent: "capture",
        components: "buttons",
      }}
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:gap-16 gap-10 lg:py-20 py-14 px-6 items-center">
        <Heading title2="Registration" />

        {/* Fee Table */}
        <div className="flex flex-col rounded-3xl border border-gray-300 md:w-full w-[88vw] shadow-md overflow-auto">
          <table className="w-full">
            <thead className="bg-blue-theme poppins text-white w-full">
              <tr className="text-left text-sm">
                <th className="p-4 pl-6">Category</th>
                <th className="p-4 text-center">
                  Registration Fees for Online
                </th>
                <th className="p-4 text-center">
                  Registration Fees for Offline
                </th>
                <th className="p-4 text-center">Special Registration Fees</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-800 font-medium poppins-italic">
              {[
                ["Students (UG, PG, PhD)", "250 SGD", "350 SGD", "-"],
                ["Postdoc/Academia/Industry", "350 SGD", "450 SGD", "-"],
                ["Attendee", "150 SGD", "250 SGD", "-"],
                ["Developing Countries", "-", "-", "250 SGD"],
              ].map(([cat, online, offline, special]) => (
                <tr key={cat} className="hover:bg-gray-50 text-sm">
                  <td className="p-4">{cat}</td>
                  <td className="p-4 text-center">{online}</td>
                  <td className="p-4 text-center">{offline}</td>
                  <td className="p-4 text-center">{special}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Form Card */}
        <div className="w-full rounded-3xl shadow-md border border-gray-300 lg:p-16 md:p-12 p-8 flex flex-col md:gap-10 gap-8">
          {/* Header */}
          <div className="flex flex-col gap-4 w-full pb-4 border-b border-gray-200">
            <StepIndicator step={step} />
            <div className="flex justify-between items-center w-full">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 poppins">
                {step === 1 && "Participant Information"}
                {step === 2 && "Card Payment"}
                {step === 3 && "Upload Payment Proof"}
              </h2>
              <span className="text-sm font-semibold text-blue-theme poppins">
                Step {step} of 3
              </span>
            </div>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="w-full bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm poppins flex items-start gap-2">
              <span className="mt-0.5">⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {/* ── STEP 1 ── */}
          {step === 1 && (
            <form
              ref={formRef}
              onSubmit={handleStep1Submit}
              className="flex flex-col gap-6 poppins"
            >
              <FieldRow>
                <Field label="Full Name" required>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    className={inputCls}
                  />
                </Field>
                <Field label="Address" required>
                  <input
                    type="text"
                    name="address"
                    placeholder="Full Address"
                    required
                    className={inputCls}
                  />
                </Field>
              </FieldRow>
              <FieldRow>
                <Field label="Institute/Company" required>
                  <input
                    type="text"
                    name="institute"
                    placeholder="Institute / Company"
                    required
                    className={inputCls}
                  />
                </Field>
                <Field label="Designation" required>
                  <input
                    type="text"
                    name="designation"
                    placeholder="Designation"
                    required
                    className={inputCls}
                  />
                </Field>
              </FieldRow>
              <FieldRow>
                <Field label="Email" required>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className={inputCls}
                  />
                </Field>
                <Field label="Phone Number" required>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className={inputCls}
                  />
                </Field>
              </FieldRow>
              <FieldRow>
                <Field label="Registration Category" required>
                  <select
                    name="category"
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className={inputCls}
                  >
                    <option value="">Select Category</option>
                    <option value="Students">Students (UG, PG, PhD)</option>
                    <option value="Postdoc/Academia/Industry">
                      Postdoc / Academia / Industry
                    </option>
                    <option value="Attendee">Attendee</option>
                    <option value="Developing Countries">
                      Developing Countries
                    </option>
                  </select>
                </Field>
                <Field label="Mode of Presentation" required>
                  <select
                    name="presentationMode"
                    required={category !== "Developing Countries"}
                    value={presentationMode}
                    onChange={(e) => setPresentationMode(e.target.value)}
                    disabled={category === "Developing Countries"}
                    className={`${inputCls} ${category === "Developing Countries" ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <option value="">
                      {category === "Developing Countries"
                        ? "N/A"
                        : "Select Mode"}
                    </option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                  </select>
                </Field>
              </FieldRow>
              <Field label="Paper ID" required>
                <input
                  type="text"
                  name="paperId"
                  placeholder="Paper ID"
                  required
                  className={inputCls}
                />
              </Field>

              {amount !== "0" && (
                <div className="w-full bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center justify-between">
                  <span className="text-sm text-blue-700 poppins font-medium">
                    Registration Fee
                  </span>
                  <span className="text-lg font-bold text-blue-theme poppins">
                    {amount} SGD
                  </span>
                </div>
              )}

              <div className="flex flex-row-reverse items-center gap-4 w-full pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || amount === "0"}
                  className="px-8 py-2.5 bg-blue-theme rounded-lg text-white font-medium text-center poppins text-sm whitespace-nowrap cursor-pointer hover:bg-[#102768] transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
                >
                  Proceed to Payment →
                </button>
                <button
                  type="reset"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-gray-200 rounded-lg text-gray-700 font-medium poppins text-sm whitespace-nowrap cursor-pointer hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {/* ── STEP 2: PayPal Card Button ── */}
          {step === 2 && (
            <div className="flex flex-col gap-6 poppins">
              {/* Amount */}
              <div className="w-full bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center justify-between">
                <span className="text-sm text-blue-700 font-medium">
                  Amount to Pay
                </span>
                <span className="text-lg font-bold text-blue-theme">
                  {amount} SGD
                </span>
              </div>

              {/* Security notice */}
              <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 rounded-lg p-3 border border-gray-200">
                <svg
                  className="w-4 h-4 text-green-500 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Your card details are securely handled by PayPal and never
                  stored on our servers.
                </span>
              </div>

              {/*
                FUNDING.CARD renders ONLY the debit/credit card button.
                When clicked, PayPal opens its own hosted card form (popup/inline).
                createOrder hits your backend, onApprove moves to step 3.
                No confirm-order API needed at all.
              */}
              <div className="w-full max-w-md mx-auto">
                <PayPalButtons
                  fundingSource={FUNDING.CARD}
                  style={{
                    layout: "vertical",
                    shape: "rect",
                    label: "pay",
                    color: "black",
                  }}
                  createOrder={createOrder}
                  onApprove={onApprove}
                  onError={onError}
                  onCancel={() =>
                    setError("Payment was cancelled. Please try again.")
                  }
                />
              </div>

              <div className="flex items-center gap-4 w-full pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setStep(1);
                    setError("");
                  }}
                  className="px-6 py-2.5 bg-gray-200 rounded-lg text-gray-700 font-medium poppins text-sm whitespace-nowrap hover:bg-gray-300 transition-colors"
                >
                  ← Back
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 3: Upload Screenshot ── */}
          {step === 3 && (
            <form
              onSubmit={handleStep3Submit}
              className="flex flex-col gap-6 poppins"
            >
              <p className="text-sm text-gray-600">
                Payment confirmed! Please upload a screenshot of your payment
                confirmation as final proof.
              </p>

              <label
                htmlFor="screenshot"
                className={`w-full border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-colors
                  ${screenshotPreview ? "border-green-400 bg-green-50" : "border-gray-300 bg-gray-50 hover:border-blue-theme hover:bg-blue-50"}`}
              >
                {screenshotPreview ? (
                  <>
                    <img
                      src={screenshotPreview}
                      alt="Preview"
                      className="max-h-48 rounded-lg object-contain shadow"
                    />
                    <span className="text-green-600 text-sm font-semibold">
                      ✓ {screenshot?.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      Click to change
                    </span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-12 h-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-gray-500 text-sm font-medium">
                      Click to upload payment screenshot
                    </span>
                    <span className="text-xs text-gray-400">
                      PNG, JPG, JPEG accepted
                    </span>
                  </>
                )}
                <input
                  id="screenshot"
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  onChange={handleScreenshotChange}
                  className="hidden"
                />
              </label>

              <div className="flex flex-row-reverse items-center gap-4 w-full pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || !screenshot}
                  className="px-8 py-2.5 bg-blue-theme rounded-lg text-white font-medium poppins text-sm whitespace-nowrap hover:bg-[#102768] transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Complete Registration →"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </PayPalScriptProvider>
  );
}
