import aboutimg from "../assets/about-img.jpg"
import expimg from "../assets/experience-img.jpg"

function About() {
  return (
    <div className="w-full py-5">
      <div className="flex items-center h-full">
        <div className="w-1/2">
          <img src={expimg} alt="experience-img" className="pl-11" />
        </div>
        <div className="w-1/2 space-y-6">
          <h2 className="font-extrabold text-2xl">BEST EXPERINCED FREELANCER HERE</h2>
          <p className="text-lg text-balance">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as</p>
          <div className="flex gap-4">
            <button className="bg-red-500 text-white w-24 py-2">Read More</button>
            <button className="bg-slate-700 text-white w-24 py-1">Hire</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
          <div>
            <img src={aboutimg} alt="about-img" />
          </div>
          <div className="text-center space-y-7">
            <h2 className="font-extrabold text-2xl">ABOUT SPERING COMPANY</h2>
            <p className="text-lg text-balance">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you</p>
            <button className="bg-red-500 text-white w-24 py-2">Read More</button>
          </div>
      </div>
    </div>
  )
}

export default About