import React, { useState } from "react";
import Heading from "../components/Heading";

export default function Gallery() {
  const [showMore, setShowMore] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const openImage = (src) => setSelectedImg(src);
  const closePopup = () => setSelectedImg(null);

  const images = [
    "/img1.jpeg",
    "/iem2.jpg",
    "/img4.jpeg",
    "/img5.jpg",
    "/img3.jpeg",
    "/img7.jpg",
    "/iem1.jpg",
    "/iem2.jpg",
    "/img9.jpg",
  ]

  // Group images into rows of 3
  const imageRows = images.reduce((acc, _, i) => {
    if (i % 3 === 0) {
      acc.push(images.slice(i, i + 3));
    }
    return acc;
  }, []);

  const visibleRows = showMore ? imageRows : imageRows.slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:gap-16 gap-10 lg:py-20 py-14 px-6 items-center">
      {/* Title */}
      <Heading title1="Gallery" />

      <div className="flex flex-col gap-4 w-full">
        <div className="border border-gray-300 shadow-md rounded-t-3xl p-4 w-full flex flex-col gap-1">
          {visibleRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex md:flex-row flex-col gap-1 w-full ${rowIndex % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* --- LARGE IMAGE --- */}
              {row[0] && (
                <div className="flex-1 cursor-pointer overflow-hidden" onClick={() => openImage(row[0])}>
                  <img
                    src={row[0]}
                    alt={`Gallery image ${rowIndex * 3 + 1}`}
                    className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                  />
                </div>
              )}

              {/* --- SMALL IMAGES --- */}
              {(row[1] || row[2]) && (
                <div className="flex-1 flex flex-col gap-1 h-100">
                  {row[1] && (
                    <div className="h-1/2 cursor-pointer overflow-hidden" onClick={() => openImage(row[1])}>
                      <img
                        src={row[1]}
                        alt={`Gallery image ${rowIndex * 3 + 2}`}
                        className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                  {row[2] && (
                    <div className="h-1/2 cursor-pointer overflow-hidden" onClick={() => openImage(row[2])}>
                      <img
                        src={row[2]}
                        alt={`Gallery image ${rowIndex * 3 + 3}`}
                        className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* BUTTON */}
        {imageRows.length > 2 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-8 py-2 bg-blue-theme text-white rounded-b-3xl cursor-pointer w-full poppins text-md font-medium"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        )}

        {/* POPUP */}
        {selectedImg && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50"
            onClick={closePopup}
          >
            <img
              src={selectedImg}
              alt="Selected"
              className="max-w-6xl shadow-xl"
            />
          </div>
        )}
      </div>
    </div>
  );
}
