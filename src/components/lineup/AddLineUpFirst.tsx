import { ILineUpFirst } from "@/interfaces/lineup-interfaces";
import { addLineUpPopupSchema } from "@/validations/lineupValidations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import SelectField from "../global/SelectField";
import InputField from "../global/InputField";
import { Button } from "../ui/button";

interface IAddLineUpFirst {
  onFormSubmit: (data: ILineUpFirst) => void;
}
export default function AddLineUpFirst({ onFormSubmit }: IAddLineUpFirst) {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ILineUpFirst>({ resolver: yupResolver(addLineUpPopupSchema) });

  const onSubmit = (data: ILineUpFirst) => {
    onFormSubmit(data);
  };

  const [company, location] = watch(["company", "location"]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5 max-w-[700px]">
      <SelectField
        labelText="Company"
        required
        value={company}
        placeholder="Select Company"
        error={errors.company?.message}
        onSelect={(value) => {
          setValue("company", value);
        }}
        options={[
          { label: "Teleperformance", value: "Teleperformance" },
          { label: "Concentrix", value: "Concentrix" },
          { label: "Foundever", value: "Foundever" },
        ]}
      />
      <SelectField
        labelText="Location"
        required
        value={location}
        placeholder="Select Company Location"
        error={errors.location?.message}
        onSelect={(value) => {
          setValue("location", value);
        }}
        options={[
          { label: "Teleperformance Vizmin", value: "Teleperformance Vizmin" },
          { label: "Teleperformance Cebu", value: "Teleperformance Cebu" },
          {
            label: "Teleperformance Bacolod",
            value: "Teleperformance Bacolod",
          },
          { label: "Teleperformance Baguig", value: "Teleperformance Baguig" },
          { label: "Teleperformance CDO", value: "Teleperformance CDO" },
          { label: "Teleperformance Ayala", value: "Teleperformance Ayala" },
        ]}
      />
      <InputField
        register={register}
        fieldName="email"
        error={errors.email?.message}
        title="Email Address"
        placeholder="Enter user email address"
        required
      />
      <Button size={"lg"} className="px-10 mt-6 flex ml-auto">
        Continue
      </Button>
    </form>
  );
}
