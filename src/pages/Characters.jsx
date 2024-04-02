import { Suspense, useEffect, useRef, useState } from "react";
import { Await, defer, useLoaderData, useSearchParams } from "react-router-dom";
import ListCharacters from "../components/ListCharacters";
import Skeleton from "../components/Skeleton";
import {
  getCharacterForPage,
  getFilterCharacterByName,
} from "../services/characters";

const Characters = () => {
  const { charactersData } = useLoaderData();
  const [allCharacters, setAllCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFiltering, setIsFiltering] = useState(false);
  const listContainerRef = useRef();

  const handleScroll = () => {
    if (searchParams.get("page") === null) return;
    if (isFiltering) return;

    const scrollTop = listContainerRef.current.scrollTop;
    const windowHeight = listContainerRef.current.clientHeight;
    const scrollHeight = listContainerRef.current.scrollHeight;
    if (scrollTop + windowHeight >= scrollHeight - 25) {
      handleLoadMore();
    }
  };

  useEffect(() => {
    listContainerRef.current.addEventListener("scroll", handleScroll);

    return () =>
      listContainerRef.current.removeEventListener("scroll", handleScroll);
  }, [searchParams.get("page")]);

  useEffect(() => {
    const filterName = searchParams.get("name");
    if (filterName) {
      setIsFiltering(true);
      setAllCharacters(charactersData);
      listContainerRef.current.scrollTop = 0;
    } else {
      setIsFiltering(false);
      setAllCharacters(charactersData);
    }
  }, [searchParams.get("name")]);

  useEffect(() => {
    if (charactersData) {
      const data = [...allCharacters, ...charactersData];
      setAllCharacters(data);
    }
  }, [searchParams.get("page")]);

  const handleLoadMore = () => {
    const page = searchParams.get("page") || 1;
    setSearchParams({ page: parseInt(page) + 1 });
  };

  return (
    <div
      ref={listContainerRef}
      className="overflow-y-auto h-[68vh] md:h-[70vh]"
    >
      <Suspense fallback={<Skeleton />}>
        <Await resolve={allCharacters}>
          {(characters) =>
            isFiltering ? (
              <ListCharacters data={characters} isFiltering={isFiltering} />
            ) : (
              <ListCharacters data={characters} />
            )
          }
        </Await>
      </Suspense>
    </div>
  );
};

export const charactersLoader = async ({ request }) => {
  const url = new URL(request.url);
  const page = url.searchParams.get("page");
  let name = url.searchParams.get("name");

  let info,
    charactersData = [];

  if (name?.length === 0 || name == null) {
    ({ info, results: charactersData } = await getCharacterForPage(page));
  } else {
    ({ info, results: charactersData } = await getFilterCharacterByName(name));
  }

  return defer({
    charactersData,
    info,
  });
};

export default Characters;
