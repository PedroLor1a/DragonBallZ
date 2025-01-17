import CardsCharacters from "@/components/CardsCharacters";
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
    <div className="w-full h-full bg-gray-300">
      <CardsCharacters charactersView={charactersView} />
    </div>
  );
}
