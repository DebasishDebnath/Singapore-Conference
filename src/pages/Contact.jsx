import React from "react";
import Heading from "../components/Heading";

function Contact() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:gap-16 gap-10 lg:py-20 py-14 px-6 items-center w-full">
      <Heading title1="Contact" />

      {/* Big white box area */}
      <div className="w-full rounded-3xl shadow-md border border-gray-300 lg:p-16 md:p-12 p-8  flex flex-col md:flex-row lg:gap-20 md:gap-14 gap-10 ">
        {/* LEFT SECTION — Heading + Address */}
        <div className="w-full flex flex-col md:w-1/2 lg:gap-10 gap-8">
          <div className="flex flex-col gap-2">
            <Heading title1="Institute Of"/>
            <Heading title2="Engineering & Management"/>
          </div>

          <div className="flex flex-col gap-2.5 text-gray-800 font-medium text-md poppins-italic">
            <div>
              <h3 className="font-bold">Address</h3>
              <p className="">
                Management House, D-1, Sector-V, Saltlake Electronics <br />
                Kolkata – 700 091, West Bengal, India.
              </p>
            </div>
            <div>
              <h3 className="font-bold">
                Professor Contact
              </h3>
              <p className="">Prof.(Dr.) Indrajit De</p>
            </div>
            <div>
              <h3 className="font-bold">Phone</h3>
              <p className="">9836275061</p>
            </div>
            <div>
              <h3 className="font-bold">Email</h3>
              <p className="underline cursor-pointer">Indrajit.De@iem.edu.in</p>
            </div>
            <div>
              <h3 className="font-bold">
                Conference E-mail
              </h3>
              <p className="underline cursor-pointer">win60@iem.edu.in</p>
            </div>
          </div>
        </div>

        {/* Right side: form + map */}
        <div className="w-full flex flex-col md:w-1/2 gap-4 poppins">
          <input
            type="text"
            placeholder="name"
            className="w-full p-3 border border-gray-300 text-gray-700 rounded-3xl shadow-md text-sm outline-none"
          />
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="email"
              placeholder="email address"
              className="w-full lg:w-1/2 p-3 border border-gray-300 text-gray-700 rounded-3xl shadow-md text-sm outline-none"
            />
            <input
              type="text"
              placeholder="phone number"
              className="w-full lg:w-1/2 p-3 border border-gray-300 text-gray-700 rounded-3xl shadow-md text-sm outline-none"
            />
          </div>
          <textarea
            placeholder="add a message"
            rows="3"
            className="w-full p-3 border border-gray-300 text-gray-700 rounded-3xl shadow-md text-sm outline-none fixed-resize"
          />
          <div className="w-full h-full rounded-3xl shadow-md overflow-hidden border border-gray-300 text-gray-700">
            <iframe
              title="Map"
              className="w-full h-full"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8020804141656!2d103.7734796!3d1.2932081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1aff3f1cf5b1%3A0x7ae21f4141402cfd!2sShaw%20Foundation%20Alumni%20House!5e0!3m2!1sen!2sin!4v1772774266337!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
