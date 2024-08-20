import React, { useRef } from "react";
import { Checkbox } from "../ui/checkbox";
import { IDynamicForm, IOtterFields } from "@/interfaces/form-interface";
import { otterQuestions } from "@/static/formStatic";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { SvgIcons } from "@/icons/SvgIconts";
import { PopoverClose } from "@radix-ui/react-popover";
import { Button } from "../ui/button";

interface IOtterQuestions {
  activeState: IDynamicForm;
  otterFields: IOtterFields;
  setOtterFields: React.Dispatch<React.SetStateAction<IOtterFields>>;
  setActiveState: React.Dispatch<React.SetStateAction<IDynamicForm>>;
}

export default function OtterQuestions({
  activeState,
  otterFields,
  setOtterFields,
  setActiveState,
}: IOtterQuestions) {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <div className="border-2 border-gray-500 border-dashed py-4 px-2 rounded-sm mb-5 justify-between flex items-end">
      <div className="grow px-2  max-w-[700px]">
        <span className="font-medium block text-base sm:text-lg">
          Otter Questions
        </span>
        <div className="mt-3">
          {otterQuestions.map((item, key) => (
            <div
              key={key}
              className="flex sm:items-center max-sm:flex-col mb-3"
            >
              <span className="text-base">{item.question}</span>
              <Popover>
                <PopoverTrigger className="w-[170px] sm:ml-6 border h-10 px-2 flex-center justify-between rounded-md">
                  <span className={``}>
                    {otterFields[item.otterField] ? `Yes` : `No`}
                  </span>
                  <SvgIcons.ChevronSvg className="text-gray-400 opacity-70 scale-[150%]" />
                </PopoverTrigger>
                <PopoverContent
                  className="px-2 py-3 min-w-[300px] sm:w-[340px]"
                  align="start"
                >
                  <h3 className="mt-2 mb-7 w-full text-lg font-bold">
                    Select Otter questions
                  </h3>
                  <PopoverClose ref={ref} className="hidden" />
                  <div className="w-full pb-8 gap-2 grid grid-cols-2">
                    <Button
                      onClick={() => {
                        setOtterFields((prev) => {
                          return { ...prev, [item.otterField]: true };
                        });
                      }}
                      variant={
                        otterFields[item.otterField] ? "default" : "outline"
                      }
                      className="w-full rounded-full"
                    >
                      <span>Yes</span>
                    </Button>
                    <Button
                      onClick={() => {
                        setOtterFields((prev) => {
                          return { ...prev, [item.otterField]: false };
                        });
                      }}
                      variant={
                        !otterFields[item.otterField] ? "default" : "outline"
                      }
                      className="w-full rounded-full"
                    >
                      <span>No</span>
                    </Button>
                  </div>
                  <span className="text-shade block mt-2text-[13px] sm:text-sm">
                    *You can choose multiple Order type
                  </span>
                  <div className="w-full py-8 space-x-1 border-t flex-center ">
                    <Button
                      onClick={() => ref.current?.click()}
                      className="px-10 grow rounded-full w-6/12"
                    >
                      Apply Now
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          ))}
        </div>
      </div>
      <Checkbox
        className="h-5 w-5 mb-4"
        checked={activeState.otterFields}
        onCheckedChange={(checked) => {
          setActiveState((prev) => {
            return { ...prev, ["otterFields"]: checked as boolean };
          });
        }}
      />
    </div>
  );
}
