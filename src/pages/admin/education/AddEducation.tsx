
import EducationForm from '@/components/education/EducationForm'
import Layout from '@/components/global/layout/Layout'

export default function AddEducation() {

    return (
    <Layout title='Education' content='Hello Helen, Welcome to Pronext'>
        <div className="card">
            <div className="mt-3 py-2 border-b">
                <span className='font-bold text-lg'>Add Education</span>
            </div>   
            <EducationForm/>
        </div>
    </Layout>
  )
}
