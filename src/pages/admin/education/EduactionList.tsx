import { useRef, useState } from 'react'
import Layout from '@/components/global/layout/Layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SvgIcons } from '@/icons/SvgIconts'
import { Link } from 'react-router-dom'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import DropDownItem from '@/components/global/DropDownItem'
import { useGetRequest } from '@/hooks/useGetRequests'
import { IEducationListResponse } from '@/interfaces/experience-interface'
import FullLoader from '@/components/global/FullLoader'
import { usePostRequest } from '@/hooks/usePostRequests'
import useRoles from '@/hooks/useRoles'
import Loader from '@/components/global/Loader'
import { useQueryClient } from '@tanstack/react-query'


export default function EducationList() {
  const [activeEducation,setActiveEducation] = useState<string[]>([])

  const handleClick=(countryName:string)=>{
    if(activeEducation.includes(countryName)){
      const filteredList = activeEducation.filter((item)=>item !== countryName)
      setActiveEducation(filteredList)
    }
    else{setActiveEducation((item)=>[...item,countryName])}
  }

  const {data,isLoading} = useGetRequest<IEducationListResponse>({queryKey:["all-education"],url:"/admin/retrieve/education"})

  const {isSuperAdmin} = useRoles()
  const queryClient = useQueryClient()

  const closeRef = useRef<HTMLButtonElement>(null)

  const {isPending,mutate} = usePostRequest<void,{educationid:string}>({
    url:"/admin/delete/education",
    showSuccess:"Education has been successfully deleted",
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:["all-education"],refetchType:"all"})
      closeRef.current?.click()
    }
  })

  const educationList = data?.data.data
  return (
    <Layout title='Country' content="Hello Hellen , Welcome to pronext">
      {educationList?
      <div className="card">
        <div className='flex justify-between max-sm:flex-col mt-3 pb-2 border-b'>
          <span className='font-bold text-lg'>View Education</span>
          <div className="flex-center grow rounded-md bg-gray-100 max-sm:mt-3 sm:max-w-[380px]">
            <SvgIcons.BlueSearch className="scale-[75%] shrink-0 relative left-2"/>
            <Input placeholder='Search' className=" rounded-r-none border-none focus-visible:border-none focus:border-none w-full bg-transparent md:max-w-[400px]"/>
          </div>
        </div>
        <div className="pt-4">
          <h3 className="font-semibold text-base pl-2">Education Listed</h3>
          {educationList.map((item,key)=>{
            const isActive = activeEducation.includes(item._id)
            return(
              <div  key={key} className={`pb-3 transition-all duration-300 overflow-hidden border shadow-md border-main mb-4 rounded-2xl px-2 sm:px-3 
                ${isActive?"max-h-96 overflow-scroll default-scroll":"max-h-10"}`}>
                <div className="flex-center justify-between">
                    <span>{item.name}</span>
                  <Button 
                  onClick={()=>{handleClick(item._id)}}
                  className={`transition-all hover:bg-transparent group duration-200 ${isActive?"-rotate-[90deg]":""}`} variant={"ghost"} size={"icon"}>
                    <SvgIcons.BlueDropDown
                    className='group-hover:scale-[130%] transition-all duration-300'
                      />
                  </Button>
                </div>
                <div className='flex-center flex-wrap'>
                    <DropDownItem  title='Name' content={item.name}/>
                    <DropDownItem  title='Value Number' content={item.value.toString()}/>
                    <DropDownItem  title='Created By' content={`${item.createdBy?.basic_info?.firstname} ${item.createdBy?.basic_info?.lastname}`}/>
                    <DropDownItem  isDate title='Created On' content={item.createdAt}/>
                    <DropDownItem  title='Edited By' content={item.editedBy?`${item.editedBy?.basic_info?.firstname} ${item.editedBy?.basic_info?.lastname}`:"- - - - -"}/>
                    <DropDownItem isDate  title='Edited On' content={item.createdAt}/>
                  </div>
                <div className="mt-5 flex-center justify-between w-full max-w-[200px]">
                  <Link to={`/admin/education/edit/${item._id}`}>
                      <Button className='shadow-sm px-12 mr-4 rounded-lg'>Edit</Button>
                  </Link>
                  {
                  isSuperAdmin ?
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
                          <AlertDialogCancel ref={closeRef} asChild className='overflow-hidden'>
                            <Button className='px-12 sm:mr-6 bg-main hover:bg-main hover:text-white hover:brightness-110 rounded-3xl'>No</Button>
                          </AlertDialogCancel>
                          <AlertDialogAction disabled={isPending} onClick={(e)=>{
                            e.preventDefault()
                            mutate({educationid:item._id})
                          }} asChild>
                            <Button className='px-12 rounded-3xl hover:bg-accent text-main bg-white border' variant={"outline"}>
                              {isPending?
                                <Loader className='border-main border-b-transparent'/>
                                :"Yes"}
                            </Button>
                          </AlertDialogAction>
                        </div>
                      </AlertDialogContent>
                  </AlertDialog>
                  :null
                  }

                </div>
            </div>)
        })}
        </div>
      </div> 
      :null
      }
      <FullLoader isLoading={isLoading}/>
    </Layout>
  )
}
