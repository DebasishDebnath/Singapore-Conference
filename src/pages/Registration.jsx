import React from 'react'

export default function Registration() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Registration</h1>
        </div>

        {/* How to Register Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-blue-900 text-white px-6 py-3 font-semibold text-center ">
            How to Register
          </div>

          <div className="p-6 text-sm text-gray-700 leading-relaxed space-y-4">
            <p>
              Final submissions can only be uploaded with regular registration, and at least one author of each paper must register at the regular rate.
            </p>

            <p>
              <span className="font-bold">Only one E-mail Registration is allowed per single corresponding author:</span>
              In case of violation of this rule, if more than one author comes to present the paper,
              <span className="font-bold"> then the requisite amount must be paid by each author at the conference venue (registration fee + fixed coupon for two days).</span>
            </p>

            <p>If an author has more than one unregistered paper, each paper must be registered:</p>

            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Payment Email / e-UPI / Net banking:</li>
              <li>
                If you use NEFT/RTGS/transfer, ensure the Paper ID is clearly mentioned in the Funds Transfer Application.
              </li>
            </ul>

            {/* Bank Details */}
            <div className="mt-4 p-3 bg-gray-50 rounded">
              <p className="font-semibold mb-2">Bank Details:</p>
              <p>Name of the Bank: Indian Overseas Bank</p>
              <p>Branch/ Name: V</p>
              <p>Address: Indian Overseas Bank Electronics Complex, Sector -V, Kolkata - 700091</p>
              <p>Branch Code: 1642</p>
              <p>Swift Code: IOBKINBBXXX</p>
              <p>Account No: 825001008293</p>
              <p>Party Name: Institute of Engineering & Management Trust</p>
              <p>Account No: 8240010029488</p>
              <p>IFSC Code: IOBK0000842</p>
              <p>MICR: 700105048</p>
            </div>

            <p className="pt-2">
              Authors must mention the paper ID in the remark section while doing NEFT/RTGS/online transfer. After registration, email a screenshot of the payment to the conference email or
              <span className="text-blue-600 underline"> catcalligraphysitu@s.com</span> along with the paper ID and title. If the screenshot is not sent within two weeks after the registration deadline, the registration will be invalid.
            </p>

            <div className="font-bold pt-4">Cancellation Policy</div>
            <p>No cancellation is allowed after registration.</p>
          </div>
        </div>

        {/* Registration Fees Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="px-4 py-3 text-left text-sm font-semibold">Category</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Indian Author (Both Pages)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Indian Author (Regular)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Foreign Author</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">Student / Research Scholar</td>
                  <td className="px-4 py-3 text-sm text-gray-700">₹550</td>
                  <td className="px-4 py-3 text-sm text-gray-700">₹600</td>
                  <td className="px-4 py-3 text-sm text-gray-700">300 USD</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">Academician</td>
                  <td className="px-4 py-3 text-sm text-gray-700">₹700</td>
                  <td className="px-4 py-3 text-sm text-gray-700">₹800</td>
                  <td className="px-4 py-3 text-sm text-gray-700">350 USD</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">Industry Professional</td>
                  <td className="px-4 py-3 text-sm text-gray-700">₹900</td>
                  <td className="px-4 py-3 text-sm text-gray-700">₹1000</td>
                  <td className="px-4 py-3 text-sm text-gray-700">400 USD</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">Only Attending</td>
                  <td className="px-4 py-3 text-sm text-gray-700">₹500</td>
                  <td className="px-4 py-3 text-sm text-gray-700">₹600</td>
                  <td className="px-4 py-3 text-sm text-gray-700">50 USD</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">Only Page</td>
                  <td className="px-4 py-3 text-sm text-gray-700">₹850</td>
                  <td className="px-4 py-3 text-sm text-gray-700">₹950</td>
                  <td className="px-4 py-3 text-sm text-gray-700">50 USD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Register Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-900 text-white px-6 py-3 font-semibold text-center">
            Register
          </div>

          <div className="p-8 flex flex-col items-center justify-center">

            {/* Bank Logo */}
            <div className="mb-6 flex items-center justify-center w-32 h-20">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">IOB</span>
                </div>
                <p className="text-xs font-semibold text-gray-800">Indian Overseas Bank</p>
                <p className="text-xs text-gray-600">भारतीय ओवरसीज बैंक</p>
              </div>
            </div>

            {/* QR Code Placeholder */}
            <div className="mb-6">
              <div className="w-32 h-32 bg-gray-200 border-2 border-gray-400 rounded flex items-center justify-center">
                <svg className="w-full h-full p-2" viewBox="0 0 100 100">
                  <rect width="100" height="100" fill="#E5E7EB" />
                  <text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-gray-500 text-xs font-semibold"
                  >
                    QR Code
                  </text>
                </svg>
              </div>
            </div>

            {/* UPI Details */}
            <p className="font-bold text-gray-800 mb-1">IEMT</p>
            <p className="text-sm text-gray-700">UPI ID : iemt@iob</p>

          </div>
        </div>

      </div>
    </div>
  );
}



