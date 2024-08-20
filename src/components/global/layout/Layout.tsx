import { cn } from "@/lib/utils";
import Header from "./Header";
import ProfileSection from "./ProfileSection";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


interface ILayout{
    children:React.ReactNode
    className?:string
    title:string
    content:string
}
export default function Layout({children,className,title,content}:ILayout) {

    const navigate = useNavigate()
    const [{authCookie}] = useCookies(["authCookie"])
    useEffect(()=>{
        if(authCookie){ 
        }else{
            navigate("/login")
        }
    },[authCookie])
  return (
    <>
    {authCookie ?
        <div className="min-h-screen flex max-w-[1600px] mx-auto">
        <div className="min-h-full relative shrink-0 hidden lg:block lg:w-[270px]">
            <div className="sticky h-screen overflow-scroll default-scroll w-full shadow-sm border-r top-0 left-0">
                <Sidebar/>
            </div>
        </div>
        <div className="min-h-[120vh] relative grow" >
            <Header title={title} content={content}/>
            <div className={cn("bg-[#F5F6FA] pb-8 pt-2 min-h-screen padding-x",className)}>
                {children}
            </div>
        </div>
        <div className="min-h-full hidden xl:block relative shrink-0 xl:w-[270px]">
            <div className="sticky border-l h-screen overflow-scroll default-scroll w-full shadow-sm border-r top-0 left-0">
                <ProfileSection/>
            </div>
        </div>
    </div>
        :null
    }
    </>


  )
}
