import { useEffect, useState } from "react";
import Grid from "./Grid";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [data, setData] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
 
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Good food choices are good investments.
        </motion.h3>
        <motion.p
          className="banner_p"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum amet
          laudantium itaque quia, eius rerum. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit.
        </motion.p>
        <motion.button
          className="banner-btn"
          initial={{ x: "150vw", opacity: 0 }}
          animate={{ opacity: 1, x: 0, fontSize: 50 }}
          transition={{ duration: 1.3, delay: 0.5 }}
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
      <motion.div
        className="sample_show"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="image-show">
          <img
            src="http://demo.tutsflow.com/foodera/images/features/1.png"
            alt=""
          />
        </div>
        <div className="text">
          <h3 className="header">
            we pride ourselves on making real food from the best ingredients
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            exercitationem rem nemo aperiam debitis earum.
          </p>
          <button>learn more</button>
        </div>
      </motion.div>
      {/* <Slider data={data} /> */}
      <div className="slogan_outer">
        <div className="banner_two">
          <h3 className="banner_two_title">
            when a mans stomac is full it makes no difference wether he is rich
            or poor
          </h3>
          <p className="banner_two_p">
            Lorem ipsum, dolor sit amet elit. <br />
            Lorem ipsum, dolor sit consectetur adipisicing elit. Blanditiis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            laborum.
          </p>
        </div>
      </div>
      <Grid
        data={data}
      />
    </div>
  );
};

export default Home;
