import React from 'react'
import Heading from '../components/Heading'

 function Contact() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-20 lg:py-20 py-14 px-8">

      {/* Main page heading */}
      <div className="w-full flex justify-center">
        <Heading title1="CONTACT" />
      </div>

      {/* Big white box area */}
      <div className="max-w-[1200px] mx-auto bg-white rounded-2xl shadow-md border border-[#CFCFCF] p-6 md:p-6">

        <div className="flex flex-col md:flex-row gap-10">
      {/* LEFT SECTION — Heading + Address */}
       <div className="w-full md:w-1/2 space-y-2">

      {/* Two-line heading like Figma */}
        <Heading title1="Institute Of" />
        <Heading title2="Engineering & Management" />

            {/* Address and contact details */}
            <div className="space-y-2 text-gray-700 text-sm leading-relaxed">

              {/* Address section */}
              <div>
                <p className="font-semibold text-gray-900 text-base">Address</p>
                <p>
                  Management House, D-1, Sector-V, Saltlake Electronics <br />
                  Kolkata – 700 091, West Bengal, India.
                </p>
              </div>

              {/* Professor contact */}
              <div>
                <p className="font-semibold text-gray-900 text-base">Professor Contact</p>
                <p>Prof.(Dr.) Indrajit De</p>
              </div>

              {/* Phone number */}
              <div>
                <p className="font-semibold text-gray-900 text-base">Phone</p>
                <p>9836275061</p>
              </div>

              {/* Email */}
              <div>
                <p className="font-semibold text-gray-900 text-base">Email</p>
                <p className="underline text-blue-600">Indrajit.De@iem.edu.in</p>
              </div>

              {/* Conference email */}
              <div>
                <p className="font-semibold text-gray-900 text-base">Conference E-mail</p>
                <p className="underline text-blue-600">win60@iem.edu.in</p>
              </div>

            </div>
          </div>

          {/* Right side: form + map */}
          <div className="w-full md:w-1/2 flex flex-col gap-2">

            {/* Name input */}
            <input
              type="text"
              placeholder="name"
              className="w-full p-3 border rounded-full text-sm outline-none"
            />

            {/* Email and phone in one row */}
            <div className="flex flex-col sm:flex-row gap-4">

              {/* Email input */}
              <input
                type="email"
                placeholder="email address"
                className="w-full sm:w-1/2 p-3 border rounded-full text-sm outline-none"
              />

              {/* Phone input */}
              <input
                type="text"
                placeholder="phone number"
                className="w-full sm:w-1/2 p-3 border rounded-full text-sm outline-none"
              />

            </div>

            {/* Message input box */}
            <textarea
              placeholder="add a message"
              rows="3"
              className="w-full p-3 border rounded-xl text-sm outline-none"
            />

            {/* Google map section */}
            <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden border">
              <iframe
                title="Map"
                className="w-full h-full"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14736.204515329586!2d88.430916297625!3d22.577190970285905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sManagement%20House%2C%20D-1%2C%20Sector-V%2C%20Saltlake%20Electronics%20Kolkata%20%E2%80%93%20700%20091%2C%20West%20Bengal%2C%20India.!5e0!3m2!1sen!2sin!4v1763365169109!5m2!1sen!2sin"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}


export default Contact;
