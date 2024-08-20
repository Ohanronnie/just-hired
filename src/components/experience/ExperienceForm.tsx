import InputField from "@/components/global/InputField";
import { Button } from "@/components/ui/button";
import { usePostRequest } from "@/hooks/usePostRequests";
import { IAddEducationInterface } from "@/interfaces/experience-interface";
import { ICreateEditExp } from "@/interfaces/experience-interface";
import { addEducationSchema } from "@/validations/educationValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import Loader from "../global/Loader";
import { useQueryClient } from "@tanstack/react-query";

export default function EducationForm({
  defaultValues,
  id,
}: {
  defaultValues?: IAddEducationInterface;
  id?: string;
}) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddEducationInterface>({
    resolver: yupResolver(addEducationSchema),
    defaultValues,
  });

  const queryClient = useQueryClient();
  const { mutate, isPending } = usePostRequest<void, ICreateEditExp>({
    url: `/admin/${defaultValues ? "update" : "create"}/experience`,
    showSuccess: "New experience has been added",
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries({
        queryKey: ["all-experience"],
        refetchType: "all",
      });
    },
  });

  const onSubmit: SubmitHandler<IAddEducationInterface> = (data) => {
    const mutateData = { value: Number(data.valueNumber), name: data.name };
    defaultValues
      ? mutate(mutateData)
      : mutate({ ...mutateData, experienceid: id });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-3 max-w-[600px]">
      <div className="grow max-w-[600px]">
        <InputField
          title="Name"
          required
          register={register}
          fieldName="name"
          placeholder="Enter the experience description"
          error={errors.name?.message}
        />
        <InputField
          title="Value Number"
          extraLabel="(Ranking value from the least to the highest)"
          required
          register={register}
          fieldName="valueNumber"
          placeholder="Enter the value number of the experience"
          error={errors.valueNumber?.message}
        />
      </div>
      <div className="w-full mt-8 flex justify-end">
        <Button
          disabled={isPending}
          size={"lg"}
          className={`flex px-10 ${isPending && "px-12"}`}
        >
          {isPending ? (
            <Loader />
          ) : (
            <span>{defaultValues ? "Edit" : "Save"} Experience</span>
          )}
        </Button>
      </div>
    </form>
  );
}
