import EducationForm from '@/components/education/EducationForm';
import FullLoader from '@/components/global/FullLoader';
import Layout from '@/components/global/layout/Layout'
import { useGetRequest } from '@/hooks/useGetRequests';
import { ISingleEducationResponse } from '@/interfaces/experience-interface';
import { useParams } from 'react-router-dom';

export default function EditEducatiion() {

    const {id} = useParams()
    const {isLoading,data} = useGetRequest<ISingleEducationResponse>({
        queryKey:[`education-${id}`],
        url:"/admin/retrieve/single/education",
        detailId:id}
    )

    const educationData = data?.data.data || null
    return (
    <Layout title='Country' content='Add Countries'>
        <div className="card">
            <div className="mt-3 py-2 border-b">
                <span className='font-bold text-lg'>Edit Education</span>
            </div>   
            {educationData ?
                <EducationForm
                    defaultValues={{
                        valueNumber:Number(educationData.value),
                        name:educationData.name
                    }}
                    educationid={id}  
                />
                :null
            }

        </div>
        <FullLoader isLoading={isLoading}/>
    </Layout>
  )
}
