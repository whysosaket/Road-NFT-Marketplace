import Image from "../../assets/img1.png";
import Gradient from "../../assets/bg.png";
import Gradient2 from "../../assets/bg2.png";
import TechWear from "./TechWear";
import Slamtings from "./Slamtings";
import Me from "./Me";

const Hero = () => {
  return (
    <div className="w-full md:flex justify-center">
    <div className="w-full max-w-screen-md flex justify-center">
        <img src={Image} className="w-full mx-auto" />
        <img src={Gradient} className="w-full mx-auto absolute -z-10" />
        <img src={Gradient2} className="w-full mx-auto absolute top-0 -z-10" />
    </div>
    <div className="md:absolute flex justify-center my-2 md:my-0 left-14 bottom-96">
      <TechWear />
    </div>
    <div className="md:absolute flex justify-center left-14 bottom-0 overflow-y-hidden max-h-56">
      <Slamtings />
    </div>

    <div className="md:absolute flex justify-center mt-12 md:mt-0 right-14 bottom-0">
      <Me />
    </div>
    </div>
  )
}

export default Hero