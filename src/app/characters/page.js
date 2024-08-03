import CardsCharacters from "@/components/CardsCharacters";
import Filters from "@/components/Filters";
import {
  getCharacters,
  getCharactersOrderAsc,
  getCharactersOrderDesc,
  getCharactersByName,
} from "@/libs/data";

export default async function PageCharacters({ searchParams }) {
  const query = searchParams?.filter;
  const querySearch = searchParams?.search;

  let charactersView;
  if (querySearch) {
    charactersView = await getCharactersByName(querySearch);
  } else if (query === "ASC") {
    charactersView = await getCharactersOrderAsc();
  } else if (query === "DESC") {
    charactersView = await getCharactersOrderDesc();
  } else if (query === "ALL") {
    charactersView = await getCharacters();
  } else {
    charactersView = await getCharacters();
  }

  return (
    <div className="w-screen h-screen bg-gray-300 ">
      <div className="relative z-10">
        <CardsCharacters charactersView={charactersView} />
      </div>
    </div>
  );
}
