import Layout from '@/components/global/layout/Layout'
import GroupForm from '@/components/hr/group/GroupForm';



export default function HrAdd() {

  return (
    <Layout title='Human Resources' content='Hello Helen, Welcome to JustRecruit'>
      <div className="card">
          <div className="mt-3 py-2 border-b">
              <span className='font-bold text-lg'>Add Group</span>
          </div>   
          <GroupForm/>
      </div>
    </Layout>
  )
}
