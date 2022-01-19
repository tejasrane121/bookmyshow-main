import { NextArrow ,PrevArrow } from "../components/Cast/arrow.cast.js"

const settings= {
    infinite: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    InitialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
        ,
        {
            breakpoint:600,
            settings:{
                slidesToShow:2,
                slidesToScroll:2
            }
        },
        {
            breakpoint:400,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            }
        }
      ]
};

export default settings;
