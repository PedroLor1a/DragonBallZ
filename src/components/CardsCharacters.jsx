import { getCharacters } from "@/libs/data";
import Image from "next/image";

const CardsCharacters = async () => {
  const characters = await getCharacters();
  return (
    <div className="flex flex-wrap items-center mt-16 bg-gray-300">
      {characters.map((e) => (
        <div key={e.id} className="flex items-center justify-center w-72 h-2/4 mx-6 my-10 p-2 border border-black bg-gradient-to-br from-[#E18302] to-white rounded-lg shadow-md">
          {/* <h1 className="text-lg font-bold mb-2">{e.name}</h1> */}
          <div className="transform transition-transform duration-300 hover:scale-110">
              <Image src={e.image} alt={e.name} width={200} height={100} className="object-center w-52 h-[400px] " />
          </div>
          <div className="flex-row items-center justify-center ml-2">
            <p className="font-sans font-bold text-xl">Nombre: </p>
            <p className="text-lg font-medium font-sans">{e.name}</p>
            <p className="font-sans font-bold text-xl">Ki: </p>
            <p className="text-lg font-medium font-sans">{e.ki}</p>
            <p className="font-sans font-bold text-xl">Raza: </p>
            <p className="text-lg font-medium font-sans">{e.race}</p>
            <p className="font-sans font-bold text-xl">Afiliacion: </p>
            <p className="text-lg font-medium font-sans">{e.affiliation}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsCharacters;
