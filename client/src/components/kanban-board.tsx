/* LOCALS */
import { Column } from "@/types/types";

/* COMPONENTS */
import ColumnContainer from "@/components/column/column-container";

type KanbanBoardProps = {
  columns: Column[];
};

export default function KanbanBoard({ columns }: KanbanBoardProps) {
  return (
    <div className="m-auto flex min-h-[75vh] w-full items-center space-x-3 overflow-x-auto overflow-y-hidden">
      <div className="flex gap-3">
        {columns.map((column) => (
          <ColumnContainer key={column.id} column={column} />
        ))}
      </div>
    </div>
  );
}
