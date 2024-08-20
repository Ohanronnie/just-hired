import CountryForm from '@/components/country/CountryForm';
import FullLoader from '@/components/global/FullLoader';
import Layout from '@/components/global/layout/Layout'
import { useGetRequest } from '@/hooks/useGetRequests';
import { ISingleCountryRes } from '@/interfaces/countryinterface';
import { useParams } from 'react-router-dom';



export default function CountryEdit() {

    const {id} = useParams()

    const {data,isLoading} = useGetRequest<ISingleCountryRes>({url:"/admin/retrieve/single/country",queryKey:[`country-${id}`],detailId:id})

    const countryData = data ? data.data.data : null

    return (
    <Layout title='Country' content='Add Countries'>
        <div className="card">
            <div className="mt-3 py-2 border-b">
                <span className='font-bold text-lg'>Edit Country</span>
            </div>   
            {countryData
                ?
                <CountryForm
                    defaultValues={{
                        countryName:countryData.name,
                        continent: countryData.continent,
                        flag: countryData.flag,
                        additionalNote:countryData.note
                    }}
                    countryId={id}
                />
            :
            null
        }
        </div>
        <FullLoader isLoading={isLoading}/>
  
    </Layout>
  )
}
