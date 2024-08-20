import Layout from '@/components/global/layout/Layout'
import GroupForm from '@/components/hr/group/GroupForm';
import { mockGroupList } from '@/static/hr-static';


export default function HrEdit() {

  return (
    <Layout title='Human Resources' content='Hello Helen, Welcome to JustRecruit'>
      <div className="card">
          <div className="mt-3 py-2 border-b">
              <span className='font-bold text-lg'>Edit Group</span>
          </div>   
          <GroupForm
            defaultValues={mockGroupList[0]}
          />
      </div>
    </Layout>
  )
}