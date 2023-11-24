import React, { useState } from "react";
import { galleryData } from "../../assets/data/gallery.js";

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const length = galleryData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(galleryData) || galleryData.length <= 0) {
    return null;
  }

  return (
    <section className="slider1" style={{ position: "relative" }}>
      <div className="left-arrow1" onClick={prevSlide}>
        &lt;
      </div>
      <div className="right-arrow1" onClick={nextSlide}>
        &gt;
      </div>
      {galleryData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active1" : "slide1"}
            key={index}
          >
            {index === current && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "70%",
                }}
              >
                <div style={{ maxWidth: "60%", marginRight: "10px" }}>
                  <img
                    src={slide.img}
                    alt={slide.alt}
                    className="image"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "40px",
                      objectPosition: "center",
                      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.8)",
                    }}
                  />
                  
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Gallery;
