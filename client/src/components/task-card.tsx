/* PACKAGES */
import { CalendarIcon } from "lucide-react";

/* LOCALS */
import { Priority } from "@/types/types";
import { cn } from "@/lib/utils";

/* COMPONENTS */
import TaskCardDropdown from "@/components/dropdowns/task-card-dropdown";
import { Card } from "@/components/ui/card";

type TaskCardProps = {
  id: string;
  title: string;
  description: string;
  date: string;
  priority: Priority;
};

export default function TaskCard({
  date,
  title,
  description,
  priority,
}: TaskCardProps) {
  return (
    <Card className="relative cursor-grabbing bg-background p-3 shadow-md">
      <TaskCardDropdown />

      <h2 className="line-clamp-1 font-medium text-foreground">{title}</h2>
      <p className="line-clamp-1 text-sm text-muted-foreground">
        {description}
      </p>
      <div className="mt-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-1 font-medium">
          <CalendarIcon size={17} />
          <p>{date}</p>
        </div>
        <p
          className={cn(
            "rounded-full px-3 py-0.5 text-xs font-semibold uppercase",
            priority === "high" &&
              "border border-red-700 bg-red-400/40 text-red-700",
            priority === "medium" &&
              "border border-yellow-700 bg-yellow-400/40 text-yellow-700",
            priority === "low" &&
              "border border-green-700 bg-green-400/40 text-green-700",
          )}
        >
          {priority}
        </p>
      </div>
    </Card>
  );
}
