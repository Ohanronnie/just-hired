import { useState } from "react";

import Layout from "@/components/global/layout/Layout";
import AddLineUpFirst from "@/components/lineup/AddLineUpFirst";
import AddLineUpForm from "@/components/lineup/AddLineUpForm";
import { Button } from "@/components/ui/button";
import { ILineUpFirst } from "@/interfaces/lineup-interfaces";

export default function AddLineUp() {
  const [firstData, setFirstData] = useState<null | ILineUpFirst>(null);

  return (
    <Layout title="Line Up" content="Add Line Up">
      <div className="card">
        <div className="mt-3 py-2 border-b flex justify-between">
          <span className="font-bold text-lg">Add Line Up</span>
          <div className="flex-center">
            <Button className="mr-2 px-8" size={"sm"}>
              Recall
            </Button>
            <Button variant={"outline"} size={"sm"} className="text-main px-8">
              View
            </Button>
          </div>
        </div>
        {firstData ? (
          <AddLineUpForm defaultValues={firstData} />
        ) : (
          <AddLineUpFirst onFormSubmit={(data) => setFirstData(data)} />
        )}
      </div>
    </Layout>
  );
}
