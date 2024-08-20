import { useRef, useState } from 'react'
import Layout from '@/components/global/layout/Layout'
import { Button } from '@/components/ui/button'
import { SvgIcons } from '@/icons/SvgIconts'
import { Link } from 'react-router-dom'
import { AlertDialog, AlertDialogAction, AlertDialogCancel,   
      AlertDialogContent, AlertDialogTrigger
 } from '@/components/ui/alert-dialog'
import DropDownItem from '@/components/global/DropDownItem'
import PageInput from '@/components/global/PageInput'
import { useGetRequest } from '@/hooks/useGetRequests'
import FullLoader from '@/components/global/FullLoader'
import { IExpListRes } from '@/interfaces/experience-interface'
import useRoles from '@/hooks/useRoles'
import { usePostRequest } from '@/hooks/usePostRequests'
import { useQueryClient } from '@tanstack/react-query'
import Loader from '@/components/global/Loader'


export default function ExperienceList() {
  const [activeExperience,setActiveExperience] = useState<string[]>([])

  const handleClick=(countryName:string)=>{
    if(activeExperience.includes(countryName)){
      const filteredList = activeExperience.filter((item)=>item !== countryName)
      setActiveExperience(filteredList)
    }
    else{setActiveExperience((item)=>[...item,countryName])}
  }

  const queryClient = useQueryClient()

  const closeRef = useRef<HTMLButtonElement>(null)

  const {mutate,isPending} = usePostRequest<void,{experienceid:string}>({
    url:"admin/delete/experience",
    showSuccess:"Experience successfully deleted",
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:["all-experience"],refetchType:"all"})
      closeRef.current?.click()
    }
  })

  const {data,isLoading} = useGetRequest<IExpListRes>({queryKey:["all-experience"],url:"/admin/retrieve/experience"})
  const {isSuperAdmin} = useRoles()
  return (
    <Layout title='Experience' content="Hello Helen, Welcome to pronext">
      {data?
        <div className="card">
          <div className='flex justify-between max-sm:flex-col mt-3 pb-2 border-b'>
            <span className='font-bold text-lg'>View Experience</span>
            <PageInput/>
          </div>
          <div className="pt-4">
            <h3 className="font-semibold text-base pl-2">Experience Listed</h3>
            {data.data.data.map((exp,key)=>{
              const isActive = activeExperience.includes(exp._id)
              return(
                <div  key={key} className={`pb-3 transition-all duration-300 overflow-hidden border shadow-md border-main mb-4 rounded-2xl px-2 sm:px-3 
                  ${isActive?"max-h-96 overflow-scroll default-scroll":"max-h-10"}`}>
                  <div className="flex-center justify-between">
                      <span>{exp.value} Years</span>
                    <Button 
                    onClick={()=>{handleClick(exp._id)}}
                    className={`transition-all hover:bg-transparent group duration-200 ${isActive?"-rotate-[90deg]":""}`} variant={"ghost"} size={"icon"}>
                      <SvgIcons.BlueDropDown
                      className='group-hover:scale-[130%] transition-all duration-300'
                        />
                    </Button>
                  </div>
                  <div className='flex-center flex-wrap'>
                      <DropDownItem  title='Name' content={exp.name}/>
                      <DropDownItem  title='Value Number' content={exp.value}/>
                      <DropDownItem  title='Created By' content={`${exp.createdBy.basic_info.firstname} ${exp.createdBy.basic_info.lastname || ""}`}/>
                      <DropDownItem  isDate title='Created On' content={exp.createdAt}/>
                      <DropDownItem  title='Edited By' content={"Pending"}/>
                      <DropDownItem isDate title='Edited On' content={exp.createdAt}/>
                    </div>
                  <div className="mt-5 flex-center justify-between w-full max-w-[200px]">
                    <Link to={`/admin/experience/edit/${exp._id}`}>
                        <Button className='shadow-sm px-12 mr-4 rounded-lg'>Edit</Button>
                    </Link>
                    {
                      isSuperAdmin?
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
                            <AlertDialogAction onClick={(e)=>{e.preventDefault()}} asChild>
                              <Button onClick={()=>{mutate({experienceid:exp._id})}}
                               disabled={isPending} className={`${isPending && "px-14"} px-12 rounded-3xl hover:bg-accent text-main bg-white border`} variant={"outline"}>
                                {isPending?<Loader className='border-main border-b-transparent'/>:"Yes"}
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
