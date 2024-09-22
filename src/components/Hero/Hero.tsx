import Image from "../../assets/img1.png";
import Gradient from "../../assets/bg.png";
import Gradient2 from "../../assets/bg2.png";

const Hero = () => {
  return (
    <div className="w-full flex justify-center">
    <div className="w-full max-w-screen-md flex justify-center">
        <img src={Image} className="w-full mx-auto" />
        <img src={Gradient} className="w-full mx-auto absolute -z-10" />
        <img src={Gradient2} className="w-full mx-auto absolute top-0 -z-10" />
    </div>
    </div>
  )
}

export default Hero