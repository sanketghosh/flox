/* packages */
import { EllipsisVerticalIcon, TrashIcon } from "lucide-react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

/*  */
import EditColumn from "../dialogs/edit-column";
import AddNewTask from "../dialogs/add-new-task";

export default function ColumnDropdownMenu() {
  return (
    <Menu>
      <MenuButton className="z-10 rounded-md border bg-gray-50 p-1 transition-all hover:bg-white">
        <EllipsisVerticalIcon size={18} />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="mt-3 rounded-lg border bg-white p-1.5 text-sm font-medium shadow-md"
      >
        <MenuItem>
          <AddNewTask />
        </MenuItem>
        <MenuItem>
          <EditColumn />
        </MenuItem>
        <MenuItem>
          <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-red-600 hover:bg-red-100/60">
            <TrashIcon size={17} />
            Delete Column
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
