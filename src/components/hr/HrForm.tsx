import DateOfBirthPicker from "@/components/global/DatePicker";
import InputArea from "@/components/global/InputArea";
import InputField from "@/components/global/InputField";
import SelectField from "@/components/global/SelectField";
import { Button } from "@/components/ui/button";
import { useGetRequest } from "@/hooks/useGetRequests";
import { usePostRequest } from "@/hooks/usePostRequests";
import { IAddNewuser } from "@/interfaces/add-userinterface";
import { HrRole, IAllAdminRes, IUser } from "@/interfaces/hr-intrerface";
import { adduserSchema } from "@/validations/userValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import Loader from "../global/Loader";
import { useQueryClient } from "@tanstack/react-query";
import useRoles from "@/hooks/useRoles";

export default function HrForm({
  defaultValues,
  staffId,
}: {
  defaultValues?: IAddNewuser;
  staffId?: string;
}) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    setError,
    formState: { errors },
  } = useForm<IAddNewuser>({
    resolver: yupResolver(adduserSchema),
    defaultValues: { ...defaultValues, status: "Active" },
  });

  const { isSuperAdmin } = useRoles();

  const [dateOfBirth, gender, maritalStatus, role, status, teamLeader] = watch([
    "dateOfBirth",
    "gender",
    "maritalStatus",
    "role",
    "status",
    "teamLeader",
  ]);

  const queryClient = useQueryClient();

  const onSubmit: SubmitHandler<IAddNewuser> = (data) => {
    if (
      !data.teamLeader &&
      data.role !== "superAdmin" &&
      data.role !== "admin"
    ) {
      setError("teamLeader", {
        type: "manual",
        message: "Team leader is a required field",
      });
      return;
    }

    const mutationData = {
      firstname: data.firstName,
      lastname: data.lastName,
      middlename: data.middleName,
      phone: data.phoneNumber,
      dob: data.dateOfBirth.toISOString(),
      gender: data.gender,
      email: data.emailAddress,
      city: data.city,
      state: data.state,
      nationality: data.nationality,
      maritalstatus: data.maritalStatus,
      address: data.detailAddress,
      recruiter_active: "true",
    };
    //,{},
    if (isSuperAdmin) {
      defaultValues
        ? mutate({
            ...mutationData,
            staffid: staffId,
            role: data.role,
            teamleader: data.teamLeader || "",
            status: data.status,
          })
        : mutate({
            ...mutationData,
            password: `${data.firstName}1234`,
            role: data.role,
            teamleader: data.teamLeader || "",
            status: data.status,
          });
    } else {
      defaultValues
        ? mutate({ ...mutationData, staffid: staffId })
        : mutate({ ...mutationData, password: `${data.firstName}1234` });
    }
  };

  const { data } = useGetRequest<IAllAdminRes>({
    url: "/admin/retrieve/all/admins",
    queryKey: ["all-superadmin"],
    param: "?role=superAdmin",
  });

  const { mutate, isPending } = usePostRequest<void, IUser>({
    url: defaultValues ? "admin/update/profile" : "/admin/signup",
    showSuccess: defaultValues
      ? "user has been updated"
      : "new user has been added",
    addId: !!defaultValues,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["all-admin"],
        refetchType: "all",
      });
      if (!defaultValues) {
        reset();
      }
    },
  });

  const copy = data && [...data?.data.data];
  const teamLeaderLabel = copy
    ? (() => {
        const item = copy.find((item) => item._id === teamLeader);
        return item
          ? `${item.basic_info.firstname} ${item.basic_info.lastname}`
          : "";
      })()
    : "";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-3 flex flex-wrap max-w-[900px]"
    >
      <InputField
        register={register}
        title="First Name"
        fieldName="firstName"
        placeholder="Enter user first name"
        containerClassName="w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2"
        required
        error={errors.firstName?.message}
      />
      <InputField
        register={register}
        title="Middle Name"
        fieldName="middleName"
        placeholder="Enter user middle name"
        containerClassName="w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2"
        error={errors.middleName?.message}
      />
      <InputField
        register={register}
        title="Last Name"
        fieldName="lastName"
        placeholder="Enter user last name"
        containerClassName="w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2"
        required
        error={errors.lastName?.message}
      />
      <InputField
        register={register}
        title="Phone Number"
        fieldName="phoneNumber"
        placeholder="Enter phone number of the user"
        containerClassName="w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2"
        required
        error={errors.phoneNumber?.message}
      />
      <DateOfBirthPicker
        selectedDate={dateOfBirth}
        labelText="Date Of Birth"
        className="w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2"
        placeholder="DD/MM/YYYY"
        error={errors.dateOfBirth?.message}
        required
        onDateSelect={(date) => setValue("dateOfBirth", date)}
      />
      <SelectField
        value={gender}
        onSelect={(value) => {
          setValue("gender", value);
        }}
        labelText="Gender"
        required
        placeholder="Select Gender"
        error={errors.gender?.message}
        options={[
          { value: "Male", label: "Male" },
          { value: "Female", label: "Female" },
        ]}
        className="w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2"
      />
      <SelectField
        value={maritalStatus}
        onSelect={(value) => {
          setValue("maritalStatus", value);
        }}
        labelText="Marital Status"
        error={errors.maritalStatus?.message}
        required
        placeholder="Select Marital Status"
        options={[
          { value: "Single", label: "Single" },
          { value: "Married", label: "Married" },
          { value: "Divorced", label: "Divorced" },
        ]}
        className="w-full sm:w-6/12 2xl:w-4/12 xl:mt-2 px-1 sm:px-2"
      />
      <InputField
        register={register}
        title="Email Address"
        fieldName="emailAddress"
        placeholder="Enter user email address"
        containerClassName="w-full sm:w-6/12 px-1 sm:px-2"
        required
        error={errors.emailAddress?.message}
      />
      <InputField
        register={register}
        title="City"
        fieldName="city"
        placeholder="Enter City Name"
        containerClassName="w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2"
        required
        error={errors.emailAddress?.message}
      />
      <InputField
        register={register}
        title="State"
        fieldName="state"
        placeholder="Enter State "
        containerClassName="w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2"
        required
        error={errors.emailAddress?.message}
      />
      <div className="w-full flex flex-wrap">
        <InputField
          register={register}
          title="Nationality"
          fieldName="nationality"
          placeholder="Enter Nationality "
          containerClassName="w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2"
          required
          error={errors.emailAddress?.message}
        />
        <InputArea
          register={register}
          title="Detail Address"
          required
          fieldName="detailAddress"
          error={errors.detailAddress?.message}
          containerClassName="w-full 2xl:w-8/12"
          placeholder="Enter Address in detail e.g 5, smith street "
        />
      </div>

      {isSuperAdmin ? (
        <>
          <div className="flex-center w-full my-6">
            <div className="grow h-[2px] bg-[#747474]"></div>
            <span className="h-2 w-2 rounded-full relative right-[2px] bg-[#747474]"></span>
            <span className="px-1 text-[#747474]">Administration</span>
            <span className="h-2 w-2  rounded-full relative left-[2px] bg-[#747474]"></span>
            <div className="grow h-[2px] bg-[#747474]"></div>
          </div>
          <div className="pt-4 flex w-full flex-wrap">
            <SelectField
              value={role}
              onSelect={(value) => {
                setValue("role", value as HrRole);
              }}
              labelText="Role"
              error={errors.role?.message}
              required
              placeholder="Select Role"
              options={[
                { value: "superAdmin", label: "Super Admin" },
                { value: "admin", label: "Admin" },
                { value: "officeAssistant", label: "Office Assistant" },
                { value: "teamLeader", label: "Team Leader" },
                { value: "recruiter", label: "Recruiter" },
                { value: "fullTime", label: "Full Time" },
              ]}
              className="w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2"
            />
            <SelectField
              value={teamLeaderLabel}
              onSelect={(value) => {
                console.log(value, "val-change");
                if (value) {
                  setValue("teamLeader", value);
                }
              }}
              labelText="Team Leader"
              error={errors.teamLeader?.message}
              disabled={
                role === "superAdmin" || role === "admin" || !role || !data
              }
              placeholder="Select Team Leader"
              options={
                data
                  ? data.data.data.map((item) => ({
                      value: item._id,
                      label: `${item.basic_info.firstname || "not set"} ${item.basic_info.lastname || "not set"}`,
                    }))
                  : []
              }
              className="w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2"
            />
          </div>
          <SelectField
            value={status}
            onSelect={(value) => {
              setValue("status", value);
            }}
            labelText="Status"
            error={errors.status?.message}
            required
            placeholder="Select Status"
            options={[
              { value: "Active", label: "Active" },
              { value: "Suspend", label: "Suspended" },
            ]}
            className="w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2"
          />
        </>
      ) : null}

      <div className="py-5 mt-5 w-full ">
        <Button
          disabled={isPending}
          className={`block ml-auto px-10 ${isPending && "px-12"}`}
        >
          {!isPending ? defaultValues ? "Edit" : "Create" : <Loader />}
        </Button>
      </div>
    </form>
  );
}
