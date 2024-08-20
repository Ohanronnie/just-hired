import CountryForm from '@/components/country/CountryForm';
import Layout from '@/components/global/layout/Layout'

export default function AddCountry() {

    return (
    <Layout title='Country' content='Add Countries'>
        <div className="card">
            <div className="mt-3 py-2 border-b">
                <span className='font-bold text-lg'>Add Country</span>
            </div>   
            <CountryForm/>
        </div>
    </Layout>
  )
}
