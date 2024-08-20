import { FieldValues, UseFormRegister, Path } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { InputType } from "@/interfaces/authInterface";
import { SvgIcons } from "@/icons/SvgIconts";

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
  onPasswordToggle?: () => void;
  required?: boolean;
  extraLabel?: string;
  readonly?: boolean;
};

// global input field for validating user inputs
export default function InputField<T extends FieldValues>({
  containerClassName,
  readonly,
  type = "text",
  required,
  extraLabel,
  fieldName,
  title,
  disabled = false,
  placeholder,
  error,
  register,
  className,
  showPasswordToggle,
  onPasswordToggle,
}: InputFieldType<T>) {
  const { onChange, onBlur, name, ref } = register(fieldName as Path<T>);

  return (
    <div className={cn("mb-5 w-full relative", containerClassName)}>
      <div
        className={`my-1 pl-1 text-shade font-medium ${required ? "" : "mb-2"}`}
      >
        <h3>
          <span>{title}</span>
          {required ? (
            <span className="text-red-500 text-lg relative top-1 ml-1">*</span>
          ) : null}
          {extraLabel ? (
            <span className="text-[13px] text-[#8A8686]/70">{extraLabel}</span>
          ) : null}
        </h3>
      </div>
      <Input
        readOnly={readonly}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
        ref={ref}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={cn(
          `invalid:border-red-500 ${error ? "border-red-500" : ""}`,
          className,
        )}
      />
      {showPasswordToggle ? (
        <button
          aria-label="cancel-button"
          type="button"
          onClick={onPasswordToggle}
          className={`rounded-full absolute  right-2 bottom-0 p-2`}
        >
          <span>
            {type === "text" ? (
              <SvgIcons.EyesClosed />
            ) : (
              <SvgIcons.EyesOpened />
            )}
          </span>
        </button>
      ) : null}

      {error ? (
        <span className="text-red-500 text-sm absolute -bottom-5 left-2">
          {error}
        </span>
      ) : null}
    </div>
  );
}
