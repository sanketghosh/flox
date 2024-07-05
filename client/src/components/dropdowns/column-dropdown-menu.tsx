/* PACKAGES */
import { EllipsisIcon, Trash2Icon } from "lucide-react";

/* COMPONENTS */
import DropdownWrapper from "@/components/dropdowns/dropdown-wrapper";
import { Button } from "@/components/ui/button";
import AddNewTask from "@/components/dialogs/add-new-task";
import EditColumn from "../dialogs/edit-column";

export default function ColumnDropdownMenu() {
  const COLUMN_DROPDOWN = [
    {
      item: <AddNewTask />,
    },
    {
      item: <EditColumn />,
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
      dropdownContentClassNames="space-y-1 absolute -right-1"
    >
      {COLUMN_DROPDOWN.map((item, idx) => (
        <div key={idx}>{item.item}</div>
      ))}
    </DropdownWrapper>
  );
}
