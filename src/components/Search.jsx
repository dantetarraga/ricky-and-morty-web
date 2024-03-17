const Search = () => {
  return (
    <form
      className="flex items-center gap-4 justify-end"
      // onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="p-1 rounded-md border-2 border-transparent focus:border-black focus:outline-none hidden md:block"
        placeholder="Search a character"
        // onChange={changeTerm}
      />
      <button className="bg-gray-600 text-white p-1 rounded-md uppercase font-bold border-2 border-transparent">
        Search
      </button>
    </form>
  );
};

export default Search;
