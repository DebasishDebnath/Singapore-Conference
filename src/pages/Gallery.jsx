import React, { useState } from "react";
import Heading from "../components/Heading";

export default function Gallery() {
  const [showMore, setShowMore] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const openImage = (src) => setSelectedImg(src);
  const closePopup = () => setSelectedImg(null);

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center lg:py-20 py-14 px-4">

      {/* Title */}
      <Heading title1="Gallery" />

      {/* BOX */}
      <div className="bg-white border border-gray-300 shadow-xl rounded-2xl p-4 w-full">

        {/* FIRST ROW */}
        <div className="flex lg:flex-row flex-col gap-4">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4 flex-1">

            <div className="h-[270px] sm:h-[350px] md:h-[330px] group cursor-pointer"
              onClick={() => openImage("/img1.jpeg")}
            >
              <img 
                src="/img1.jpeg" 
                className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
              />
            </div>

            <div className="h-[270px] sm:h-[350px] md:h-[330px] group cursor-pointer"
              onClick={() => openImage("/img2.jpeg")}
            >
              <img 
                src="/img2.jpeg" 
                className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
              />
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4 flex-1">

            <div className="h-[140px] sm:h-[160px] md:h-[170px] group cursor-pointer"
              onClick={() => openImage("/img3.jpeg")}
            >
              <img 
                src="/img3.jpeg" 
                className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
              />
            </div>

            <div className="h-[110px] sm:h-[130px] md:h-[140px] group cursor-pointer"
              onClick={() => openImage("/img4.jpeg")}
            >
              <img 
                src="/img4.jpeg" 
                className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
              />
            </div>

            <div className="h-[120px] sm:h-[160px] md:h-[160px] group cursor-pointer"
              onClick={() => openImage("/img5.jpg")}
            >
              <img 
                src="/img5.jpg" 
                className="w-full h-full object-cover object-top rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
              />
            </div>

            <div className="h-[110px] sm:h-[130px] md:h-[140px] group cursor-pointer"
              onClick={() => openImage("/img6.jpeg")}
            >
              <img 
                src="/img6.jpeg" 
                className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
              />
            </div>

          </div>
        </div>

        {/* SHOW MORE SECTION */}
        {showMore && (
          <div className="flex lg:flex-row flex-col gap-4 mt-6">

            {/* LEFT EXTRA */}
            <div className="flex flex-col gap-4 flex-1">

              <div className="h-[150px] sm:h-[170px] group cursor-pointer"
                onClick={() => openImage("/img7.jpg")}
              >
                <img 
                  src="/img7.jpg" 
                  className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                />
              </div>

              <div className="h-[110px] sm:h-[130px] group cursor-pointer"
                onClick={() => openImage("/iem2.jpg")}
              >
                <img 
                  src="/iem2.jpg" 
                  className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                />
              </div>

              <div className="h-[110px] sm:h-[130px] group cursor-pointer"
                onClick={() => openImage("/img9.jpg")}
              >
                <img 
                  src="/img9.jpg" 
                  className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                />
              </div>

              <div className="h-[140px] sm:h-[160px] group cursor-pointer"
                onClick={() => openImage("/iem1.jpg")}
              >
                <img 
                  src="/iem1.jpg" 
                  className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                />
              </div>

            </div>

            {/* RIGHT EXTRA */}
            <div className="flex flex-col gap-4 flex-1">

              <div className="h-[255px] sm:h-[320px] group cursor-pointer"
                onClick={() => openImage("/img9.jpg")}
              >
                <img 
                  src="/img9.jpg" 
                  className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                />
              </div>

              <div className="h-[250px] sm:h-[320px] group cursor-pointer"
                onClick={() => openImage("/img8.jpg")}
              >
                <img 
                  src="/img8.jpg" 
                  className="w-full h-full object-cover object-top rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                />
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

      {/* POPUP */}
      {selectedImg && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
             onClick={closePopup}>
          <img src={selectedImg} className="max-w-[90%] max-h-[85%] rounded-xl shadow-xl" />
        </div>
      )}
    </div>
  );
}
