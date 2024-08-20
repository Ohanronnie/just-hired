import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { dashBoardRecentActicity, dashbarMessage, profileDashboardLinks,  } from "@/static/sideBarStatic";
import { Link } from "react-router-dom";

export default function ProfileSection() {
  return (
    <div className="">
        <div className="flex-center padding-x pt-4 mb-4 justify-between">
            {profileDashboardLinks.map((item,key)=>(
                <Link to={item.link} key={key} className="h-10 w-10 p-2 grid place-content-center rounded-full bg-gray-100">
                    <item.icon/>
                </Link>
            ))}
        </div>
        <Avatar className="h-36 w-32 mt-6 mx-auto">
            <AvatarFallback>PR</AvatarFallback>
            <AvatarImage src="/avatar/Ellipse3.png" className="object-contain"/>
        </Avatar>
        <h3 className="my-1 font-semibold text-center text-2xl sm:text-3xl">Badmus Blessing</h3>
        <h3 className="text-center text-sm">Super Admin</h3>
        <h3 className="mt-5 text-xl text-shade font-medium padding-x">Message</h3>
        <ul className="mt-3 mb-4">
            {dashbarMessage.map((item,key)=>(
                <div className="padding-x flex-center rounded-md mb-2 bg-[#FAFBFD] py-3" key={key}>
                    <Avatar className="h-10 w-10">
                        <AvatarFallback>PR</AvatarFallback>
                        <AvatarImage src={item.src}/>
                    </Avatar>
                    <div className="grow pl-1 flex flex-col">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-sm">{item.message}</span>
                    </div>
                </div>
            ))}
        </ul>
        <h3 className="my-4 padding-x text-xl text-shade font-medium padding-x">Recent Activity</h3>
        <ul className="mt-3">
            {dashBoardRecentActicity.map((item,key)=>(
                <div key={key} className="padding-x rounded-md mb-2 bg-[#FAFBFD] py-3">
                    <span>{item}</span>
                </div>
            ))}
        </ul>
    </div>
  )
}
