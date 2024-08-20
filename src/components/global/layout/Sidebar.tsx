import { sideBarContent, sideBarUtil } from "@/static/sideBarStatic";
import Logo from "../Logo";
import { useSidebar } from "@/store/useSidebar";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { SvgIcons } from "@/icons/SvgIconts";
import menuIcons from "@/icons/MenuIcons"
import { matchPath } from "@/lib/utils";


export default function Sidebar() {
    const {pathname} = useLocation()
    const {openedMenu,editOpenedmenu} = useSidebar()
    
  return (
    <div className="pt-6 padding-x">
        <Logo className="mx-auto md:text-3xl"/>
        <div className="mt-6">
            <h3 className="text-shade font-semibold  text-2xl sm:text-[26px] pl-3">Menu</h3>
            <Button size="lg" variant={pathname.startsWith("/dashboard")?"default":"ghost"} className={`flex-center justify-start mb-4 px-3 m rounded-2xl w-full`}>
                {pathname.startsWith("/dashboard")?<menuIcons.DashboardMain className="text-2xl mr-2"/>:null}
                 <span className={`${pathname.startsWith("/dashboard")?"text-white":"text-shade"} font-semibold text-xl`}>Dashboard</span>
            </Button>
            <div className="mb-6">
                <Link className="flex-center hover:underline underline-offset-2 decoration-main w-full mb-4 block pl-3" to={"/dashboard"}>
                    <div className="pl-6 flex-center">
                        {pathname === "/dashboard" ?<SvgIcons.rightArrow className="ml-4 mr-2"/>:null}
                        <menuIcons.DashboardChild className="mr-1"/>
                        <span>Main Dashboard</span>
                    </div>
                </Link>
                <Link className="flex-center hover:underline underline-offset-2 decoration-main w-full mb-4 block pl-3" to={"/dashboard/payment"}>
                    <div className="pl-2 flex-center">
                        {pathname === "/dashboard/payment" ?<SvgIcons.rightArrow className="ml-4 mr-2"/>:null}
                        <menuIcons.paymentmethod className="mr-1"/>
                        <span>Payment Dashboard</span>
                    </div>
                </Link>
            </div>
            {sideBarContent.map((section,key)=>{
                const isSubActive = pathname.startsWith(section.baseUrl)
                return(<div className={"mb-4"} key={`${key}`}>
                    <Button size="lg" variant={isSubActive?"default":"ghost"} className={`flex-center justify-start mb-3 px-3  rounded-2xl w-full`}>
                        {pathname.startsWith(section.baseUrl)?<section.sectionIcon className="text-2xl mr-2"/>:null}
                        <span className={`${isSubActive?"text-white":"text-shade"} font-semibold text-xl`}>{section.section}</span>
                    </Button>
                    <div className="mt-2 mb-3 pl-2 transition-all duration-300">
                        {section.sectionItem.map((subItem,key)=>(
                            <div style={{height:!(openedMenu === subItem.title)?40:40+(35*subItem.subMenu.length)}} key={`${key}`} className={`mb-4 transition-all duration-300 h-fit overflow-hidden `}>
                                <Button onClick={()=>{editOpenedmenu(subItem.title)}} variant={"ghost"} className="flex-center w-full justify-start mb-2 pl-3" >
                                    <subItem.titleIcon className="text-2xl"/>
                                    <div className="flex-center grow justify-between">
                                        <span className="font-semibold ml-1">{subItem.title}</span>
                                        <SvgIcons.ChevronSvg 
                                            className={`scale-150 fill-main transition-all duration-300 ${(openedMenu === subItem.title)?"rotate-180":""}`}
                                        />
                                    </div>
                                </Button>
                                {subItem.subMenu.map((navLink,key)=>{
                                    const isInnerActive = matchPath({pathname,pattern:navLink.link})
                                    return(
                                        <Link key={key} className="flex-center hover:underline underline-offset-2 decoration-main w-full mb-3 pl-6" to={navLink.link}>
                                            <div className="pl-6 flex-center">
                                            {isInnerActive?<SvgIcons.rightArrow className="mr-2"/>:null}
                                            <span >{navLink.text}</span>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        ))}
                    </div>   

                </div>)
            })}
        </div>
        <span className={`text-shade font-semibold text-xl`}>PERSONAL ACCOUNT</span>
        <div className="pl-4 py-4">
        {
            sideBarUtil.map((item,key)=>(
                <Link key={key} className="flex-center py-2 mb-3 " to={item.link}>
                    {item.link.startsWith(pathname)?
                        <SvgIcons.rightArrow className="ml-4 mr-2"/>
                    :null}
                    <item.icon className="text-2xl mr-1"/>
                    <span>{item.title}</span>
                </Link>
            ))
        }
        </div>
    </div>
  )
}
