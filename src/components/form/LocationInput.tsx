import {
  IDynamicExtendedFields,
  IDynamicForm,
  ISingleLocation,
} from "@/interfaces/form-interface";
import React from "react";
import { Checkbox } from "../ui/checkbox";
import { camelCaseToSpaces } from "@/lib/utils";
import { Select, SelectItem, SelectTrigger, SelectContent } from "../ui/select";
import { FormcompanyList, FormLocationList } from "@/static/hr-static";

interface ILocationInput {
  activeState: IDynamicForm;
  setActiveState: React.Dispatch<React.SetStateAction<IDynamicForm>>;
  firstTitle: string;
  fieldName: keyof IDynamicForm;
  secondTitle: string;
  setSelectedFields: React.Dispatch<
    React.SetStateAction<IDynamicExtendedFields>
  >;
  selectedFields: IDynamicExtendedFields;
  setLocation: React.Dispatch<React.SetStateAction<ISingleLocation>>;
  formLocation: ISingleLocation;
  mainTitle: string;
}

export default function LocationInput({
  activeState,
  firstTitle,
  mainTitle,
  fieldName,
  setActiveState,
  secondTitle,
  formLocation,
  setLocation,
}: ILocationInput) {
  return (
    <div
      className={`border-2 border-gray-500 border-dashed pr-2 rounded-sm mb-3 justify-between flex items-end`}
    >
      <div className="grow flex flex-wrap max-w-[750px]">
        <div className="w-full px-2 sm:px-4 sm:w-6/12 py-4 pb-8 border-gray-500 max-sm:border-b-2 sm:border-r-2  border-dashed max-sm:border-sm">
          <span className="font-medium block text-base capitalize sm:text-lg">
            {mainTitle}
          </span>
          <h3 className="mt-3">
            <span className="font-medium">{firstTitle}</span>
            <span className="text-red-500 text-lg relative top-1 ml-1">*</span>
          </h3>
          <Select
            onValueChange={(val) => {
              setLocation((prev) => {
                return { ...prev, company: val };
              });
            }}
          >
            <SelectTrigger className='className="outline-none w-full h-10 bg-transparent outline-none px-2 border rounded-md'>
              {formLocation.company ? (
                <span>{formLocation.company}</span>
              ) : (
                <span className="text-gray-400 text-base">{`Enter Current Company`}</span>
              )}
            </SelectTrigger>
            <SelectContent className="">
              {FormcompanyList.map((item, key) => (
                <SelectItem value={item} key={key}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full py-4 px-2 sm:px-4 pb-8 sm:w-6/12">
          <h3 className="mt-11">
            <span className="font-medium">{secondTitle}</span>
          </h3>
          <div className="flex-center flex-wrap xl:flex-nowrap">
            <Select
              onValueChange={(val) => {
                setLocation((prev) => {
                  return { ...prev, location: val };
                });
              }}
            >
              <SelectTrigger className="w-full h-10 bg-transparent outline-none px-2 border rounded-md">
                {formLocation.location ? (
                  <span>{formLocation.location}</span>
                ) : (
                  <span className="text-base text-gray-400">{`Enter ${camelCaseToSpaces(secondTitle)}`}</span>
                )}
              </SelectTrigger>
              <SelectContent>
                {FormLocationList.map((item, key) => (
                  <SelectItem value={item} key={key}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
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
