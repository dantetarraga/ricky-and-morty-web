import { defer } from "react-router-dom";

const FilterCharacters = () => {
  return <div></div>;
};

export const filterCharactersLoader = async ({ request }) => {
  console.log(request);

  return defer({});
};

export default FilterCharacters;
