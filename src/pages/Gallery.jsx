import React, { useState } from "react";

export default function Gallery() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="w-full flex flex-col items-center py-10">

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-700 mb-6">Gallery</h2>

      {/* ONE GALLERY BOX */}
      <div className="bg-white border border-gray-300 shadow-xl rounded-2xl p-4 lg:w-[1153.64px] w-full">

        {/* FIRST ROW */}
        <div className="flex lg:flex-row flex-col gap-4">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-2 lg:w-[655.2px] w-full">

            <div className="border-b border-gray-300" style={{ height: "255.14px" }}>
              <img src="/img1.jpeg" className="w-full h-full object-cover rounded-xl" />
            </div>

            <div className="border-b border-gray-300" style={{ height: "246px" }}>
              <img src="/img2.jpeg" className="w-full h-full object-cover rounded-xl" />
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-2 lg:w-[442.91px] w-full">

            <div className="border-b border-gray-300" style={{ height: "141.17px" }}>
              <img src="/img3.jpeg" className="w-full h-full object-cover rounded-xl" />
            </div>

            <div className="border-b border-gray-300" style={{ height: "108.79px" }}>
              <img src="/img4.jpeg" className="w-full h-full object-cover rounded-xl" />
            </div>

            <div className="border-b border-gray-300" style={{ height: "120px" }}>
              <img src="/img5.jpg" className="w-full h-full object-cover object-top rounded-xl" />
            </div>

            <div className="border-b border-gray-300" style={{ height: "108.79px" }}>
              <img src="/img6.jpeg" className="w-full h-full object-cover rounded-xl" />
            </div>

          </div>
        </div>

        {/* SHOW MORE SECTION */}
        {showMore && (
          <div className="flex lg:flex-row flex-col gap-4 mt-6">

            {/* LEFT EXTRA */}
            <div className="flex flex-col gap-2 lg:w-[655.2px] w-full">

              <div className="border-b border-gray-300" style={{ height: "150px" }}>
                <img src="/img7.jpg" className="w-full h-full object-cover rounded-xl" />
              </div>

              <div className="border-b border-gray-300" style={{ height: "108.79px" }}>
                <img src="/iem2.jpg" className="w-full h-full object-cover rounded-xl" />
              </div>

              <div className="border-b border-gray-300" style={{ height: "108.79px" }}>
                <img src="/img9.jpg" className="w-full h-full object-cover rounded-xl" />
              </div>

              <div className="border-b border-gray-300" style={{ height: "140px" }}>
                <img src="/iem1.jpg" className="w-full h-full object-cover rounded-xl" />
              </div>

            </div>

            {/* RIGHT EXTRA */}
            <div className="flex flex-col gap-2 lg:w-[442.91px] w-full">

              <div className="border-b border-gray-300" style={{ height: "255.14px" }}>
                <img src="/iem2.jpg" className="w-full h-full object-cover rounded-xl" />
              </div>

              <div className="border-b border-gray-300" style={{ height: "260px" }}>
                <img src="/img8.jpg" className="w-full h-full object-cover object-top rounded-xl" />
              </div>

            </div>

          </div>
        )}
      </div>

      {/* BUTTON */}
      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-6 px-8 py-2 bg-[#112D60] text-white rounded-full hover:bg-[#0d2148] transition-all"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>

    </div>
  );
}
