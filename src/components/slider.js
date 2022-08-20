import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.png";

export default function Slider() {
  const views = [
    { url: Img2, name: "Gloves", link: "" },
    { url: Img1, name: "Dreams", link: "" },
  ];
  return (
    <div className="slider">
      <div className="next">1</div>
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
              <img src={item.url} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="prev">2</div>
    </div>
  );
}
