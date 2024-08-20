import { useState } from 'react'
import Layout from '@/components/global/layout/Layout'
import { Button } from '@/components/ui/button'
import { SvgIcons } from '@/icons/SvgIconts'
import { Link } from 'react-router-dom'
import { AlertDialog, AlertDialogAction, AlertDialogCancel,   
      AlertDialogContent, AlertDialogTrigger
 } from '@/components/ui/alert-dialog'
import DropDownItem from '@/components/global/DropDownItem'
import PageInput from '@/components/global/PageInput'
import { mockGroupList } from '@/static/hr-static'

export default function GroupList() {
  const [activeCountry,setActiveCountry] = useState<string[]>([])

  const handleClick=(countryName:string)=>{
    if(activeCountry.includes(countryName)){
      const filteredList = activeCountry.filter((item)=>item !== countryName)
      setActiveCountry(filteredList)
    }
    else{setActiveCountry((item)=>[...item,countryName])}
  }

  return (
    <Layout title='Experience' content="Hello Helen, Welcome to pronext">
      <div className="card">
        <div className='flex justify-between max-sm:flex-col mt-3 pb-2 border-b'>
          <span className='font-bold text-lg'></span>
          <PageInput/>
        </div>
        <div>
            <h3 className="font-semibold text-base pl-2">Experience Listed</h3>
            {mockGroupList.map((item,key)=>{
            const isActive = activeCountry.includes(item.groupName)
            return(
              <div  key={key} className={`pb-3 transition-all duration-300 overflow-hidden border shadow-md border-main mb-4 rounded-2xl px-2 sm:px-3 
                ${isActive?"max-h-[500px] overflow-scroll default-scroll":"max-h-10"}`}>
                <div className="flex-center justify-between">
                    <span>{item.groupName}</span>
                    <span className="font-light text-gray-500">{item.groupName}</span>
                  <Button 
                  onClick={()=>{handleClick(item.groupName)}}
                  className={`transition-all hover:bg-transparent group duration-200 ${isActive?"-rotate-[90deg]":""}`} variant={"ghost"} size={"icon"}>
                    <SvgIcons.BlueDropDown
                    className='group-hover:scale-[130%] transition-all duration-300'
                      />
                  </Button>
                </div>
                <div className='flex-center flex-wrap'>
                    <DropDownItem  title='Group Name' content={item.groupName}/>
                    <DropDownItem  title='Team Leader' content={item.teamLeader}/>
                    <DropDownItem  title='Created By' content={item.editedBy}/>
                    <DropDownItem  title='Created On' content={item.createdAt}/>
                    <DropDownItem  title='Edited By' content={item.editedBy}/>
                    <DropDownItem  title='Edited On' content={item.createdAt}/>
                </div>
                <div className="w-full mt-10 flex flex-center flex-wrap">
                  {item.teamMembers.map((member,index)=>(
                    <h3 className='w-6/12 sm:w-3/12 mb-3' key={index}>
                      <span className='font-medium'>{member}</span>
                    </h3>
                  ))}
                </div>
                <div className="mt-8 max-md:flex-wrap justify-between w-full">
                  <Link to={"/admin/hr/group/edit/123"}>
                      <Button variant={"outline"} className='shadow-md mb-4 px-12 h-9 mr-4 rounded-full'>Edit</Button>
                  </Link>
                  <Link to={"/admin/hr/group/payment/123"}>
                    <Button variant={"outline"} className='shadow-md mb-4 rounded-full px-8 h-9 mr-4'>View Payment</Button>
                  </Link>
                  <Link to={"/admin/hr/group/payment/123"}>
                    <Button className='shadow-md px-4 sm:px-8 h-9 mb-4 rounded-full mr-4 '>View Performance</Button>
                  </Link>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant={"outline"} className='shadow-sm rounded-full px-10 h-9'>Delete</Button>
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
                          <Button className='px-12 rounded-3xl hover:bg-accent rounded-ull text-main bg-white border' variant={"outline"}>Yes</Button>
                        </AlertDialogAction>
                      </div>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
            </div>)
        })}
        </div>
      </div> 
    </Layout>
  )
}
