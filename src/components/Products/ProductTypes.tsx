import { FaPlus } from "react-icons/fa6"

const ProductTypes = () => {
  return (
    <div>
        <div className="">
            <h1 className="text-4xl flex gap-4">
                <FaPlus size={25} className="my-auto text-p1" />
                PRODUCT TYPES</h1>
        </div>
        <div className="w-full flex justify-end">
            <div className="w-20 mt-16 -mr-8 rotate-90 text-p1">0.0.2</div>
        </div>
    </div>
  )
}

export default ProductTypes