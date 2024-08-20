import { useRef, useState } from "react";
import { ILineUpFirst } from "@/interfaces/lineup-interfaces";
import { ILineUpForm } from "@/interfaces/lineup-interfaces";
import { lineUpFormSchema } from "@/validations/lineupValidations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import SelectField from "../global/SelectField";
import InputField from "../global/InputField";
import { Button } from "../ui/button";
import DateOfBirthPicker from "../global/DatePicker";
import { SvgIcons } from "@/icons/SvgIconts";

interface IAddLineUpForm {
  defaultValues: ILineUpFirst;
}

export default function AddLineUpForm({ defaultValues }: IAddLineUpForm) {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ILineUpForm>({
    resolver: yupResolver(lineUpFormSchema),
    defaultValues,
  });

  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  const [
    company,
    location,
    maritalStatus,
    gender,
    educationalQualifications,
    bpoAccount,
    bpoExperience,
    lineUpStatus,
    dateOfBirth,
  ] = watch([
    "company",
    "location",
    "maritalStatus",
    "gender",
    "educationalQualifications",
    "bpoAccount",
    "bpoExperience",
    "lineUpStatus",
    "dateOfBirth",
  ]);

  const onSubmit = (data: ILineUpForm) => {
    console.log(data, file);
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const imageData = reader.result as string;
      setUrl(imageData);
      setFile(file);
      setValue("resume", imageData);
    };
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5 max-w-[900px]">
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
        <SelectField
          labelText="Company"
          required
          value={company}
          readOnly
          placeholder="Select Company"
          error={errors.company?.message}
          onSelect={(value) => {
            setValue("company", value);
          }}
          options={[]}
        />
        <SelectField
          labelText="Location"
          readOnly
          required
          value={location}
          placeholder="Select Company Location"
          error={errors.location?.message}
          onSelect={(value) => {
            setValue("location", value);
          }}
          options={[]}
        />
      </div>
      <InputField
        register={register}
        fieldName="email"
        type="email"
        error={errors.email?.message}
        title="Email Address"
        className="max-w-[444px]"
        readonly
        placeholder="Enter user email address"
        required
      />
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3">
        <InputField
          register={register}
          fieldName="firstName"
          error={errors.firstName?.message}
          title="First Name"
          placeholder="Enter first name"
          required
        />
        <InputField
          register={register}
          fieldName="middleName"
          error={errors.middleName?.message}
          title="Middle Name"
          placeholder="Enter middle name"
        />
        <InputField
          register={register}
          fieldName="lastName"
          error={errors.lastName?.message}
          title="Last Name"
          placeholder="Enter last name"
          required
        />
      </div>
      <InputField
        register={register}
        fieldName="phoneNumber"
        error={errors.phoneNumber?.message}
        title="Phone Number"
        placeholder="Enter phone number"
        className="max-w-[400px]"
        required
      />
      <DateOfBirthPicker
        labelText="Date of Birth"
        required
        selectedDate={dateOfBirth}
        onDateSelect={(date) => setValue("dateOfBirth", date)}
        error={errors.dateOfBirth?.message}
        placeholder="DD/MM/YYY"
        className="max-w-[400px]"
      />
      <SelectField
        labelText="Marital Status"
        required
        value={maritalStatus}
        placeholder="Select marital status"
        error={errors.maritalStatus?.message}
        onSelect={(value) => {
          setValue("maritalStatus", value);
        }}
        options={[
          { label: "Single", value: "single" },
          { label: "Married", value: "married" },
          { label: "Divorced", value: "divorced" },
          { label: "Widowed", value: "widowed" },
        ]}
        className="max-w-[400px]"
      />
      <InputField
        register={register}
        fieldName="currentLocation"
        error={errors.currentLocation?.message}
        title="Current Location"
        placeholder="Enter current location"
        className="max-w-[400px]"
        required
      />
      <SelectField
        labelText="Gender"
        required
        value={gender}
        placeholder="Select Gender"
        error={errors.gender?.message}
        onSelect={(value) => {
          setValue("gender", value);
        }}
        options={[
          { label: "Male", value: "Male" },
          { label: "Female", value: "Female" },
          { label: "Other", value: "Other" },
        ]}
        className="max-w-[400px]"
      />
      <InputField
        register={register}
        fieldName="city"
        error={errors.city?.message}
        title="City"
        placeholder="Enter city"
        required
        className="max-w-[400px]"
      />
      <SelectField
        labelText="Educational Qualifications"
        required
        value={educationalQualifications}
        placeholder="Select Educational Qualification"
        error={errors.educationalQualifications?.message}
        onSelect={(value) => {
          setValue("educationalQualifications", value);
        }}
        options={[
          { label: "High School", value: "high_school" },
          { label: "Bachelor's Degree", value: "bachelor" },
          { label: "Master's Degree", value: "master" },
          { label: "Doctorate", value: "doctorate" },
        ]}
        className="max-w-[400px]"
      />
      <div className="flex-center max-sm:flex-col  sm:gap-2 md:gap-3">
        <SelectField
          labelText="BPO Account"
          required
          value={bpoAccount}
          placeholder="Select BPO Account"
          error={errors.bpoAccount?.message}
          onSelect={(value) => {
            setValue("bpoAccount", value);
          }}
          options={[
            { label: "TelePrinters", value: "TelePrinters" },
            { label: "Concentric", value: "Concentric" },
          ]}
          className="w-full grow"
        />
        <SelectField
          labelText="BPO Experience"
          required
          value={bpoExperience}
          placeholder="Select BPO Experience"
          error={errors.bpoExperience?.message}
          onSelect={(value) => {
            setValue("bpoExperience", value);
          }}
          options={[
            { label: "Less than 1 year", value: "less_than_1_year" },
            { label: "1-2 years", value: "1-2_years" },
            { label: "More than 2 years", value: "more_than_2_years" },
          ]}
          className="w-full grow"
        />
        <div className="flex-center ml-4 gap-1 mt-4 flex-center">
          <Button type="button" className="px-4" size={"sm"}>
            Add +
          </Button>
          <SvgIcons.BpoInfo className="scale-75" />
        </div>
      </div>
      <InputField
        register={register}
        fieldName="courseOfStudy"
        error={errors.courseOfStudy?.message}
        title="Course of Study"
        placeholder="Enter Course of Study"
        required
        className="max-w-[400px]"
      />
      <div className="w-[300px] 2xl:pl-4 mb-4 relative">
        <input
          className="hidden"
          accept="image/*"
          onChange={handleUpload}
          ref={ref}
          type="file"
        />
        {url ? (
          <>
            <div className="w-[250px] h-[200px]">
              <img
                src={url}
                alt="uploaded-image"
                className="object-cover h-full w-full"
              />
            </div>
            <Button
              variant={"outline"}
              type="button"
              onClick={() => ref.current?.click()}
              className="px-6 mt-3 h-8"
            >
              <span>change file</span>
            </Button>
          </>
        ) : (
          <div className="border-2 w-[250px] border-main border-dashed h-[200px] py-10 rounded-md flex flex-col justify-between">
            <h3 className="font-medium text-center">Select Resume / CV </h3>
            <SvgIcons.Upload className="block w-fit mx-auto" />
            <Button
              type="button"
              onClick={() => ref.current?.click()}
              className="px-6 flex mx-auto h-8"
            >
              <span>Select file</span>
            </Button>
          </div>
        )}
        {errors.resume ? (
          <span className="text-red-500 absolute -bottom-5 whitespace-nowrap left-2 text-[13px]">
            {errors.resume.message}
          </span>
        ) : null}
      </div>
      <SelectField
        labelText="Status"
        required
        value={lineUpStatus}
        placeholder="Select Status"
        error={errors.lineUpStatus?.message}
        onSelect={(value) => {
          setValue("lineUpStatus", value);
        }}
        options={[
          { label: "Pending", value: "pending" },
          { label: "Completed", value: "completed" },
          { label: "Failed", value: "failed" },
        ]}
        className="w-full sm:w-6/12"
      />
      <div className="mt-6 flex-center justify-end">
        <Button
          type="button"
          size="lg"
          variant={"outline"}
          className="px-10 mr-4"
        >
          Draft
        </Button>
        <Button size={"lg"} className="px-10">
          Submit
        </Button>
      </div>
    </form>
  );
}
