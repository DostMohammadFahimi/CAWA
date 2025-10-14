import { getPlants } from "@/actions/plant.action";
import InventoryTable from "@/components/InventoryTable";
import { stackServerApp } from "@/stack";
import { SignUp } from "@stackframe/stack";

async function Plantpage() {
  const user = await stackServerApp.getUser();

  const plants = await getPlants();

  return (
    <>
      {user ? (
        <div className="mt-7 max-w-7xl mx-auto px-4 grid gird-col-1 lg:grid-cols-10 gap-6">
          <div className="lg:col-span-full">
            <InventoryTable plants={plants} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-10 items-center">
          <SignUp />
        </div>
      )}
    </>
  );
}

export default Plantpage;
