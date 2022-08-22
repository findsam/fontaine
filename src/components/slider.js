import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Navigation,
  Autoplay,
} from "swiper";
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
    {
      url: Img2,
      name: "Good Co. 2.0",
      stock: "Latest",
      link: "",
    },
    {
      url: Img4,
      name: "Fontaine Mystery Deck",
      stock: "Sold Out",
      link: "",
    },
    {
      url: Img3,
      name: "Fontaine Carrots 2.0",
      stock: "Sold Out",
      link: "",
    },
    {
      url: Img1,
      name: "Fever Dreams Deluxe Set",
      stock: "Available",
      link: "",
    },
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
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          clickable: true,
          nextEl: ".next",
          prevEl: ".prev",
        }}
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
              <div className="swiperx__info">
                <h2>{item.name}</h2>
                <p>{item.stock}</p>
              </div>
              <img src={item.url} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="next">
        <AiOutlineArrowRight
          style={{
            verticalAlign: "middle",
          }}
        />
      </div>
    </div>
  );
}
