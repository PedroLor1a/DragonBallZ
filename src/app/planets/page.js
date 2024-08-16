import { getPlanets } from "@/libs/data";
import CardsPlanets from "@/components/CardsPlanets";

export default async function PagePlanets() {
  const planetsView = await getPlanets();

  return (
    <div className="w-full h-full bg-gray-300">
      <CardsPlanets planetsView={planetsView} />
    </div>
  );
}
