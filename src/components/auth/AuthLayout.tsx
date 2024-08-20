import { cn } from "@/lib/utils";
import Logo from "../global/Logo";

interface IAuthLayout {
  image: string;
  children: React.ReactNode;
  title: string;
  tiltleHeading: string;
  align: "center" | "bottom";
  style?: string;
}

export default function AuthLayout({
  image,
  children,
  tiltleHeading,
  title,
  align,
  style,
}: IAuthLayout) {
  return (
    <div className="h-screen  max-md:pt-3 flex  max-w-[1600px] mx-auto">
      <div className="w-full flex flex-col h-full padding-x rounded-md bg-white  justify-center md:w-7/12 lg:w-6/12">
        <div className="w-full max-w-[420px] mx-auto">
          <h3 className="font-semibold  text-2xl md:text-3xl">{title}</h3>
          <h3 className="mt-3 mb-4">{tiltleHeading}</h3>
          <div className="min-h-[200px]">{children}</div>
        </div>

        <Logo className="block mx-auto mt-12 " />
      </div>
      <div
        className={`hidden md:flex padding-x justify-center ${align === "center" ? "items-center" : "items-end"} place-items-center bg-[#D9D9D9] md:w-5/12 lg:w-6/12`}
      >
        <div
          className={cn("w-full shrink-0 max-w-[430px] aspect-[3/2]", style)}
        >
          <img
            src={image}
            alt="image"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
