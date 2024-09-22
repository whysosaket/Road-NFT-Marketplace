import Image from "../../assets/img2.png";
import Gradient from "../../assets/bg.png";
import Gradient2 from "../../assets/bg2.png";
import WeDo from "./WeDo";
import ProductTypes from "./ProductTypes";

const Products = () => {
  return (
    <div className="w-full max-h-screen flex justify-center">
    <div className="w-full max-w-screen-md flex justify-center">
        <img src={Image} className="w-full mx-auto" />
        <img src={Gradient} className="w-full mx-auto absolute -z-10 opacity-30" />
        <img src={Gradient2} className="w-full mx-auto absolute -z-10 opacity-50" />
    </div>
    <div className="absolute left-24">
        <div className="relative top-60">
            <WeDo />
        </div>
    </div>
    
    <div className="absolute right-24">
        <div className="relative top-36">
            <ProductTypes />
        </div>
    </div>
    </div>
  )
}

export default Products