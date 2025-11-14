import React from "react";

export default function Registration() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 text-blue-theme poppins-extralight-italic ">
          <h1 className="text-3xl font-bold ">Registration</h1>
        </div>

        {/* How to Register Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8 border border-[#dbdbdb]">
          <div className="bg-blue-theme text-white px-6 py-3  text-center poppins-bold ">
            How to Register
          </div>

          <div className="p-6 text-base text-gray-700 leading-relaxed space-y-4 text-blue-theme poppins-medium poppins-regular-italic">
            <p>
              Final submissions can only be uploaded with regular registration,
              and at least one author of each paper must register at the regular
              rate.
            </p>
            <p>
              This fee is only applicable to a single author from each paper who
              will be coming to present his/her paper in the respective venue of
              the conference. For each paper, if more than one author will come
              to present the paper &nbsp;
              <span className="font-bold">
                 then requisite amount as mentioned  required to be paid by each
                author at the conference venue
              </span>
              &nbsp; (this includes registration kit, and Food coupon for two
              days of the conference ).
            </p>
            <p></p>

            <p>
              - If an author has more than one unregistered paper, each paper
              must be registered:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                Payment Methods: NEFT/RTGS/ Net transfer (No credit card payment
                method)
              </li>
              <li>
                If you are using NEFT/RTGS/ Net transfer please make sure, at
                least Paper ID is clearly mentioned in the Funds Transfer
                Application.
              </li>
            </ul>
            <div>
              {/* Bank Details */}
              <p className="poppins-semibold-italic   mb-2">
                Payment Details for Paper Registration:
              </p>
              <div className="mt-4 p-3 bg-gray-50 rounded poppins-semibold-italic">
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

            <p className="pt-2">
              Please note that the authors need to mention the paper id in the
              remark section while doing NEFT/RTGS/net transfer. After your
              paper gets registered, the author needs to take a screenshot of
              the NEFT/RTGS/net transfer and have to e-mail that screenshot to
              the conference e-mail id{" "}
              <span>
                <a
                  href="mailto:win60@iem.edu.in"
                  class="text-blue-theme underline "
                >
                  (win60@iem.edu.in)
                </a>
              </span>
              along with their paper id and paper title. If any author will not
              send the screenshot to the conference email-id on or before the
              given deadline of the paper registration, then their registration
              will not be granted or treated as invalid. After the deadline, no
              paper will be considered for registration.
            </p>

            <div className="font-bold pt-4">Cancellation Policy</div>
            <p>There will be no cancellation after Registration”</p>
          </div>
        </div>

        {/* Registration Fees Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8 borderh border-[#dbdbdb]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-theme poppins-bold text-white">
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Category
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Registration fees for Indian Author Early Birds
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Registration fees for Indian Author Regular
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Registration Fees for Foreign Author
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 poppins-regular-italic text-black text-base">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-black">
                    Student / Research Scholar
                  </td>
                  <td className="px-4 py-3 text-sm text-black">5500 INR/-</td>
                  <td className="px-4 py-3 text-sm text-black">6000 INR/-</td>
                  <td className="px-4 py-3 text-sm text-black">200 USD</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-black">Academician</td>
                  <td className="px-4 py-3 text-sm text-black">6500 INR/-</td>
                  <td className="px-4 py-3 text-sm text-black">7000 INR/-</td>
                  <td className="px-4 py-3 text-sm text-black">200 USD</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-black">
                    Industry Professional
                  </td>
                  <td className="px-4 py-3 text-sm text-black">7500 INR/-</td>
                  <td className="px-4 py-3 text-sm text-black">70000 INR/-</td>
                  <td className="px-4 py-3 text-sm text-black">200 USD</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-black">
                    Only Attending
                  </td>
                  <td className="px-4 py-3 text-sm text-black">2500 INR/-</td>
                  <td className="px-4 py-3 text-sm text-black">2500 INR/-</td>
                  <td className="px-4 py-3 text-sm text-black">50 USD</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-black">Extra Page</td>
                  <td className="px-4 py-3 text-sm text-black">2000 INR/-</td>
                  <td className="px-4 py-3 text-sm text-black">2000 INR/-</td>
                  <td className="px-4 py-3 text-sm text-black">50 USD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Register Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-[#dbdbdb]">
          <div className="bg-blue-theme text-white px-6 py-3 poppins-bold-italic text-center text-xl ">
            Register
          </div>

          <div className="p-8 flex flex-col items-center justify-center">
            {/* Bank Logo */}
            <img
              src="./payid.png"
              alt="Bank Logo"
              className="mb-6 w-90 h-auto"
            />

            {/* QR Code Placeholder */}

            {/* UPI Details */}
          </div>
        </div>
      </div>
    </div>
  );
}
