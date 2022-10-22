import React from "react";
import useQuery from "./hooks/useQuery";

const Carousel = ({ itemData }) => {
  return (
    <div className>
      <h1>Test</h1>
      <div className="carousel relative carousel-end rounded-box  shadow-xl ">
        {itemData.map((item) => (
          <div id={item.id} className="carousel-item  p-10 rounded-box ">
            <img src={item.image} alt="Drink" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={"#" + item.id + 3} className="btn btn-circle">
                ❯
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
