import { useEffect, useState } from "react";
import "@splidejs/react-splide/css/skyblue";
import Slider from "./Slider";
import Grid from "./Grid";
import { motion } from "framer-motion";

const Home = () => {
  const [data, setData] = useState(null);
  // const [view, setview] = useState(3);

  const fetchApi = async () => {
    const localData = localStorage.getItem("popular");
    if (localData) {
      setData(JSON.parse(localData));
    } else {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=232dc9c342b64e138da1e3fce842cf84&number=21`
      );
      const data = await res.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      // setData(data.recipes);
      console.log(data.recipes);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="home">
      <div className="banner">
        <motion.h3
          className="banner_title"
          initial={{ opacity: 0, y: -200, fintSize: 0 }}
          animate={{ opacity: 1, y: 0, fontSize: 50 }}
          transition={{ duration: 1 }}
        >
          Good food choices are good investments.
        </motion.h3>
        <motion.p
        className="banner_p"
        initial={{ opacity:0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum amet
          laudantium itaque quia, eius rerum.
        </motion.p>
        <motion.button
          className="banner-btn"
          initial={{ x: "150vw" }}
          animate={{ opacity: 1, x: 0, fontSize: 50 }}
          transition={{ duration: 1.3 }}
        >
          learn more
        </motion.button>
      </div>
      <div className="stats">
        <div className="stats-container">
          <div className="stat-element">
            <span className="number">7110+</span>
            <p>savings</p>
          </div>
          <div className="stat-element">
            <span className="number">1286+</span>
            <p>photos</p>
          </div>
          <div className="stat-element">
            <span className="number">5785+</span>
            <p>rockets</p>
          </div>
          <div className="stat-element">
            <span className="number">1440+</span>
            <p>blobs </p>
          </div>
        </div>
      </div>
      <Slider data={data} />
      <Grid />
    </div>
  );
};

export default Home;
