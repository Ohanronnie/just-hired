import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SvgIcons } from "@/icons/SvgIconts";
import { AlignRight, Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import ProfileSection from "./ProfileSection";

export default function Header({title,content}:{title:string,content:string}) {
  return (
    <header className="sticky bg-white flex-center justify-between padding-x py-1 z-40 w-full top-0 left-0 shadow-sm">
        <div className="flex-center">
            <Sheet>
              <SheetTrigger className="lg:hidden mr-2">
                <Menu className="text-lg text-shade"/>
              </SheetTrigger>
              <SheetContent side="left" className="lg:hidden overflow-scroll default-scroll w-full max-w-[320px]">
                <Sidebar/>
              </SheetContent>
            </Sheet>
            <h3 className="flex-col flex">
              <span className="text-lg inline-block ">{title}</span>
              <span className="text-shade opacity-70">{content}</span>
            </h3>
        </div>
        <div className="flex-center max-md:hidden grow  justify-end">
            <Input className=" rounded-r-none w-full max-w-[300px] md:max-w-[360px]"/>
            <Button className="rounded-l-none" size={"icon"}>
                <SvgIcons.search className="scale-[75%]"/>
            </Button>
        </div>
        <Sheet>
          <SheetTrigger className="xl:hidden sm:ml-4 md:ml-6">
            <AlignRight className="text-lg sm:text-2xl text-shade"/>
          </SheetTrigger>
          <SheetContent className="xl:hidden overflow-scroll default-scroll w-full max-w-[320px]">
            <ProfileSection/>
          </SheetContent>
        </Sheet>
    </header>
  )
}
