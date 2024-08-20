import { Button } from "../ui/button";
import RangePicker from "../../components/global/RangePicker";

export default function DashboardFilter() {
  return (
    <div className="w-full pt-3 padding-x  flex-center flex-wrap">
      <div className="flex-center border rounded-md border-main mb-2 grow bg-[#D9D9D9] max-md:flex-wrap">
        <div className="w-[240px] flex-center py-2 px-2 max-md:border-b max-md:w-full justify-between md:border-r-2 border-main">
          <Button variant={"ghost"} size={"sm"} className="px-2 h-7 text-main">
            Yesterday
          </Button>
          <Button variant={"ghost"} size={"sm"} className="px-2 h-7 text-main">
            Today
          </Button>
          <Button variant={"ghost"} size={"sm"} className="px-2 h-7 text-main">
            Tomorrow
          </Button>
        </div>
        <div className="px-2 md:w-[240px] py-2 max-md:w-full max-md:border-b md:border-r-2 border-main flex-center justify-center">
          <Button
            variant={"ghost"}
            size={"sm"}
            className="font-medium h-7 text-main"
          >
            last week
          </Button>
          <span className="w-[2px] h-6 bg-main mx-1"></span>
          <Button
            variant={"ghost"}
            size={"sm"}
            className="font-medium h-7 text-main"
          >
            This week
          </Button>
        </div>
        <div className="w-full flex-center max-md:flex justify-center py-2 px-4 ">
          <span className="text-main">Overall</span>
        </div>
      </div>
      <div className="md:w-full  max-md:mt-4 flex-center">
        <div className="bg-gray-100 w-fit h-10 mb-2 flex-center justify-center">
          <RangePicker
            onSelect={({ startDate, endDate }) => {
              console.log(startDate, endDate);
            }}
          />
        </div>
      </div>
    </div>
  );
}
