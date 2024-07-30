import Image from "next/image";

export default async function PagePlanets() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-300">
      <h1 className="text-5xl font-sans mb-4">Proximamente...</h1>
      <Image
        src="/gokuBye.gif"
        alt="Goku"
        width={500}
        height={80}
        className="rounded-3xl"
      />
    </div>
  );
}
