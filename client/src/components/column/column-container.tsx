/* packages */
import { GripIcon } from "lucide-react";

/* local components */
import { Column } from "../../types/types";
import ColumnDropdownMenu from "./column-dropdown-menu";

type ColumnContainerProps = {
  column: Column;
};

export default function ColumnContainer({ column }: ColumnContainerProps) {
  const { title } = column;

  return (
    <div className="h-[75vh] w-[350px] rounded-md border bg-gray-50/80 p-2">
      <div className="flex w-full items-center justify-between rounded-md border bg-white px-2 py-2">
        <div className="flex items-center gap-2">
          <ColumnDropdownMenu />
          <h1 className="line-clamp-1 font-medium">{title}</h1>
        </div>

        <button className="cursor-grabbing">
          <GripIcon size={22} />
        </button>
      </div>
    </div>
  );
}
