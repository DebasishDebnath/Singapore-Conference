import React, { useState, useRef } from "react";
import Heading from "../components/Heading";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Registration() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [category, setCategory] = useState("");
  const [presentationMode, setPresentationMode] = useState("");
  const [step, setStep] = useState(1);
  const [paymentId, setPaymentId] = useState(null);
  const formRef = useRef(null);
  const paymentIdRef = useRef(null);
  // const url = "http://192.168.1.226:5000"
  const url = "https://iem-singapore-backend.smartsociety.org"

  const handleReset = () => {
    setCategory("");
    setPresentationMode("");
    setStep(1);
    setPaymentId(null);
    paymentIdRef.current = null;
  };

  const getAmount = () => {
    if (category === "Developing Countries") return "250";
    if (!presentationMode) return "0";
    if (category === "Students") return presentationMode === "online" ? "250" : "350";
    if (category === "Postdoc/Academia/Industry") return presentationMode === "online" ? "350" : "450";
    if (category === "Attendee") return presentationMode === "online" ? "150" : "250";
    return "0";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    }
  };

  return (
    <div className="max-w-7xl w-full mx-auto flex flex-col lg:gap-16 gap-10 lg:py-20 py-14 px-6 items-center">
      <Heading title2="Registration" />

      {/* <div className="flex flex-col rounded-3xl border border-gray-300 w-full shadow-md">
        <div className="poppins font-semibold text-md py-2.5 px-4 flex justify-center text-center bg-blue-theme text-white rounded-t-3xl">
          How to Register
        </div>
        <div className="p-6 poppins-italic text-blue-theme text-sm flex flex-col gap-6">
          <p>
            Final submissions can only be uploaded with regular registration,
            and at least one author of each paper must register at the regular
            rate. <br />
            This fee is only applicable to a single author from each paper who
            will be coming to present his/her paper in the respective venue of
            the conference. For each paper, if more than one author will come to
            present the paper {" "}
            <span className="font-bold">
              then requisite amount as mentioned  required to be paid by each
              author at the conference venue
            </span>{" "}
            (this includes registration kit, and Food coupon for two days of the
            conference ). <br />
            - If an author has more than one unregistered paper, each paper must
            be registered. <br />
            Payment Methods: NEFT/RTGS/ Net transfer (No credit card payment
            method) <br />- If you are using NEFT/RTGS/ Net transfer please make
            sure, at least Paper ID is clearly mentioned in the Funds Transfer
            Application.
          </p>
          <div className="poppins-italic font-bold">
            <p className=" mb-2">Payment Details for Paper Registration:</p>
            <div className="p-3 bg-gray-50 rounded">
              <p>Name of the Bank: Indian Overseas Bank</p>
              <p>Branch/ Name: V</p>
              <p>
                Address: Indian Overseas Bank Electronics Complex, Sector -V,
                Kolkata - 700091
              </p>
              <p>Branch Code: 1642</p>
              <p>Swift Code: IOBKINBBXXX</p>
              <p>Account No: 825001008293</p>
              <p>Party Name: Institute of Engineering & Management Trust</p>
              <p>Account No: 8240010029488</p>
              <p>IFSC Code: IOBK0000842</p>
              <p>MICR: 700105048</p>
            </div>
          </div>

          <p className="">
            Please note that the authors need to mention the paper id in the
            remark section while doing NEFT/RTGS/net transfer. After your paper
            gets registered, the author needs to take a screenshot of the
            NEFT/RTGS/net transfer and have to e-mail that screenshot to the
            conference e-mail id{" "}
            <span>
              <a
                href="mailto:sense.conference@iem.edu.in"
                class="text-blue-theme underline "
              >
                (Sense.conference@iem.edu.in)
              </a>
            </span>
            along with their paper id and paper title. If any author will not
            send the screenshot to the conference email-id on or before the
            given deadline of the paper registration, then their registration
            will not be granted or treated as invalid. After the deadline, no
            paper will be considered for registration.
          </p>

          <p>
            <span className="font-bold pt-4">Cancellation Policy</span> <br />
            There will be no cancellation after Registration”
          </p>
        </div>
      </div> */}

      <div className="flex flex-col rounded-3xl border border-gray-300 md:w-full w-[88vw] shadow-md overflow-auto">
        <table className="w-full">
          <thead className="bg-blue-theme poppins text-white w-full">
            <tr className="text-left text-sm ">
              <th className="p-4 pl-6">Category</th>
              <th className="p-4 text-center">Registration Fees for Online</th>
              <th className="p-4 text-center">Registration Fees for Offline</th>
              <th className="p-4 text-center">Special Registration Fees</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-800 font-medium poppins-italic">
            <tr className="hover:bg-gray-50 text-sm">
              <td className="p-4">Students (UG, PG, PhD)</td>
              <td className="p-4 text-center">250 SGD</td>
              <td className="p-4 text-center">350 SGD</td>
              <td className="p-4 text-center">-</td>
            </tr>
            <tr className="hover:bg-gray-50 text-sm">
              <td className="p-4">Postdoc/Academia/Industry</td>
              <td className="p-4 text-center">350 SGD</td>
              <td className="p-4 text-center">450 SGD</td>
              <td className="p-4 text-center">-</td>
            </tr>
            <tr className="hover:bg-gray-50 text-sm">
              <td className="p-4">Attendee</td>
              <td className="p-4 text-center">150 SGD</td>
              <td className="p-4 text-center">250 SGD</td>
              <td className="p-4 text-center">-</td>
            </tr>
            <tr className="hover:bg-gray-50 text-sm">
              <td className="p-4">Developing Countries</td>
              <td className="p-4 text-center">-</td>
              <td className="p-4 text-center">-</td>
              <td className="p-4 text-center">250 SGD</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="w-full rounded-3xl shadow-md border border-gray-300 lg:p-16 md:p-12 p-8 flex flex-col md:gap-10 gap-10 ">
        <div className="flex justify-between items-center w-full pb-4 border-b border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 poppins">
            {step === 1 && "Participant Information"}
            {step === 2 && "Payment Details"}
          </h2>
          <span className="text-sm font-semibold text-blue-theme poppins">
            Step {step} of 2
          </span>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          onReset={handleReset}
          className="flex flex-col poppins"
        >
          <input type="hidden" />

          {/* STEP 1: Personal info */}
          <div className={step === 1 ? "flex flex-col gap-6 pt-4" : "hidden"}>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label htmlFor="name" className="font-semibold text-gray-800 text-sm">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required={step === 1}
                  className="w-full p-3 border border-gray-300 text-gray-700 rounded-lg shadow-md text-sm outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label htmlFor="address" className="font-semibold text-gray-800 text-sm">
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Full Address"
                  required={step === 1}
                  className="w-full p-3 border border-gray-300 text-gray-700 rounded-lg shadow-md text-sm outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label htmlFor="institute" className="font-semibold text-gray-800 text-sm">
                  Institute/Company <span className="text-red-500">*</span>
                </label>
                <input
                  id="institute"
                  type="text"
                  name="institute"
                  placeholder="Institute / Company"
                  required={step === 1}
                  className="w-full p-3 border border-gray-300 text-gray-700 rounded-lg shadow-md text-sm outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label htmlFor="designation" className="font-semibold text-gray-800 text-sm">
                  Designation <span className="text-red-500">*</span>
                </label>
                <input
                  id="designation"
                  type="text"
                  name="designation"
                  placeholder="Designation"
                  required={step === 1}
                  className="w-full p-3 border border-gray-300 text-gray-700 rounded-lg shadow-md text-sm outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label htmlFor="email" className="font-semibold text-gray-800 text-sm">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required={step === 1}
                  className="w-full p-3 border border-gray-300 text-gray-700 rounded-lg shadow-md text-sm outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label htmlFor="phone" className="font-semibold text-gray-800 text-sm">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required={step === 1}
                  className="w-full p-3 border border-gray-300 text-gray-700 rounded-lg shadow-md text-sm outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label htmlFor="category" className="font-semibold text-gray-800 text-sm">
                  Registration Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  required={step === 1}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-3 border border-gray-300 text-gray-700 rounded-lg shadow-md text-sm outline-none bg-white"
                >
                  <option value="">Select Category</option>
                  <option value="Students">Students (UG, PG, PhD)</option>
                  <option value="Postdoc/Academia/Industry">Postdoc / Academia / Industry</option>
                  <option value="Attendee">Attendee</option>
                  <option value="Developing Countries">Developing Countries</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label htmlFor="presentationMode" className="font-semibold text-gray-800 text-sm">
                  Mode of Presentation <span className="text-red-500">*</span>
                </label>
                <select
                  id="presentationMode"
                  name="presentationMode"
                  required={step === 1}
                  value={presentationMode}
                  onChange={(e) => setPresentationMode(e.target.value)}
                  className="w-full p-3 border border-gray-300 text-gray-700 rounded-lg shadow-md text-sm outline-none bg-white"
                >
                  <option value="">Select Mode</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="paperId" className="font-semibold text-gray-800 text-sm">
                Paper ID <span className="text-red-500">*</span>
              </label>
              <input
                id="paperId"
                type="text"
                name="paperId"
                required={step === 1}
                placeholder="Paper ID"
                className="w-full p-3 border border-gray-300 text-gray-700 rounded-lg shadow-md text-sm outline-none"
              />
            </div>

            <div className="flex flex-row-reverse items-center gap-4 w-full ">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-2.5 justify-center flex bg-blue-theme rounded-lg text-white font-medium text-center poppins text-sm h-fit w-fit whitespace-nowrap cursor-pointer hover:bg-[#102768] transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
              >
                Proceed to Payment
              </button>
              <button
                type="reset"
                className="px-6 py-2.5 justify-center flex bg-gray-200 rounded-lg text-gray-700 font-medium text-center poppins text-sm h-fit w-fit whitespace-nowrap cursor-pointer hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>

          {/* STEP 2: Payment Details */}
          <div className={step === 2 ? "flex flex-col gap-6 pt-4" : "hidden"}>
            <div className="flex flex-col gap-4 w-full">
              <h3 className="font-semibold text-gray-800 text-lg">
                Complete Payment via PayPal
              </h3>
              <p className="text-sm text-gray-600 poppins">
                Amount to pay: <span className="font-bold">{getAmount()} SGD</span>
              </p>

              <div className="w-full max-w-md mx-auto z-0 relative mt-4">
                {/* Replace "test" with your actual PayPal Client ID */}
                <PayPalScriptProvider options={{ "client-id": "Aah2l1-Xa_YA21dFnL47HOSSh1IceW6cTz8VqaGh-9jqGlIpqSaX_nJMQOk6goFhf3kfQpDc33z5r_Mp", currency: "SGD", intent: "capture" }}>
                  <PayPalButtons
                    style={{ layout: "vertical", color: "blue", shape: "rect", label: "pay" }}
                    disabled={getAmount() === "0" || isSubmitting}
                    
                    // 🔹 STEP 1: CREATE ORDER (calls your backend)
                    createOrder={async () => {
                      try {
                        const form = new FormData(formRef.current);
                        const payload = {
                          category: form.get("category"), 
                          type: form.get("presentationMode"),
                          name: form.get("name"),
                          email: form.get("email"),
                          phoneNo: form.get("phone"),
                          designation: form.get("designation"),
                          instituteOrCompany: form.get("institute"),
                          address: form.get("address"),
                          paperId: form.get("paperId")
                        };
                        
                        const res = await fetch(`${url}/api/v1/payments/create-order`, {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(payload)
                        });
                        
                        const data = await res.json();
                        if (!data.success) {
                          throw new Error(data.message || "Failed to create order");
                        }
                        
                        const { orderId, paymentId: newPaymentId } = data.data;
                        paymentIdRef.current = newPaymentId; // Using ref to guarantee freshness in onApprove
                        setPaymentId(newPaymentId);
                        
                        return orderId;
                      } catch (err) {
                        console.error("Create Order Error:", err);
                        alert(`Error: ${err.message || "Failed to initiate payment."}`);
                      }
                    }}
                    
                    // 🔹 STEP 2: ON APPROVE
                    onApprove={async (data, actions) => {
                      try {
                        console.log("Approved:", data.orderID);
                        
                        // 🔥 Directly capture (recommended for PayPal button flow)
                        const res = await fetch(`${url}/api/v1/payments/capture-order`, {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ paymentId: paymentIdRef.current })
                        });
                        
                        const result = await res.json();
                        console.log("Capture Success:", result);
                        
                        if (!result.success) {
                           throw new Error(result.message || "Capture failed on server.");
                        }
                        
                        alert("Payment Successful 🎉");
                        formRef.current.reset();
                        handleReset();
                      } catch (err) {
                        console.error("Capture Error:", err);
                        alert(`Capture Error: ${err.message || "Please contact support."}`);
                      }
                    }}
                    onError={(err) => {
                        console.error("PayPal Error:", err);
                    }}
                  />
                </PayPalScriptProvider>
              </div>
            </div>

            <div className="flex flex-row-reverse items-center gap-4 w-full ">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-6 py-2.5 justify-center flex bg-gray-200 rounded-lg text-gray-700 font-medium text-center poppins text-sm h-fit w-fit whitespace-nowrap cursor-pointer hover:bg-gray-300 transition-colors"
              >
                Back
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* <button
              type="submit"
              className="px-6 py-2.5 justify-center flex bg-blue-theme rounded-lg text-white font-medium text-center poppins text-sm h-fit w-fit whitespace-nowrap cursor-pointer hover:bg-[#102768] transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
            >
              Register Now
            </button> */}

      {/* <div className="flex flex-col rounded-3xl border border-gray-300 w-full shadow-md">
        <div className="poppins font-semibold text-md py-2.5 px-4 flex justify-center text-center bg-blue-theme text-white rounded-t-3xl">
          Register
        </div>
        <div className="p-6 poppins-italic text-sm flex flex-col gap-4 justify-center items-center">
          <img src="./payid.png" alt="Bank Logo" className="mb-6 w-90 h-auto" />

        </div>
      </div> */}
    </div>
  );
}
