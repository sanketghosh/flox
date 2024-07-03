import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type DropdownWrapperProps = {
  children: React.ReactNode;
  menuBtn: React.ReactElement;
};

export default function DropdownWrapper({
  children,
  menuBtn,
}: DropdownWrapperProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{menuBtn}</DropdownMenuTrigger>
      <DropdownMenuContent>{children}</DropdownMenuContent>
    </DropdownMenu>
  );
}
