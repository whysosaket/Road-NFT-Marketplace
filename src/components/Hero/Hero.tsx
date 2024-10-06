import Image from "../../assets/img1.png";
import Gradient from "../../assets/bg.png";
import Gradient2 from "../../assets/bg2.png";
import TechWear from "./TechWear";
import Slamtings from "./Slamtings";
import Me from "./Me";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full md:flex flex-col lg:flex-row justify-center">
      <div className="w-full max-w-screen-md flex justify-center">
        <motion.img
          initial={{ y: 200, opacity: 0, scale: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0, delay: 0.1 }}
          src={Image}
          className="w-full mx-auto my-div"
        />
        <img src={Gradient} className="w-full mx-auto absolute -z-10" />
        <img src={Gradient2} className="w-full mx-auto absolute top-0 -z-10" />
      </div>
      <div className="lg:absolute flex justify-center my-2 md:my-0 left-14 bottom-96">
        <motion.div
          initial={{ x: -200, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0, delay: 0.1 }}
          className="my-div"
        >
          <TechWear />
        </motion.div>
      </div>
      <div className="lg:absolute flex justify-center left-14 bottom-0 overflow-y-hidden max-h-56">
        <motion.div
          initial={{ x: -200, y: 200, opacity: 0, scale: 0 }}
          animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0, delay: 0.15 }}
          className="my-div"
        >
          <Slamtings />
        </motion.div>
      </div>

      <div className="lg:absolute flex justify-center mt-12 md:mt-0 right-14 bottom-0">
        <motion.div
          initial={{ x: 200, y: 200, opacity: 0, scale: 0 }}
          animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0, delay: 0.15 }}
          className="my-div"
        >
          <Me />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
