import Layout from '@/components/global/layout/Layout'
import HrForm from '@/components/hr/HrForm';



export default function HrAdd() {

  return (
    <Layout title='Human Resources' content='Hello Helen, Welcome to JustRecruit'>
      <div className="card">
          <div className="mt-3 py-2 border-b">
              <span className='font-bold text-lg'>Add User</span>
          </div>   
          <HrForm/>
      </div>
    </Layout>
  )
}
