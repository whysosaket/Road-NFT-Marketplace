import Image from "../../assets/img2.png";
import Gradient from "../../assets/bg.png";
import Gradient2 from "../../assets/bg2.png";
import WeDo from "./WeDo";
import ProductTypes from "./ProductTypes";

const Products = () => {
  return (
    <div className="w-full max-h-screen md:my-8 flex flex-col-reverse md:flex-row justify-center">
        <div className="md:absolute left-24">
        <div className="relative top-60">
            <WeDo />
        </div>
    </div>
    <div className="w-full max-w-screen-md flex justify-center -mb-52 md:mb-0">
        <img src={Image} className="w-full mx-auto" />
        <img src={Gradient} className="w-full mx-auto absolute -z-10 opacity-30" />
        <img src={Gradient2} className="w-full mx-auto absolute -z-10 opacity-50" />
    </div>
    
    <div className="md:absolute right-24">
        <div className="relative top-36">
            <ProductTypes />
        </div>
    </div>
    </div>
  )
}

export default Products