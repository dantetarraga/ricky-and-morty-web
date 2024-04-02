import { useSearchParams } from "react-router-dom";

const Search = () => {
  let [, setSearchParams] = useSearchParams("");

  const handleChangeName = (event) => {
    const value = event.target.value;
    setSearchParams({ name: value });
  };

  const handleSubmit = (event) => event.preventDefaut();

  return (
    <div
      className="flex items-center jus gap-4 justify-center md:justify-end"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-10/12 md:w-full p-1 rounded-md border-2 border-transparent focus:border-black focus:outline-none md:block mb-2 md:mb-0"
        placeholder="Search a character"
        onChange={handleChangeName}
      />
    </div>
  );
};

export default Search;
