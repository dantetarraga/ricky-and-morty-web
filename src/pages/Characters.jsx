import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import ListCharacters from "../components/ListCharacters";
import Skeleton from "../components/Skeleton";
import { getCharacterForPage } from "../services/characters";

const Characters = () => {
  const { characters } = useLoaderData();
  return (
    <div>
      <div className="h-[70vh] overflow-auto">
        <Suspense fallback={<Skeleton />}>
          <Await resolve={characters}>
            {(characters) => <ListCharacters data={characters} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export const charactersLoader = async ({ request }) => {
  const url = new URL(request.url);
  const page = url.searchParams.get("page");

  const { info, results: characters } = await getCharacterForPage(page);

  return defer({
    characters: new Promise((resolve) => {
      setTimeout(() => {
        resolve(characters);
      }, 2000);
    }),
    info,
  });
};

export default Characters;
