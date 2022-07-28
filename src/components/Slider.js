import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";

const Slider = (props) => {
  const data = props.data;
  const view = props.view;
  return (
    <div className="wrapper">
      <h1 className="slider_title">popular</h1>
      <Splide
        options={{
          perPage: 1,
          gap: "1rem",
          pagination: false,
          drag: true,
          arrows: true,
        }}
      >
        {data &&
          data.map((slide) => {
            return (
              <SplideSlide key={slide.id}>
                <div className="slide-element">
                  {/* <p>{slide.title}</p> */}
                  <img src={slide.image} alt="" />
                </div>
              </SplideSlide>
            );
          })}
      </Splide>
    </div>
  );
};

export default Slider;
