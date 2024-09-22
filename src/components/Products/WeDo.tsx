import DiscoverButton from "../shared/DiscoverButton"

const WeDo = () => {
  return (
    <div className="mb-72">
        <div className="md:mt-0 flex gap-6 my-2">
            <h1 className="text-5xl">ROAD</h1>
            <h1 className="mt-2">WE HELP EACH OTHER</h1>
        </div>
        <div className="flex gap-6 my-2">
            <h1 className="text-5xl">ROAD</h1>
            <h1 className="mt-2">WE BRING ELEVATION</h1>
        </div>
        <div className="flex gap-6 my-2">
            <h1 className="text-5xl">ROAD</h1>
            <div className="leading-3">
            <h1 className="mt-2">WE IMPACT THE WORLD</h1>
            <h1 className="mt-2">AROUND US</h1>
            </div>
        </div>
        <div className="mt-8">
        <DiscoverButton />
        </div>
    </div>
  )
}

export default WeDo