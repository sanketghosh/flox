import { EllipsisIcon } from "lucide-react";
import TaskEdit from "../dialogs/task-edit";
import DropdownWrapper from "./dropdown-wrapper";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import AddNewTask from "../dialogs/add-new-task";

export default function TaskCardDropdown() {
  return (
    <DropdownWrapper menuBtn={<EllipsisIcon size={18} />}>
      <DropdownMenuItem>
        <AddNewTask />
      </DropdownMenuItem>
      <DropdownMenuItem>
        <TaskEdit />
      </DropdownMenuItem>
    </DropdownWrapper>
  );
}
