import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div  id ="Home" style={{marginTop:"-28px",width:"100vw",height:"80vh",overflowX:"hidden",overflowY:"hidden",display:"flex",justifyContent:"center"}}>
    <Carousel {...settings}>
      {" "}
      <Wrap>
        <img src='iiit1.png' alt='' />
      </Wrap>
      <Wrap>
        <img src='iiit2.png' alt='' />
      </Wrap>
      <Wrap>
        <img src='iiit3.png' alt='' />
      </Wrap>
      <Wrap>
        <img src='iiit4.png' alt='' />
      </Wrap>
      <Wrap>
        <img src='iiit4.png' alt='' />
      </Wrap>
    </Carousel>
    </div>
  );
};

export default ImageSlider;
const Carousel = styled(Slider)`
 
  height:60vh;
  width:100vw;
  .slick-list {
    overflow: visible;
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
  cursor: pointer;
  height:78vh;
  width:90vw;

  img {
    border: 1px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
    &:hover {
      border: 4px solid rgb(249, 249, 249, 0.8);
    }
  }
`;