import BpoInput from "@/components/form/BpoInput";
import FormTSelectTemplate from "@/components/form/FormSelectTemplate";
import FormTemplateField from "@/components/form/FormTemplateField";
import LocationInput from "@/components/form/LocationInput";
import OtterQuestions from "@/components/form/OtterQuestions";
import ResumeField from "@/components/form/ResumeField";
import Layout from "@/components/global/layout/Layout";
import { Button } from "@/components/ui/button";
import { useGetRequest } from "@/hooks/useGetRequests";
import { IEducationListResponse } from "@/interfaces/experience-interface";
import {
  IDynamicExtendedFields,
  IDynamicForm,
  IFormOutPut,
  IOtterFields,
  ISingleLocation,
} from "@/interfaces/form-interface";
import {
  genderDefault,
  maritalStatusDefault,
  DynamicSelectDefault,
  DynamicDefault,
  otterFieldDefault,
} from "@/static/formStatic";
import { useState } from "react";

export default function CreateForm() {
  const [activeState, setActiveState] = useState<IDynamicForm>(DynamicDefault);
  const [selectedFields, setSelectedFields] =
    useState<IDynamicExtendedFields>(DynamicSelectDefault);
  const [textChange, setTextChange] = useState("");
  const [resumeRequired, setResumeRequired] = useState<boolean>(false);
  const [formLocations, setFormLocation] = useState<ISingleLocation>({
    location: "",
    company: "",
  });
  const [otterFields, setOtterFields] =
    useState<IOtterFields>(otterFieldDefault);

  const handleCreate = () => {
    let formTemplate: IFormOutPut = { ...activeState };
    const specialItems: (keyof IDynamicExtendedFields)[] = [
      "gender",
      "maritalStatus",
      "qualifications",
      "bpoAccountAndExperience",
    ];

    //add extended item set to true to end object
    specialItems.forEach((item) => {
      if (formTemplate[item]) {
        const dynamicItem = selectedFields[item];
        formTemplate[item] = {
          status: true,
          options: [...dynamicItem],
          note: item === "qualifications" ? textChange : null,
        };
      }
    });
    //add from resume to end object if set to true
    if (formTemplate.resume) {
      formTemplate.resume = {
        status: true,
        required: resumeRequired,
      };
    }

    if (formTemplate.currentLocation) {
      formTemplate.currentLocation = formLocations;
    }
    if (formTemplate.otterFields) {
      formTemplate.otterFields = otterFields;
    }

    console.log(formTemplate);
  };

  const { data } = useGetRequest<IEducationListResponse>({
    queryKey: ["all-education"],
    url: "/admin/retrieve/education",
  });

  return (
    <Layout title="Administration" content="Hello Helen, Welcome to Pronext">
      <div className="card">
        <div className="mt-3 py-2 border-b">
          <span className="font-bold text-lg">Create Form</span>
        </div>
        <div className="py-2">
          <FormTemplateField
            activeState={activeState}
            setActiveState={setActiveState}
            fieldName="name"
            fields={["first Name", "Middle Name", "Last Name"]}
            title="Full name Divided"
          />
          <FormTemplateField
            activeState={activeState}
            setActiveState={setActiveState}
            fieldName="fullName"
            fields={["full name"]}
            title="Full Name"
          />
          <FormTemplateField
            activeState={activeState}
            setActiveState={setActiveState}
            fieldName="email"
            fields={["email"]}
            title="Email"
          />
          <FormTemplateField
            activeState={activeState}
            setActiveState={setActiveState}
            fieldName="phoneNumber"
            fields={["phone number"]}
            title="Phone Number"
          />
          <FormTemplateField
            activeState={activeState}
            setActiveState={setActiveState}
            fieldName="dateOfBirth"
            fields={["Date Of Birth"]}
            title="Date of birth"
            placeholder="DD/MM/YYY"
          />
          <FormTSelectTemplate
            allOptions={maritalStatusDefault}
            fieldName="maritalStatus"
            activeState={activeState}
            setActiveState={setActiveState}
            selectedFields={selectedFields}
            setSelectedFields={setSelectedFields}
            title="Marital Status"
          />
          <FormTemplateField
            activeState={activeState}
            setActiveState={setActiveState}
            fieldName="currentLocation"
            fields={["currentLocation"]}
            title="Current Location"
          />
          <FormTSelectTemplate
            allOptions={genderDefault}
            fieldName="gender"
            activeState={activeState}
            setActiveState={setActiveState}
            selectedFields={selectedFields}
            setSelectedFields={setSelectedFields}
            title="Gender"
          />
          <FormTemplateField
            activeState={activeState}
            setActiveState={setActiveState}
            fieldName="city"
            fields={["city"]}
            title="City"
          />
          <FormTSelectTemplate
            allOptions={(() => {
              const qualifications = data?.data.data.map((item) => {
                return item.value;
              });
              return qualifications || null;
            })()}
            fieldName="qualifications"
            activeState={activeState}
            setActiveState={setActiveState}
            selectedFields={selectedFields}
            setSelectedFields={setSelectedFields}
            title="Qualifications"
          />
          <BpoInput
            fieldName="bpoAccountAndExperience"
            mainTitle="BPO Account & Experience"
            activeState={activeState}
            setActiveState={setActiveState}
            selectedFields={selectedFields}
            setSelectedFields={setSelectedFields}
            firstTitle="Bpo Account"
            secondTitle="Bpo Experience"
            onTextChange={setTextChange}
            placeholder="Enter Account"
            addButton
          />
          <FormTemplateField
            activeState={activeState}
            setActiveState={setActiveState}
            fieldName="course"
            fields={["Course of Study"]}
            title="Course Of Study"
          />
          <ResumeField
            activeState={activeState}
            setActiveState={setActiveState}
            requiredCheck={resumeRequired}
            setRequiredCheck={setResumeRequired}
          />
          <FormTemplateField
            activeState={activeState}
            setActiveState={setActiveState}
            fieldName="expectedSalary"
            fields={["expectedSalary"]}
            title="Expected Salary"
          />
          <OtterQuestions
            otterFields={otterFields}
            setOtterFields={setOtterFields}
            activeState={activeState}
            setActiveState={setActiveState}
          />
          <LocationInput
            fieldName="currentLocation"
            activeState={activeState}
            setActiveState={setActiveState}
            firstTitle="Company"
            secondTitle="Location"
            selectedFields={selectedFields}
            setSelectedFields={setSelectedFields}
            formLocation={formLocations}
            setLocation={setFormLocation}
            mainTitle="Select Company  & Location"
          />
          <Button onClick={handleCreate} className="px-8 ml-auto block mt-10">
            Create Form
          </Button>
        </div>
      </div>
    </Layout>
  );
}
