import { Suspense, useEffect, useState } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import ListCharacters from "../components/ListCharacters";
import Skeleton from "../components/Skeleton";
import {
  getCharacterForPage,
  getFilterCharacterByName,
} from "../services/characters";

const Example = () => {
  const { charactersData } = useLoaderData();
  const [allCharacters, setAllCharacters] = useState(charactersData || []);

  useEffect(() => {
    if (charactersData && isNewData(charactersData)) {
      setAllCharacters((prevData) => [...prevData, ...charactersData]);
    }
  }, [charactersData]);

  // Función para verificar si los datos son nuevos
  const isNewData = (newData) => {
    // Compara los IDs de los personajes para determinar si los datos son nuevos
    const existingIds = allCharacters.map((character) => character.id);
    const newIds = newData.map((character) => character.id);
    return !existingIds.some((id) => newIds.includes(id));
  };

  return (
    <div className="overflow-y-auto h-[70vh]">
      <Suspense fallback={<Skeleton />}>
        <Await resolve={allCharacters}>
          {(characters) => <ListCharacters data={characters} />}
        </Await>
      </Suspense>
    </div>
  );
};

export const charactersLoader = async ({ request }) => {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1;
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

export default Example;
