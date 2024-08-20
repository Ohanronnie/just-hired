import EducationForm from '@/components/education/EducationForm';
import FullLoader from '@/components/global/FullLoader';
import Layout from '@/components/global/layout/Layout'
import { useGetRequest } from '@/hooks/useGetRequests';
import { ISingleExpRes } from '@/interfaces/experience-interface';
import { useParams } from 'react-router-dom';

export default function EditExperience() {

    const {id} = useParams()

    const {data,isLoading} =useGetRequest<ISingleExpRes>({url:"/admin/retrieve/single/experience",queryKey:["single-experience",id],detailId:id})
    const response = data?.data.data 
    return (
    <Layout title='Country' content='Add Countries'>
        <div className="card">
            <div className="mt-3 py-2 border-b">
                <span className='font-bold text-lg'>Edit Experience</span>
            </div>   
            {response ?
                <EducationForm
                    defaultValues={{
                        valueNumber:Number(response.value),
                        name:response.name
                    }}
                    educationid={id}
                /> : null
            }
            <FullLoader isLoading={isLoading}/>

        </div>
  
    </Layout>
  )
}
