import Layout from "@/components/global/layout/Layout";
import PageInput from "@/components/global/PageInput";
import RangePicker from "@/components/global/RangePicker";
import SelectField from "@/components/global/SelectField";
import { Button } from "@/components/ui/button";
import { ChevronDown, Filter } from "lucide-react";

import { useState } from "react";
interface IOptions {
  label: string;
  value: string;
}
interface ICustomSelectOptions {
  options: IOptions[];
  label: string;
  type?: string;
}
const CustomSelect = ({ options, label, type }: ICustomSelectOptions) => {
  const [selectedOption, setSelectedOption] = useState<IOptions | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: IOptions) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative ">
      <div
        className="bg--white -border -border-gray-300 -rounded-shadow-sm cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption ? selectedOption.label : label}</span>
        <svg
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>

      {isOpen && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-md shadow-md mt-1 w-full">
          {type !== "date" ? (
            options.map((option) => (
              <li
                key={option.value}
                className="px-4 py-2 flex justify-center items-center hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </li>
            ))
          ) : (
            <RangePicker onSelect={({}) => {}} />
          )}
        </ul>
      )}
    </div>
  );
};
function Listed() {
  return (
    <>
      <div className="p-2 mb-2 rounded-full border-[1px] border-solid border-blue-800">
        <div className="flex justify-between text-slate-800 font-medium">
          <span className="font-bold">Mark Zukerberg</span>
          <span className="">Data Programmer</span>
          <span>Line Up</span>
          <span>26/4/2024</span>
          <ChevronDown />
        </div>
      </div>
    </>
  );
}
export default function ExportCandidates() {
  const company = [
    {
      label: "Facebook",
      value: "Facebook",
    },
    { label: "Google", value: "Google" },
    {
      label: "Twitter",
      value: "Twitter",
    },
  ];
  return (
    <Layout title="Export Candidate" content="Export Candidate">
      <div className="flex justify-between mt-2 mb-4">
        <p className="text-xl">Export</p>
        <PageInput />
      </div>
      <hr />
      <div className="">
        <div className="flex items-center m-6 border-[1px] rounded-lg p-2 px-8 justify-between">
          <span className="">
            <Filter className="w-4 inline mr-2 "></Filter>Filter By
          </span>
          <CustomSelect options={company} label="Interview Date" type="date" />
          <CustomSelect options={company} label="Location" />
          <CustomSelect options={company} label="Location" />
          <CustomSelect options={company} label="Location" />
          <CustomSelect options={company} label="Location" />
          <CustomSelect options={company} label="Location" />
        </div>
        <div className="px-8 flex justify-between">
          <p className="text-white bg-gray-900 flex justify-center items-center rounded-full h-full p-2">
            10,000 Results Found
          </p>
          <SelectField
            className="w-36"
            onSelect={() => null}
            labelText=""
            value="Select File Type"
            options={[{ label: "CSV", value: "Csv" }]}
          />
          <Button variant="default" className="px-10">
            Export
          </Button>
        </div>
        <div className="mt-4 px-8">
          <p className="mb-4">Candidates Listed</p>
          <div>
            {new Array(12).fill(null).map((_) => (
              <Listed />
            ))}
          </div>
        </div>
        <div className="flex mt-10 px-8  float-right">
          <select className="mr-4">
            {new Array(10).fill(null).map((_, ind) => (
              <option>{++ind}</option>
            ))}
          </select>
          <div className="border-[1.5px] px-2 border-solid rounded-full border-blue-800">
            <span className="px-2 font-bold border-r-[1px] border-r-solid border-gray-600">
              Previous
            </span>
            {new Array(7).fill(null).map((_, ind) => (
              <span className="px-2 font-bold border-r-[1px] border-r-solid border-gray-600">
                {++ind}
              </span>
            ))}
            <span className="px-2 font-bold">
              Next
            </span>
            
          </div>
          
        </div>
        <div className="h-96 w-9"></div>
      </div>
    </Layout>
  );
}
