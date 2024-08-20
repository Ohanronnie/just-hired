import { formatDate } from "@/static/date-services";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface IDropDownItem {
  title: string;
  content?: string;
  flagUrl?: string;
  isDate?: boolean;
}
const DropDownItem = ({
  title,
  content = "",
  flagUrl,
  isDate,
}: IDropDownItem) => {
  const value = isDate
    ? formatDate(new Date(content), {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
    : content;
  return (
    <div className="w-6/12 sm:w-4/12 md:w-3/12 mb-2">
      <h4 className="font-light text-gray-700">{title}</h4>
      {flagUrl ? (
        <Avatar
          className={`h-4 w-[18px] shrink-0 mr-2 ${flagUrl && "rounded-none"}`}
        >
          <AvatarFallback>Fl</AvatarFallback>
          <AvatarImage src={flagUrl} alt={flagUrl} />
        </Avatar>
      ) : (
        <h3 className="font-semibold overflow-hidden">{value}</h3>
      )}
    </div>
  );
};

export default DropDownItem;
