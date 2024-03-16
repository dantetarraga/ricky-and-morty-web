import "../index.css";
import StatusCharacter from "./StatusCharacter";

const Card = ({ data }) => {
  const { name, image, status, id } = data;
  return (
    <div className="card-animation">
      <div
        className="relative overflow-hidden border-2 border-black cursor-pointer"
        onClick={() => console.log(id)}
      >
        <img
          className="object-cover w-full hover:scale-110 transition-transform duration-500 ease-in-out rounded"
          src={image}
          alt={`${name} character image`}
        />
        <StatusCharacter status={status} />
        <p className="bg-white border-2 text-xl font-bangers border-black py-1 px-3 text-black absolute -skew-x-12 -right-2 -bottom-0 uppercase font-smibold">
          {name}
        </p>
      </div>
    </div>
  );
};

export default Card;
