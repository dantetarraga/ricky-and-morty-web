import { ajax } from "../utils/ajax";

export const getAllCharacters = async () => {
  const config = {
    method: "GET",
    url: `${import.meta.env.VITE_BASE_URL}/character`,
  };

  return await ajax(config);
};

export const getCharacterForPage = async (page) => {
  const config = {
    method: "GET",
    url: `${import.meta.env.VITE_BASE_URL}/character/?page=${page}`,
  };

  return await ajax(config);
};

export const getCharacterByUrl = async (url) => {
  const config = {
    method: "GET",
    url,
  };

  return await ajax(config);
};

export const getCharactersFromEpisode = async (urls) => {
  const characteres = await Promise.all(
    urls.map(async (url) => await getCharacterByUrl(url))
  );

  return characteres;
};
