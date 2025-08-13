import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import myClients from "@/src/data/myClients.json";

const Clients = () => {
  const { column1, column2 } = myClients;

  return (
    <section className="clients">
      <div className="clients-container animated-layer fade-in-right-animation fadeInUp wow">
        <h3>My Clients</h3>
        <Swiper {...salimovSlider.clients} className="swiper swiper-clients fadeInUp wow">
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            {column1.map((client) => {
              return <Client imgName={client.imgName} />;
            })}
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            {column2.map((client) => {
              return <Client imgName={client.imgName} />;
            })}
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img src="assets/myClients/ndi.png" alt="client" width={150} />
            </div>
            <div>
              <img src="assets/logos/activeden-dark-background.png" alt="client" />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img src="assets/logos/3docean-dark-background.png" alt="client" />
            </div>
            <div>
              <img src="assets/logos/themeforest-dark-background.png" alt="client" />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img src="assets/logos/activeden-dark-background.png" alt="client" />
            </div>
            <div>
              <img src="assets/logos/audiojungle-dark-background.png" alt="client" />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img src="assets/logos/graphicriver-dark-background.png" alt="client" />
            </div>
            <div>
              <img src="assets/logos/codecanyon-dark-background.png" alt="client" />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          <div className="swiper-pagination" />
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
      <img src={`assets/myClients/${imgName}.png`} alt={imgName} width={150} />
    </div>
  );
}
