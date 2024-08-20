import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import InputField from '@/components/global/InputField';
import { Button } from '@/components/ui/button';
import { INewGroup } from '@/interfaces/hr-intrerface';
import { addNewGroupSchema } from '@/validations/hr-validation';
import SelectField from '@/components/global/SelectField';


export default function GroupForm({defaultValues}:{defaultValues?:INewGroup}) {

  const {register,setValue,handleSubmit,watch,formState: { errors }} = useForm<INewGroup>(
    { resolver: yupResolver(addNewGroupSchema),defaultValues },
  );
  const teamLeader = watch("teamLeader")

  const onSubmit: SubmitHandler<INewGroup> = (data) => {
    console.log(data)
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}  className="mt-3 max-w-[600px]">
        <div className='grow max-w-[600px]'>
            <InputField
                title='Group Name'
                required
                register={register}
                fieldName="groupName"
                placeholder='Enter the name of the certification'
                error={errors.groupName?.message}
            />
          <SelectField
            value={teamLeader}
            onSelect={(value)=>{setValue("teamLeader",value)}}
            labelText='Team Leader'
            error={errors.teamLeader?.message}
            required
            placeholder='Select Team Leader'
            options={[
              {value:"SuperAdmin",label:"SuperAdmin"},
              {value:"Admin",label:"Admin"},
              {value:"OfficeAssistant",label:"Office Assistant"},
              {value:"TeamLeader",label:"Team Leader"},
              {value:"Recruiter",label:"Recruiter"},
              {value:"FullTime",label:"Full Time"},
            ]}
            className='w-full sm:w-6/12 2xl:w-4/12 px-1 sm:px-2'
          />
        </div>
        <div className="w-full mt-8 flex justify-end">
            <Button size={"lg"} className='flex px-10'>
                <span>{defaultValues?"Edit":"Save"} Group</span>
            </Button>
        </div>
    </form>
  )
}
