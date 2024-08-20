import DropDownItem from '@/components/global/DropDownItem'
import FullLoader from '@/components/global/FullLoader'
import Layout from '@/components/global/layout/Layout'
import FormFilter from '@/components/hr/FormFilter'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useGetRequest } from '@/hooks/useGetRequests'
import { SvgIcons } from '@/icons/SvgIconts'
import { IAllAdminRes } from '@/interfaces/hr-intrerface'
import { camelCaseToSpaces } from '@/lib/utils'
import { useFormFilter } from '@/store/useFormFilter'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function HrList() {
  const [activeCountry,setActiveCountry] = useState<string[]>([])

  const {role:adminRole} = useFormFilter()  

  const handleClick=(countryName:string)=>{
    if(activeCountry.includes(countryName)){
      const filteredList = activeCountry.filter((item)=>item !== countryName)
      setActiveCountry(filteredList)
    }
    else{setActiveCountry((item)=>[...item,countryName])}
  }

  const {data,isLoading} = useGetRequest<IAllAdminRes>({url:"/admin/retrieve/all/admins",queryKey:["all-admin",adminRole]})

  return (
    <Layout title='Human Resources' content='Hello Helen, Welcome to JustRecruit'>
    <div className="card">
      <FormFilter/>
      <div className="pt-4">
          <h3 className="font-semibold text-base pl-2">User Listed</h3>
          {data?.data ? 
          data.data.data.map((item,key)=>{
            const isActive = activeCountry.includes(item._id)
            const fullName = `${item.basic_info.firstname} ${item.basic_info.lastname}`
            return(
              <div  key={key} className={`pb-3 transition-all duration-300 overflow-hidden border shadow-md border-main mb-4 rounded-2xl px-2 sm:px-3 
                ${isActive?"max-h-[680px] overflow-scroll default-scroll":"max-h-10"}`}>
                <div className="flex-center justify-between">
                  <div className=" sm:w-[40%] flex-center">
                      <Avatar className='w-8 rounded-full h-8 shrink-0 mr-2'>
                        <AvatarFallback>PR</AvatarFallback>
                        <AvatarImage src={item.basic_info.photo || "/avatar/empty.png"} alt="profile icon" />
                      </Avatar>
                     <span>{fullName}</span>
                  </div>
                  <div className="grow flex-center justify-end sm:justify-between">
                    <span className='font-light max-sm:hidden w-[30%] text-gray-700'>{camelCaseToSpaces(item.administrative.role)}</span>
                    <span className='max-sm:hidden font-light text-gray-700'>{camelCaseToSpaces(item.administrative.role)}</span>
                    <Button 
                      onClick={()=>{handleClick(item._id)}}
                      className={`transition-all hover:bg-transparent group duration-200 ${isActive?"-rotate-[90deg]":""}`} variant={"ghost"} size={"icon"}>
                      <SvgIcons.BlueDropDown
                    className='group-hover:scale-[130%] transition-all duration-300'
                      />
                  </Button>
                  </div>
                </div>
                <div className='flex-center flex-wrap'>
                    <DropDownItem  title='full Name' content={fullName}/>
                    <DropDownItem  title='Phone Number' content={item.basic_info.phone}/>
                    <DropDownItem  title='Date of Birth' isDate content={item.basic_info.dob}/>
                    <DropDownItem  title='Gender' content={item.basic_info.gender}/>
                    <DropDownItem  title='Email Address' content={item.basic_info.email}/>
                    <DropDownItem  title='Marital status' content={item.basic_info.maritalstatus}/>
                    <DropDownItem  title='Role' content={camelCaseToSpaces(item.administrative.role)}/>
                    <DropDownItem  title='Team Leader' content={item.recruiter.teamleader || '_______'}/>
                    <DropDownItem  title='Created By' content={"Pending"}/>
                    <DropDownItem  title='Created On' isDate  content={item.createdAt}/>
                    <DropDownItem  title='Edited By' content={"Pending"}/>
                    <DropDownItem  title='Edited On' isDate content={item.createdAt}/>
                    <DropDownItem  title='Nationality' content={item.address_details.nationality}/>
                    <DropDownItem  title='State' content={item.address_details.state}/>
                    <DropDownItem  title='City' content={item.address_details.city}/>
                    <DropDownItem  title='Status' content={item.administrative.status}/>
                  </div>
                  <div className="flex w-full max-md:flex-col max-md:items-center">
                    <div className="grow max-md:mb-3">
                      <h3 className="mt-2 font-light">Address</h3>
                      <p className="my-0.5">{item.address_details.address}</p>
                    </div>
                    <Avatar className='h-44 w-44 max-md:mx-auto'>
                      <AvatarFallback>JH</AvatarFallback>
                      <AvatarImage src={item.basic_info.photo || "/avatar/empty.png"}/>
                    </Avatar>
                  </div>
                  <div className="mt-5 max-md:justify-center grow flex-center max-sm:mx-auto md:justify-between w-full md:max-w-[200px] max-md:grow">
                  <Link to={`/admin/hr/edit/${item._id}`}>
                      <Button className='shadow-sm px-12 mr-4 rounded-lg'>Edit</Button>
                  </Link>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant={"outline"} className='shadow-sm px-10 rounded-lg'>Delete</Button>
                    </AlertDialogTrigger>   
                    <AlertDialogContent className='border border-main py-10 px-3 sm:px-8'>
                      <p className="text-lg font-semibold">
                          The details will be permanently deleted from the database.
                          <br/>
                          Are you sure you want to delete? 
                      </p>
                      <div className="flex mt-8 max-sm:justify-between sm:justify-end ">
                        <AlertDialogCancel asChild className='overflow-hidden'>
                          <Button className='px-12 sm:mr-6 bg-main hover:bg-main hover:text-white hover:brightness-110 rounded-3xl'>No</Button>
                        </AlertDialogCancel>
                        <AlertDialogAction asChild>
                          <Button className='px-12 rounded-3xl hover:bg-accent text-main bg-white border' variant={"outline"}>Yes</Button>
                        </AlertDialogAction>
                      </div>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
            </div>)
        }):null}
        <FullLoader isLoading={isLoading}/>
        </div>
    </div>
  </Layout>
  )
}
