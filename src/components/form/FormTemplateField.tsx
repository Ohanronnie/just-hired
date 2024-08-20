import { IDynamicForm } from "@/interfaces/form-interface";
import { Checkbox } from "../ui/checkbox";
import { camelCaseToSpaces } from "@/lib/utils";

interface IFormTemplateField {
  fields: string[];
  placeholder?: string;
  title: string;
  fieldName: keyof IDynamicForm;
  activeState: IDynamicForm;
  setActiveState: React.Dispatch<React.SetStateAction<IDynamicForm>>;
}

export default function FormTemplateField({
  fieldName,
  placeholder,
  title,
  fields,
  activeState,
  setActiveState,
}: IFormTemplateField) {
  return (
    <div className="border-2 border-gray-500 border-dashed py-4 px-2 rounded-sm mb-3 justify-between flex items-end">
      <div className="grow px-2  max-w-[700px]">
        <span className="font-medium block text-base sm:text-lg">{title}</span>
        <div className="flex-center flex-wrap mt-3">
          {fields.map((item, index) => (
            <div
              key={index}
              className={`${index !== 1 && "mb-3"} w-full px-1 xs:w-6/12 mb-2 md:w-4/12`}
            >
              <h3>
                <span className="font-medium">{item}</span>
                {index !== 1 ? (
                  <span className="text-red-500 text-lg relative top-1 ml-1">
                    *
                  </span>
                ) : null}
              </h3>
              <input
                placeholder={placeholder || `Enter ${camelCaseToSpaces(item)}`}
                readOnly
                className="w-full h-10 bg-transparent outline-none px-2 border rounded-md"
                type="text"
              />
            </div>
          ))}
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
