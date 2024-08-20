import Layout from '@/components/global/layout/Layout';

import PaymentFilter from '@/components/dashboard/payment/PaymentFilter';
import DashboardCards from '@/components/dashboard/DashboardCards';
import { dashBoardTopPerformer, dashboardSubCards, paymentOverview, paymentOverview2 } from '@/static/dashBoardStatic';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import DashboardCompanies from '@/components/dashboard/DashboardCompanies';

export default function PaymentDashBoard() {
  return (
   <Layout title='Dashboard' content='Payment Dashboard'>
       <PaymentFilter/> 
       <div className="mt-3 flex flex-wrap mb-2">
            {paymentOverview.map((item,key)=>(
                  <DashboardCards isSlim className={`md:w-4/12 ${key===2?"max-md:w-full max-md:mt-2":"max-md:w-6/12"}`} data={item} key={key}/>
            ))}
       </div>
       <div className="mt-3 flex max-md:flex-wrap">
            <div className="w-full flex flex-wrap md:flex-col md:w-4/12 md:mr-2">
            {paymentOverview2.map((item,key)=>(
                  <DashboardCards isSlim className={`md:w-full ${key===2?"max-md:w-full max-md:mt-2":"max-md:w-6/12"}`} data={item} key={key}/>
            ))}
            </div>
            <div className="grow card mt-3 pt-4 md:my-1">
                <div className="flex justify-between">
                    <h3 className="font-medium text-lg">Top Performance</h3>
                    <Button className='px-8 h-7' size={"sm"}>August</Button>
                </div>
                <div className="mt-4  px-2 flex max-md:flex-col max-sm:items-center">
                    {dashBoardTopPerformer.map((item,key)=>(
                        <div key={key} className='w-full px-2 pt-3 max-md:mb-5 max-md:max-w-[300px] max-md:mx-auto'>
                            <Avatar className='h-24 w-24 block mx-auto'>
                                <AvatarFallback>JH</AvatarFallback>
                                <AvatarImage src={item.avatar} />
                            </Avatar>
                            <h3 className="text-center font-semibold">{item.name}</h3>
                            <h3 className="flex-center h-7 justify-center">
                                <img className='h-4 w-[18px] shrink-0 mr-2' src={item.flag} alt={item.flag} />
                                <span>{item.country}</span>
                            </h3>
                            <img className='h-5 w-6 block mt-0.5 mx-auto' src={"/vector/cup.png"} alt="trophy" />
                        </div>
                    ))}
                </div>
            </div>
       </div>
       <div className="mt-6 flex flex-wrap">
        {dashboardSubCards.map((items,index)=>(
            <DashboardCompanies {...items} key={index}/>
        ))}
      </div>
   </Layout>
  )
}
