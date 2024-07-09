import heroimg from "../assets/slider-img.png"

function Home() {
  return (
    <div>
      <div className="w-full h-[300px]">
        <div className="grid grid-cols-2">
          <div className="w-full bg-slate-800 p-10 space-y-5">
            <h1 className="text-white text-2xl font-extrabold">
              YOU CAN HIRE FREELANCER HERE
            </h1>
            <p className="text-gray-300 text-balance">
              It is a long established fact that a reader will be distracted by
              the readable content of a page
            </p>
            <div className="flex gap-4">
              <button className="px-3 py-2 bg-red-500 text-white">
                About Us
              </button>
              <button className="px-3 py-2 bg-white text-black">
                Get A Quote
              </button>
            </div>
          </div>
          <div className="w-full bg-cyan-400">
            <img
              src={heroimg}
              alt="hero-img"
              className=" h-80 w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
