import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.png";
import Img3 from "../assets/3.jpg";
import Img4 from "../assets/4.png";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Slider() {
  const views = [
    { url: Img2, name: "Gloves", link: "" },
    { url: Img4, name: "Guess", link: "" },
    { url: Img3, name: "Carrot", link: "" },
    { url: Img1, name: "Dreams", link: "" },
  ];
  return (
    <div className="slider">
      <div className="prev">
        <AiOutlineArrowRight
          style={{
            verticalAlign: "middle",
            transform: "rotate(180deg)",
          }}
        />
      </div>

      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          clickable: true,
          nextEl: ".next",
          prevEl: ".prev",
        }}
        modules={[Pagination, Navigation]}
        style={{
          width: "100%",
          height: "100%",
          maxHeight: "500px",
          borderRadius: "18px",
        }}
      >
        {views.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="swiperx">
              <h2 className="swiperx__title">Cock</h2>
              <img src={item.url} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="next">
        {" "}
        <AiOutlineArrowRight
          style={{
            verticalAlign: "middle",
          }}
        />
      </div>
    </div>
  );
}
