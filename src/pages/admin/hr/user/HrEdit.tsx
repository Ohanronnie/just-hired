import FullLoader from '@/components/global/FullLoader';
import Layout from '@/components/global/layout/Layout'
import HrForm from '@/components/hr/HrForm';
import { useGetRequest } from '@/hooks/useGetRequests';
import { ISingleAdminRes } from '@/interfaces/hr-intrerface';
import { useParams } from 'react-router-dom';



export default function HrEdit() {

  const {id} = useParams()
  const {data,isLoading} = useGetRequest<ISingleAdminRes>({queryKey:["admin-detail",id],url:"/admin/retrieve/single/admin",detailId:id})
  const userData = data ? data.data.data : null

  return (
    <Layout title='Human Resources' content='Hello Helen, Welcome to JustRecruit'>
      <div className="card">
          <div className="mt-3 py-2 border-b">
              <span className='font-bold text-lg'>Edit User</span>
          </div>
          {userData ?
            <HrForm defaultValues={{
              firstName:userData.basic_info.firstname,
              lastName:userData.basic_info.lastname,
              middleName:userData.basic_info.middlename,
              phoneNumber:userData.basic_info.phone,
              dateOfBirth:(new Date(userData.basic_info.dob)),
              gender:userData.basic_info.gender,
              maritalStatus:userData.basic_info.maritalstatus,
              emailAddress:userData.basic_info.email,
              city:userData.address_details.city,
              state:userData.address_details.state,
              nationality:userData.address_details.nationality,
              detailAddress:userData.address_details.address,
              role:userData.administrative.role,
              teamLeader:userData.recruiter.teamleader,
              status:userData.administrative.status
            }} 
            staffId={userData._id}
              />  
          :null}
          <FullLoader isLoading={isLoading}/>
      </div>
    </Layout>
  )
}
