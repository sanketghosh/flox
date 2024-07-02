/* packages */
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { EllipsisVerticalIcon, PenIcon, TrashIcon } from "lucide-react";

export default function ColumnDropdownMenu() {
  return (
    <Menu>
      <MenuButton className="rounded-md border bg-gray-50 p-1">
        <EllipsisVerticalIcon size={18} />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="ml-5 mt-3 w-36 rounded-lg border bg-white p-1 text-sm font-medium shadow-md md:ml-5"
      >
        <MenuItem>
          <button className="flex w-full items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100">
            <PenIcon size={17} />
            Edit
          </button>
        </MenuItem>
        <MenuItem>
          <button className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-red-600 hover:bg-gray-100">
            <TrashIcon size={17} />
            Delete
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
