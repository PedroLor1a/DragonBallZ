import Image from "next/image";

const CardsPlanets = async ({planetsView}) => {
console.log(planetsView[0].isdestroyed);

  return (
    <div className="w-full h-full flex flex-wrap items-center mt-16 bg-gray-300 ml-8 ">
      {planetsView?.map((e) => (
        <div key={e.id} className="flex items-center justify-center w-72 h-2/4 mx-6 my-10 p-2 border border-black bg-gradient-to-br from-[#E18302] to-white rounded-lg shadow-md">
          <div className="">
              <Image src={e.image} alt={e.name} width={200} height={100} className="object-center w-52 h-[400px] rounded-lg " />
          </div>
          <div className="flex-row items-center justify-center ml-2">
            <p className="font-sans font-bold text-xl">Name: </p>
            <p className="text-lg font-medium font-sans">{e.name}</p>
        
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsPlanets;
