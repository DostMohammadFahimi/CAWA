import InventoryTable from "@/components/ui/InventoryTable";
import { stackServerApp } from "@/stack/server";
import { SignUp } from "@stackframe/stack";

async function Plantpage() {
  const user = await stackServerApp.getUser();
  const app = stackServerApp.urls;
  return (
    <>
      {user ? (
          <div className="mt-7 max-w-7xl mx-auto px-4 grid gird-col-1 lg:grid-cols-10 gap-6">
            <div className="lg:col-span-full">
              <InventoryTable />
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
