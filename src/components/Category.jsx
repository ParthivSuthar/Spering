import { categoryDetails } from "../constants/data"

function Category() {
  return (
    <div className="bg-cyan-400 py-3">
      <h2 className="text-center text-2xl font-extrabold text-white">CATEGORY</h2>
      <div className="grid grid-cols-3 place-items-center h-[400px]">
          {categoryDetails.map((dets, index) => (
            <div className="space-y-2" key={index}>
              <img src={dets.image} alt="image" />
              <h3 className="text-white text-xl">{dets.title}</h3>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Category