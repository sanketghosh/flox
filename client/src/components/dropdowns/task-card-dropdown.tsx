import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisIcon, TrashIcon } from "lucide-react";
import TaskEdit from "../dialogs/task-edit";
import DropdownWrapper from "./dropdown-wrapper";

export default function TaskCardDropdown() {
  return (
    <DropdownWrapper menuBtn={<EllipsisIcon size={18} />}>
      <MenuItem>
        <TaskEdit />
      </MenuItem>
      <MenuItem>
        <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-red-600 hover:bg-red-100/60">
          <TrashIcon size={17} />
          Delete Task
        </button>
      </MenuItem>
    </DropdownWrapper>
  );
}
