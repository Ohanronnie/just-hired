import { dashboardSubCards } from "@/static/dashBoardStatic";
import { SvgIcons } from "@/icons/SvgIconts";

type CompanyType = (typeof dashboardSubCards)[0];

export default function DashboardCompanies(items: CompanyType) {
  return (
    <div className="px-1 w-full mb-4 sm:w-6/12 lg:w-4/12">
      <div className="py-2 pb-4 card w-full">
        <h3 className="text-2xl mb-1 font-semibold">{items.title}</h3>
        <h3 className="text-main-light text-sm">{items.subTitle}</h3>
        <ul className="mt-3">
          {items.company.map((item, key) => (
            <li
              key={key}
              className="py-2 font-medium text-base text-shade border-b border-main w-full flex-center justify-between"
            >
              <span>{item.name}</span>
              <span className="flex-center">
                <span>{item.percentage}</span>
                {item.isPositive ? (
                  <SvgIcons.upLine className="scale-[75%] ml-1" />
                ) : (
                  <SvgIcons.downLine className="scale-[75%] " />
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
