import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import "@splidejs/react-splide/css/skyblue";

const Home = () => {
  const [data, setData] = useState(null);
  const fetchApi = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=232dc9c342b64e138da1e3fce842cf84&number=21`
    );
    const data = await res.json();
    setData(data.recipes);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="home">
      <div className="wrapper">
        <h1>random</h1>
        <Splide
          options={{
            perPage: 4,
            gap: "1rem",
            pagination: false,
            drag: true,
            arrows: false,
          }}
        >
          {data &&
            data.map((slide) => {
              return (
                <SplideSlide key={slide.id}>
                  <div className="slide-element">
                    <p>{slide.title}</p>
                    <img src={slide.image} alt="" />
                  </div>
                </SplideSlide>
              );
            })}
        </Splide>
      </div>
    </div>
  );
};

export default Home;
