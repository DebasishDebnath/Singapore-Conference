import React from "react";
import Heading from "../components/Heading";

export default function Registration() {
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

      <button
              type="submit"
              className="px-6 py-2.5 justify-center flex bg-blue-theme rounded-lg text-white font-medium text-center poppins text-sm h-fit w-fit whitespace-nowrap cursor-pointer hover:bg-[#102768] transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
            >
              Register Now
            </button>

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
