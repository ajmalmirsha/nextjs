import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectorProps = {
  className?: string;
  placeholder?: string;
  items?: {
    label: string;
    value: string;
  }[];
};

const Selector = ({ className, placeholder, items = [] }: SelectorProps) => {
  return (
    <Select disabled={!items.length}>
      <SelectTrigger className={`${className} w-[180px]`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item, index) => (
          <SelectItem key={`${placeholder}-${index}`} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Selector;
