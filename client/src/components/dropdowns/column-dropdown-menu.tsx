/* packages */
import { EllipsisVerticalIcon, TrashIcon } from "lucide-react";
import { MenuItem } from "@headlessui/react";

/*  */
import EditColumn from "../dialogs/edit-column";
import AddNewTask from "../dialogs/add-new-task";
import DropdownWrapper from "./dropdown-wrapper";

export default function ColumnDropdownMenu() {
  return (
    <DropdownWrapper menuBtn={<EllipsisVerticalIcon size={18} />}>
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
    </DropdownWrapper>
  );
}
