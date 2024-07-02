import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisIcon, TrashIcon } from "lucide-react";
import TaskEdit from "../dialogs/task-edit";

export default function TaskCardDropdown() {
  return (
    <Menu>
      <MenuButton className="absolute right-3 top-2">
        <EllipsisIcon size={22} />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="mt-1 rounded-lg border bg-white p-1.5 text-sm font-medium shadow-md"
      >
        <MenuItem>
          <TaskEdit />
        </MenuItem>
        <MenuItem>
          <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-red-600 hover:bg-red-100/60">
            <TrashIcon size={17} />
            Delete Task
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
