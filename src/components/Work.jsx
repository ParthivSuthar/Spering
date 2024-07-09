import { workDetails } from "../constants/data"
import freelanceimg from "../assets/freelance-img.jpg"

function Work() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 place-items-center h-[500px]">
        <div>
          <h2 className="text-2xl font-extrabold">WORK FREELANER HAS DONE</h2>
          <div>
            <ul>
              {workDetails.map((dets, index) => (
                <div className="flex gap-3 pt-5" key={index}>
                  <img src={dets.image} alt="img" className="bg-slate-800 w-12 rounded-full p-3" />
                  <div>
                    <span className="text-red-600 font-bold">{dets.num}</span>
                    <h3 className="text-xl font-bold">{dets.desc}</h3>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <img src={freelanceimg} alt="freelanceimg" />
        </div>
      </div>
    </div>
  )
}

export default Work