import { FaHeart, FaQuestion, FaSkullCrossbones } from "react-icons/fa";

const Filters = () => {
  return (
    <div className="flex justify-between items-center gap-4 ">
      <button className="text-white p-2 rounded-md cursor-pointer">
        <FaSkullCrossbones className="text-4xl " />
      </button>
      <button className="text-white p-2 rounded-md cursor-pointer">
        <FaHeart className="text-4xl " />
      </button>
      <button className="text-white p-2 rounded-md cursor-pointer">
        <FaQuestion className="text-4xl " />
      </button>
    </div>
  );
};

export default Filters;
