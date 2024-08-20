import { Select, SelectTrigger, SelectContent, SelectItem } from "../ui/select";

export default function Home() {
  return (
    <div className="py-10 h-[120vh] px-10">
      <Select>
        <SelectTrigger className="w-[180px]">Try</SelectTrigger>
        <SelectContent>
          <SelectItem value="123">Hello</SelectItem>
          <SelectItem value="456">There</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
