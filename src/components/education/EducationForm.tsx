import InputField from "@/components/global/InputField";
import { Button } from "@/components/ui/button";
import { usePostRequest } from "@/hooks/usePostRequests";
import {
  IAddEducationInterface,
  IEducationBody,
} from "@/interfaces/experience-interface";
import { addEducationSchema } from "@/validations/educationValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import Loader from "../global/Loader";
import { useQueryClient } from "@tanstack/react-query";

export default function EducationForm({
  defaultValues,
  educationid,
}: {
  defaultValues?: IAddEducationInterface;
  educationid?: string;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAddEducationInterface>({
    resolver: yupResolver(addEducationSchema),
    defaultValues,
  });

  const queryClient = useQueryClient();

  const { mutate, isPending } = usePostRequest<void, IEducationBody>({
    url: `/admin/${defaultValues ? "update" : "create"}/education`,
    showSuccess: `Education successfully ${defaultValues ? "updated" : "created"}`,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["all-education"],
        refetchType: "all",
      });
      if (!defaultValues) {
        reset();
      }
    },
  });

  const onSubmit: SubmitHandler<IAddEducationInterface> = ({
    name,
    valueNumber,
  }) => {
    defaultValues
      ? mutate({ name, value: valueNumber, educationid })
      : mutate({ name, value: valueNumber });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-3 max-w-[600px]">
      <div className="grow max-w-[600px]">
        <InputField
          title="Name"
          required
          register={register}
          fieldName="name"
          placeholder="Enter the name of the certification"
          error={errors.name?.message}
        />
        <InputField
          title="value Number"
          extraLabel="(Ranking value from the least to the highest)"
          required
          register={register}
          fieldName="valueNumber"
          placeholder="Enter the value number of the education"
          error={errors.valueNumber?.message}
        />
      </div>
      <div className="w-full mt-8 flex justify-end">
        <Button
          disabled={isPending}
          size={"lg"}
          className={`flex ${isPending && "px-14"} px-10`}
        >
          {isPending ? (
            <Loader />
          ) : (
            <span>{defaultValues ? "Edit" : "Save"} Education</span>
          )}
        </Button>
      </div>
    </form>
  );
}
