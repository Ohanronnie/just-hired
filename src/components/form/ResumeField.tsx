import { SvgIcons } from "@/icons/SvgIconts";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { IDynamicForm } from "@/interfaces/form-interface";

interface IResumeField {
  activeState: IDynamicForm;
  setActiveState: React.Dispatch<React.SetStateAction<IDynamicForm>>;
  requiredCheck: boolean;
  setRequiredCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ResumeField({
  activeState,
  setActiveState,
  requiredCheck,
  setRequiredCheck,
}: IResumeField) {
  return (
    <div className="border-2 border-gray-500 border-dashed px-2 rounded-sm mb-3 justify-between flex items-end">
      <div className="grow flex-wrap flex max-w-[750px]">
        <div className="w-full  px-2 py-4 border-dashed  sm:border-r-2 border-gray-500 max-sm:border-b-2 sm:w-6/12">
          <h3 className="font-medium block text-base capitalize mb-3 sm:text-lg">
            Resume / CV
          </h3>
          <p className="text-center">Select Resume / CV </p>
          <SvgIcons.Upload className="block mx-auto text-4xl py-2" />
          <Button className="h-9 px-5 block mx-auto shadow-md" disabled>
            Select File
          </Button>
        </div>
        <div className="w-full px-2 sm:w-6/12 py-4 max-sm:py-10 grow flex items-center ">
          <div className="flex-center w-full justify-center">
            <p className="text-center">Check if required on a form</p>
            <Checkbox
              onCheckedChange={(checked) => {
                setRequiredCheck(checked as boolean);
              }}
              checked={requiredCheck}
              className="h-5 w-5 ml-2"
            />
          </div>
        </div>
      </div>
      <Checkbox
        onCheckedChange={(checked) => {
          setActiveState((prev) => {
            return { ...prev, resume: checked as boolean };
          });
        }}
        checked={!!activeState.resume}
        className="h-5 w-5 mb-4"
      />
    </div>
  );
}
