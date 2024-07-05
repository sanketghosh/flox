/* PACKAGES */
import { GripIcon } from "lucide-react";

/* LOCALS  */
import { Column } from "@/types/types";
import { generateFakeCardData } from "../../data/fake-card-data";

/* COMPONENTS */
import ColumnDropdownMenu from "@/components/dropdowns/column-dropdown-menu";
import TaskCard from "@/components/task-card";
import { Card } from "@/components/ui/card";

type ColumnContainerProps = {
  column: Column;
};

export default function ColumnContainer({ column }: ColumnContainerProps) {
  const { title } = column;

  const data = generateFakeCardData();

  return (
    <Card className="relative max-h-[75vh] w-[350px] overflow-y-auto rounded-md border-2 bg-secondary/85">
      {/* top container  */}
      <div className="sticky top-0 z-[1] flex w-full cursor-grabbing items-center justify-between rounded-t-md border-b-2 bg-background px-4 py-2">
        <div className="flex items-center gap-2">
          <GripIcon size={22} />
          <h1 className="line-clamp-1 font-medium">{title}</h1>
        </div>
        <ColumnDropdownMenu />
      </div>

      {/* container  */}
      <div className="flex flex-grow select-none flex-col gap-3 overflow-x-hidden px-2 py-4">
        {data.map((i) => (
          <TaskCard
            key={i.id}
            date={i.date}
            description={i.description}
            title={i.title}
            priority={i.priority}
            id={i.id}
          />
        ))}
      </div>

      {/* footer */}
      <div className="sticky bottom-0 z-[1] flex w-full items-center justify-between rounded-b-md border-t-2 bg-background px-4 py-2">
        <h1>Footer</h1>
      </div>
    </Card>
  );
}
