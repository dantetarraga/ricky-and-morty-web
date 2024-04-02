import image from "../assets/rickandmorty.jpg";

const Error = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-10">
      <img className="w-[450px]  rounded-full" src={image} alt="" />
      <p className="font-bangers text-white text-4xl uppercase">
        No se encontro resultados...
      </p>
    </div>
  );
};

export default Error;
