import React, { useRef, useState } from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/1.jpg";
import img6 from "../assets/2.jpg";
import img7 from "../assets/3.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/19.jpg";
import img14 from "../assets/18.jpg";
import img15 from "../assets/15.jpg";
import img16 from "../assets/16.jpg";
import img17 from "../assets/17.jpeg";
import img18 from "../assets/14.jpg";

import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const ImageCarousel = () => {
  const scrollRef = useRef(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
  ];

  const scroll = (dir) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth / 1.5;
    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const openModal = (index) => setSelectedImageIndex(index);
  const closeModal = () => setSelectedImageIndex(null);

  const previousImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="w-full pt-[40px] pb-[20px] lg:pt-[40px] lg:pb-[40px] relative overflow-hidden">
      <div
        className="relative flex items-center w-full overflow-x-auto scrollbar-hide gap-6 px-4 [@media(min-width:1440px)]:mx-auto [@media(min-width:1440px)]:max-w-[1440px]"
        ref={scrollRef}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`carousel-${i}`}
            onClick={() => openModal(i)}
            className="w-[175px] h-[215px] lg:w-[350px] lg:h-[430px] object-cover rounded-[24px] shrink-0 cursor-pointer"
          />
        ))}
      </div>

      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
      >
        <FaChevronRight size={20} />
      </button>

      {selectedImageIndex !== null && (
        <div
          onClick={closeModal}
          className="fixed inset-0 px-4 bg-black bg-opacity-60 flex justify-center items-center z-50"
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white z-50"
            >
              <FaTimes size={24} />
            </button>
            <button
              onClick={previousImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white z-50 bg-black bg-opacity-30 p-2 rounded-full"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white z-50 bg-black bg-opacity-30 p-2 rounded-full"
            >
              <FaChevronRight size={24} />
            </button>
            <img
              src={images[selectedImageIndex]}
              alt={`Enlarged view ${selectedImageIndex}`}
              className="max-w-full max-h-[90vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageCarousel;
