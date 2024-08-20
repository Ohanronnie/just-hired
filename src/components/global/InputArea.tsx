import { FieldValues, UseFormRegister, Path } from "react-hook-form";
import { cn } from "@/lib/utils";
import { InputType } from "@/interfaces/authInterface";
import { Textarea } from "../ui/text-area";

type InputFieldType<T extends FieldValues> = {
  error?: string;
  fieldName: keyof T;
  register: UseFormRegister<T>;
  containerClassName?: string;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  title: string;
  type?: InputType;
  showPasswordToggle?: boolean;
  onpaswordToggle?: () => void;
  required?: boolean;
};

// global input field for validating user inputs
export default function InputArea<T extends FieldValues>({
  containerClassName,
  required,
  fieldName,
  title,
  disabled = false,
  placeholder,
  error,
  register,
  className,
  showPasswordToggle,
  onpaswordToggle,
}: InputFieldType<T>) {
  const { onChange, onBlur, name, ref } = register(fieldName as Path<T>);

  return (
    <div className={cn("mb-5 w-full relative", containerClassName)}>
      <h3 className="my-1 pl-1 text-shade font-medium">
        <span>{title}</span>
        {required ? <span className="text-red-500 text-lg ml-2">*</span> : null}
      </h3>
      <Textarea
        onChange={onChange}
        name={name}
        onBlur={onBlur}
        ref={ref}
        disabled={disabled}
        placeholder={placeholder}
        className={cn(
          `invalid:border-red-500 resize-none w-full h-[150px] overflow-scroll default-scroll ${error ? "border-red-500" : ""}`,
          className,
        )}
      ></Textarea>
      {showPasswordToggle ? (
        <button
          aria-label="cancel-button"
          type="button"
          onClick={onpaswordToggle}
          className={`rounded-full absolute  right-2 bottom-0 p-2`}
        ></button>
      ) : null}
      {error ? (
        <span className="text-red-500 text-sm absolute -bottom-5 left-2">
          {error}
        </span>
      ) : null}
    </div>
  );
}
