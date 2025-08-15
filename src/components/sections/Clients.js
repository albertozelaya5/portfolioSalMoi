import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import myClients from "@/src/data/myClients.json";
import { useSetContent } from "@/src/hooks/useSetLanguage";

const Clients = ({ language }) => {
const { column1, column2, column3, head } = useSetContent(myClients, language);

  return (
    <section className="clients">
      <div className="clients-container animated-layer fade-in-right-animation fadeInUp wow">
        <h3>{head}</h3>
        <Swiper {...salimovSlider.clients} className="swiper swiper-clients fadeInUp wow">
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            {column1.map((client) => {
              return <Client key={client.imgName} imgName={client.imgName} />;
            })}
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            {column2.map((client) => {
              return <Client key={client.imgName} imgName={client.imgName} />;
            })}
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            {column3.map((client) => {
              return <Client key={client.imgName} imgName={client.imgName} />;
            })}
          </SwiperSlide>

          {/* SWIPER ITEM ENDS */}
        </Swiper>
      </div>
      <img alt="" className="z-1 hide-mobile opposite-separator" src="assets/separator-opposite.png" />
    </section>
  );
};
export default Clients;

function Client({ imgName }) {
  return (
    <div>
      <img
        src={`assets/myClients/${imgName}.png`}
        alt={imgName}
        width={120}
        height={60}
        style={{ borderRadius: "1rem", objectFit: "cover" }}
      />
    </div>
  );
}
