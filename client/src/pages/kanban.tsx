import AddColumnDialog from "@/components/dialogs/add-column-dialog";
import KanbanBoard from "@/components/kanban-board";
import { Button } from "@/components/ui/button";
import { Column } from "@/types/types";
import { Settings2Icon, SettingsIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Kanban() {
  const [columns, setColumns] = useState<Column[]>([]);

  return (
    <main>
      <div className="space-y-4">
        {/* <Header /> */}

        <div className="flex w-full items-center justify-between">
          <AddColumnDialog setColumns={setColumns} columns={columns} />
          <Button asChild variant={"ghost"} size={"icon"} className="">
            <Link to={"/kanban/26816/settings"}>
              <SettingsIcon />
            </Link>
          </Button>
        </div>
        <KanbanBoard columns={columns} />
      </div>
    </main>
  );
}
