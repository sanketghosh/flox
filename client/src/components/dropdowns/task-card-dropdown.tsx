/* PACKAGES */
import { EllipsisIcon, Trash2Icon } from "lucide-react";

/* COMPONENTS  */
import TaskEdit from "@/components/dialogs/task-edit";
import DropdownWrapper from "@/components/dropdowns/dropdown-wrapper";
import { Button } from "@/components/ui/button";
import ViewTaskCard from "../dialogs/view-task-card";

export default function TaskCardDropdown() {
  const COLUMN_DROPDOWN = [
    {
      item: <TaskEdit />,
    },
    {
      item: <ViewTaskCard />,
    },
    {
      item: (
        <Button
          className="flex w-full items-center gap-1 bg-red-200/60 text-red-700 hover:bg-red-200 hover:text-red-700"
          size={"sm"}
          variant={"ghost"}
        >
          <Trash2Icon size={18} />
          Delete Column
        </Button>
      ),
    },
  ];

  return (
    <DropdownWrapper
      menuBtn={<EllipsisIcon size={18} />}
      dropdownTriggerClassNames="absolute top-3 right-4"
      dropdownContentClassNames="space-y-1 absolute -right-1"
    >
      {COLUMN_DROPDOWN.map((item, idx) => (
        <div key={idx}>{item.item}</div>
      ))}
    </DropdownWrapper>
  );
}
