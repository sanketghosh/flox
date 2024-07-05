/* LOCALS */
import { cn } from "@/lib/utils";

/* COMPONENTS */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type DropdownWrapperProps = {
  children: React.ReactNode;
  menuBtn: React.ReactElement;
  dropdownTriggerClassNames?: string;
  dropdownContentClassNames?: string;
};

export default function DropdownWrapper({
  children,
  menuBtn,
  dropdownTriggerClassNames,
  dropdownContentClassNames,
}: DropdownWrapperProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn("", dropdownTriggerClassNames)}>
        {menuBtn}
      </DropdownMenuTrigger>
      <DropdownMenuContent className={cn("", dropdownContentClassNames)}>
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
