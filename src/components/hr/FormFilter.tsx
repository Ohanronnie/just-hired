import { SvgIcons } from "@/icons/SvgIconts";
import Filters from "./Filters";
import FilterDates from "./FilterDates";
import { HrStatusFilter, HrRoleFilter } from "@/static/hr-static";
import FIlterHrStatus from "./FilterFormStatus";
import FIlterHrRole from "./FilterFormRole";
import { useFormFilter } from "@/store/useFormFilter";
import { Button } from "../ui/button";
import PageInput from "../global/PageInput";

export default function FormFilter() {
  const { setDate, setRole, setHrStatus, jumpToPage } = useFormFilter();
  return (
    <div className="flex 2xl:items-center 2xl:justify-between flex-col 2xl:flex-row">
      <h3 className="sm:hidden w-full font-bold">View Users</h3>
      <PageInput className="mb-1 2xl:hidden" />
      <div className="flex-center mb-5 border w-fit bg-white flex-wrap mt-3 rounded-md">
        <div className="py-2 border-r px-4 flex-center">
          <span className="font-bold text-lg px-2 max-sm:hidden">
            View Users
          </span>
          <SvgIcons.FilterSvg />
        </div>
        <div className="border-r px-3 font-medium h-10 grid place-content-center">
          Filter By
        </div>
        <div className="border-r max-md:grow md:hidden flex items-center px-3 font-semibold h-10">
          <SvgIcons.ResetSvg className="mr-3" />
          <span className="text-red-500">Reset filter</span>
        </div>
        <div className="flex-center max-md:w-full">
          <Filters align="start" ngClass="sm:w-[420px]" title="Role">
            <FIlterHrRole filters={HrRoleFilter} title="Select Role Filter" />
          </Filters>
          <Filters ngClass="w-[302px]" title="Date">
            <FilterDates />
          </Filters>
          <Filters
            align="end"
            ngClass="sm:w-[420px]"
            className="max-md:grow"
            title="User Status"
          >
            <FIlterHrStatus
              filters={HrStatusFilter}
              title="Select Status Filter"
            />
          </Filters>
        </div>
        <Button
          onClick={() => {
            setDate(null);
            setRole(HrRoleFilter), setHrStatus(HrStatusFilter), jumpToPage(1);
          }}
          variant={"ghost"}
          className="border-r max-md:hidden flex items-center px-3 font-semibold h-10"
        >
          <SvgIcons.ResetSvg className="mr-3" />
          <span className="text-red-500">Reset filter</span>
        </Button>
      </div>
      <PageInput className="max-2xl:hidden mb-1 2xl:max-w-[300px] h-12 2xl:ml-5" />
    </div>
  );
}
