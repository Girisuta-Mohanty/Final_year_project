import React, { useEffect, useState } from "react";
import "./codepen.css"

const ImageSlider = () => {
  
  const images = [
    { id: 1, src: "iiit1.png" },
    { id: 2, src: "iiit2.png" },
    { id: 3, src: "iiit3.png" },
    { id: 4, src: "iiit4.png" },
    { id: 5, src: "iiitneww.jpg", alt: "Pic 5" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div  className ="home" style={{backgorundColor:"black",marginTop:"-28px",width:"98.5vw",overflowX:"hidden",overflowY:"hidden",display:"flex",justifyContent:"center"}}>
      <div className="cascade-slider_container" id="cascade-slider">
        <div className="cascade-slider_slides">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`cascade-slider_item ${
                index === currentIndex ? "now" : ""
              } ${
                index === currentIndex - 1 ||
                (currentIndex === 0 && index === images.length - 1)
                  ? "prev"
                  : ""
              } ${
                index === currentIndex + 1 ||
                (currentIndex === images.length - 1 && index === 0)
                  ? "next"
                  : ""
              }`}
            >
              <img className="cimage" src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>

        <ol className="cascade-slider_nav">
          {images.map((image, index) => (
            <li
              key={image.id}
              className={`cascade-slider_dot ${
                index === currentIndex ? "cur" : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></li>
          ))}
        </ol>


      <span
        className="cascade-slider_arrow cascade-slider_arrow-left"
        data-action="prev"
        onClick={handlePrev}
      >
        Prev
      </span>
      <span
        className="cascade-slider_arrow cascade-slider_arrow-right"
        data-action="next"
        onClick={handleNext}
      >
        Next
      </span>
    </div>

    </div>
  );
};

export default ImageSlider;
