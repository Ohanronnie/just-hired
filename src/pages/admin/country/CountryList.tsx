import { useRef, useState } from 'react'
import Layout from '@/components/global/layout/Layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SvgIcons } from '@/icons/SvgIconts'
import { Link } from 'react-router-dom'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import DropDownItem from '@/components/global/DropDownItem'
import { useGetRequest } from '@/hooks/useGetRequests'
import { ICountryRes } from '@/interfaces/countryinterface'
import FullLoader from '@/components/global/FullLoader'
import useRoles from '@/hooks/useRoles'
import { usePostRequest } from '@/hooks/usePostRequests'
import Loader from '@/components/global/Loader'
import { useQueryClient } from '@tanstack/react-query'

export default function CountryList() {
  const [activeCountry,setActiveCountry] = useState<string[]>([])

  const handleClick=(countryName:string)=>{
    if(activeCountry.includes(countryName)){
      const filteredList = activeCountry.filter((item)=>item !== countryName)
      setActiveCountry(filteredList)
    }
    else{setActiveCountry((item)=>[...item,countryName])}
  }

  const {isLoading,data} = useGetRequest<ICountryRes>({queryKey:['all-country'],url:'/admin/retrieve/country'})

  const closeRef = useRef<HTMLButtonElement>(null)
  const queryClient = useQueryClient()

  const {isPending,mutate} = usePostRequest<void,{countryid:string}>({
    url:"/admin/delete/country",
    showSuccess:"Country successfully deleted",
    onSuccess:()=>{
      closeRef.current?.click()
      queryClient.invalidateQueries({queryKey:["all-country"],refetchType:"all"})
    }
})

  const {isSuperAdmin} = useRoles()

  return (
    <Layout title='Country' content={"Country List"}>
      {
        data?
        <div className="card">
          <div className='flex justify-between max-sm:flex-col mt-3 pb-2 border-b'>
            <span className='font-bold text-lg'>View Country</span>
            <div className="flex-center grow rounded-md bg-gray-100 max-sm:mt-3 sm:max-w-[380px]">
              <SvgIcons.BlueSearch className="scale-[75%] shrink-0 relative left-2"/>
              <Input placeholder='Search' className=" rounded-r-none border-none focus-visible:border-none focus:border-none w-full bg-transparent md:max-w-[400px]"/>
            </div>
          </div>
          <div className="pt-4">
            <h3 className="font-semibold text-base pl-2">Country Listed</h3>
            {data.data.data.map((item,key)=>{
              const isActive = activeCountry.includes(item._id)
              return(
                <div  key={key} className={`pb-3 transition-all duration-300 overflow-hidden border shadow-md border-main mb-4 rounded-2xl px-2 sm:px-3 
                  ${isActive?"max-h-[580px] overflow-scroll default-scroll":"max-h-10"}`}>
                  <div className="flex-center justify-between">
                    <div className='flex-center'>
                      <img className='h-4 w-[18px] shrink-0 mr-2' src={item.flag} alt={item.flag} />
                      <span>{item.name}</span>
                    </div> 
                    <Button 
                    onClick={()=>{handleClick(item._id)}}
                    className={`transition-all hover:bg-transparent group duration-200 ${isActive?"-rotate-[90deg]":""}`} variant={"ghost"} size={"icon"}>
                      <SvgIcons.BlueDropDown
                      className='group-hover:scale-[130%] transition-all duration-300'
                        />
                    </Button>
                  </div>
                  <div className='flex-center flex-wrap'>
                      <DropDownItem  title='Country Name' content={item.name}/>
                      <DropDownItem  title='Continent' content={item.continent}/>
                      <DropDownItem  title='Country Flag' flagUrl={item.flag}/>
                      <DropDownItem isDate title='Created By' content={item.createdAt}/>
                      <DropDownItem  isDate={!!item.editedAt}  title='Edited On' content={item.editedAt || "------"}/>
                      <DropDownItem  title='Edited By' content={`${item.editedBy?.basic_info?.firstname} ${item.editedBy?.basic_info?.lastname}`}/>
                      <DropDownItem isDate  title='Created On' content={item.createdAt}/>
                    </div>
                    <h3 className="mt-2 font-light">Additional Note</h3>
                    <p className="my-0.5">{item.note}</p>
                  <div className="mt-5 flex-center justify-between w-full max-w-[200px]">
                    <Link to={`/admin/country/edit/${item._id}`}>
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
                              <AlertDialogCancel asChild className='overflow-hidden'>
                                <Button className='px-12 sm:mr-6 bg-main hover:bg-main hover:text-white hover:brightness-110 rounded-3xl'>No</Button>
                              </AlertDialogCancel>
                              <AlertDialogAction asChild
                                onClick={(e)=>{e.preventDefault()}}
                              >
                                <Button 
                                disabled={isPending}
                                onClick={()=>{mutate({countryid:item._id})}}
                                className={`${isPending && "px-14"} px-12 rounded-3xl hover:bg-accent text-main bg-white border`} variant={"outline"}>
                                  {isPending?
                                    <Loader className='border-main border-b-transparent'/>
                                  :"Yes"}
                                </Button>
                              </AlertDialogAction>
                            </div>
                          </AlertDialogContent>
                    </AlertDialog>
                    :
                    null
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
