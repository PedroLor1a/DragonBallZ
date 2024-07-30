import Image from "next/image";

export default async function Home() {
  return (
    <div className="w-screen h-screen bg-custom-image2 bg-cover bg-center ">
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="w-4/5 h-3/4 border-2 border-transparent rounded-lg bg-white/5 backdrop-blur-sm flex flex-col">
          <div className="flex justify-center items-center p-4 border-b border-none"></div>
          <div className="flex flex-1 items-center justify-between pr-4">
            <div className="flex flex-col justify-center items-start w-2/5 h-full p-6 mx-28 my-10">
              <h1 className="text-7xl font-bold mb-4 text-black font-sans">
                Hola!
              </h1>
              <p className="text-black text-3xl font-medium font-sans">
                Bienvenido/a a la web de Dragon Ball Z.
              </p>
              <p className="text-black text-3xl font-medium font-sans">
                Acá podras ver información sobre personajes de la serie, como de
                sus planetas y transformaciones.
              </p>
            </div>
            <div className="transform transition-transform duration-300 hover:scale-125">
              <Image
                src="/goku.png"
                alt="Goku"
                width={300}
                height={80}
                className="mr-32 mb-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
