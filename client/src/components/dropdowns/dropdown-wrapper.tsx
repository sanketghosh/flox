import { Menu, MenuButton, MenuItems } from "@headlessui/react";

type DropdownWrapperProps = {
  children: React.ReactNode;
  menuBtn: React.ReactElement;
};

export default function DropdownWrapper({
  children,
  menuBtn,
}: DropdownWrapperProps) {
  return (
    <Menu>
      <MenuButton className="absolute right-3 top-2">{menuBtn}</MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="z-[2] mt-1 rounded-lg border bg-white p-1.5 text-sm font-medium shadow-md"
      >
        {children}
      </MenuItems>
    </Menu>
  );
}
