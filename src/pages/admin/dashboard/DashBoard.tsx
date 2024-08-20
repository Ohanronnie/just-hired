import DashboardFilter from "@/components/dashboard/DashboardFilter";
import Layout from "@/components/global/layout/Layout";
import { dashboardSubCards, dashboarditle } from "@/static/dashBoardStatic";
import DashboardCards from "@/components/dashboard/DashboardCards";
import DashboardCompanies from "@/components/dashboard/DashboardCompanies";

export default function DashBoard() {
  return (
    <Layout className="px-0" title="Dashboard" content="MainDashboard">
      <DashboardFilter/>
      <div className="mt-3">
        {dashboarditle.map((item,index)=>(
          <div key={index} className={`flex flex-wrap padding-x ${index !== 2 ?"borer-b  border-main border-b-2":""} py-3`}>
              {item.map((overview,key)=>(
                <DashboardCards data={overview} key={key}/>
              ))}
          </div>
        ))}
      </div>
      <div className="mt-6 flex padding-x flex-wrap">
        {dashboardSubCards.map((items,index)=>(
            <DashboardCompanies {...items} key={index}/>
        ))}
      </div>
    </Layout>
  )
}
