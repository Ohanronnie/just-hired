import {
  IDynamicExtendedFields,
  IDynamicForm,
} from "@/interfaces/form-interface";
import React, { useRef } from "react";
import { Checkbox } from "../ui/checkbox";
import { camelCaseToSpaces } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Textarea } from "../ui/text-area";
import { useGetRequest } from "@/hooks/useGetRequests";
import { IExpListRes } from "@/interfaces/experience-interface";
import { PopoverClose } from "@radix-ui/react-popover";
import { SvgIcons } from "@/icons/SvgIconts";

interface IDoubleInputField {
  activeState: IDynamicForm;
  setActiveState: React.Dispatch<React.SetStateAction<IDynamicForm>>;
  firstTitle: string;
  fieldName: keyof IDynamicForm;
  placeholder: string;
  secondTitle: string;
  addButton?: boolean;
  onTextChange?: React.Dispatch<React.SetStateAction<string>>;
  mainTitle: string;
  setSelectedFields: React.Dispatch<
    React.SetStateAction<IDynamicExtendedFields>
  >;
  selectedFields: IDynamicExtendedFields;
}

export default function DoubleInputField({
  activeState,
  firstTitle,
  mainTitle,
  fieldName,
  setSelectedFields,
  addButton,
  setActiveState,
  placeholder,
  selectedFields,
  secondTitle,
  onTextChange,
}: IDoubleInputField) {
  const ref = useRef<HTMLButtonElement>(null);
  const { data } = useGetRequest<IExpListRes>({
    queryKey: ["all-experience"],
    url: "/admin/retrieve/experience",
  });

  return (
    <div
      className={`border-2 border-gray-500 border-dashed pr-2 rounded-sm mb-3 justify-between flex items-end ${addButton ? "items-center" : "items-end"}`}
    >
      <div className="grow flex flex-wrap   max-w-[750px]">
        <div className="w-full px-2 sm:px-4 sm:w-6/12 py-4 pb-8 border-gray-500 max-sm:border-b-2 sm:border-r-2  border-dashed max-sm:border-sm">
          <span className="font-medium block text-base capitalize sm:text-lg">
            {mainTitle}
          </span>
          <h3 className="mt-3">
            <span className="font-medium">{firstTitle}</span>
            <span className="text-red-500 text-lg relative top-1 ml-1">*</span>
          </h3>
          <input
            placeholder={placeholder || `Enter ${camelCaseToSpaces(fieldName)}`}
            readOnly
            className="w-full h-10 bg-transparent outline-none px-2 border rounded-md"
            type="text"
          />
        </div>
        <div className="w-full py-4 px-2 sm:px-4 pb-8 sm:w-6/12">
          <h3 className="mt-11">
            <span className="font-medium">{secondTitle}</span>
          </h3>
          <div className="flex-center flex-wrap xl:flex-nowrap">
            <Popover>
              <PopoverTrigger
                disabled={!data}
                className="max-xl:w-full grow max-xl:mb-2 mr-3 shrink-0 border h-10 px-2 flex-center justify-between rounded-md"
              >
                <span className="text-gray-600">
                  {selectedFields.bpoAccountAndExperience.length
                    ? `${selectedFields.bpoAccountAndExperience.length} Selected`
                    : `Enter ${camelCaseToSpaces(secondTitle)}`}
                </span>
                <SvgIcons.ChevronSvg className="text-gray-400 opacity-70 scale-[150%]" />
              </PopoverTrigger>
              <PopoverContent
                className="px-2 py-3 sm:w-[340px] flex flex-wrap"
                align="start"
              >
                <h3 className="mt-2 mb-7 w-full text-lg font-bold">
                  Select {camelCaseToSpaces(fieldName)}
                </h3>
                <PopoverClose ref={ref} className="hidden" />
                {data?.data.data?.map((item, index) => {
                  const isPresent =
                    selectedFields.bpoAccountAndExperience.includes(item.value);
                  return (
                    <div key={index} className="px-2 mb-4 w-6/12">
                      <Button
                        onClick={() => {
                          if (isPresent) {
                            setSelectedFields((prev) => {
                              const filteredOptions =
                                prev.bpoAccountAndExperience.filter(
                                  (options) => options !== item.value,
                                );
                              return { ...prev, [fieldName]: filteredOptions };
                            });
                          } else {
                            setSelectedFields((prev) => {
                              return {
                                ...prev,
                                [fieldName]: [
                                  ...prev["bpoAccountAndExperience"],
                                  item.value,
                                ],
                              };
                            });
                          }
                        }}
                        variant={isPresent ? "default" : "outline"}
                        className="w-full rounded-full"
                      >
                        <span>{item.value}</span>
                      </Button>
                    </div>
                  );
                })}
                <span className="text-shade block mt-2text-[13px] sm:text-sm">
                  *You can choose multiple Order type
                </span>
                <div className="w-full pt-8 space-x-1 border-t flex-center ">
                  <Button
                    disabled={
                      selectedFields.bpoAccountAndExperience.length ===
                      data?.data.data?.length
                    }
                    onClick={() => {
                      const isAvailable = data?.data.data;
                      if (isAvailable) {
                        const allValues = isAvailable.map((item) => item.value);
                        setSelectedFields((prev) => {
                          return { ...prev, [fieldName]: allValues };
                        });
                      }
                    }}
                    variant={"outline"}
                    className="rounded-full grow px-10 w-6/12"
                  >
                    All
                  </Button>
                  <Button
                    onClick={() => ref.current?.click()}
                    className="px-10 grow rounded-full w-6/12"
                  >
                    Apply Now
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
            {addButton ? (
              <Button disabled className="px-6">
                Add +
              </Button>
            ) : null}
          </div>
        </div>
        {addButton ? (
          <div className="grow px-2 border-gray-500 border-t-2 pt-4 pb-6 border-dashed">
            <span className="block font-medium">Additional Note</span>
            <Textarea
              onChange={(e) => {
                if (onTextChange) {
                  onTextChange(e.target.value);
                }
              }}
              className="resize-none h-40"
            ></Textarea>
          </div>
        ) : null}
      </div>
      <Checkbox
        onCheckedChange={(checked) => {
          setActiveState((prev) => {
            return { ...prev, [fieldName]: checked };
          });
        }}
        checked={!!activeState[fieldName]}
        className="h-5 w-5 mb-4"
      />
    </div>
  );
}
