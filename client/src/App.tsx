/* Packages */
import { useState } from "react";

/* Local Components */
import KanbanBoard from "./components/kanban-board";
import { Header } from "./components";
import AddColumnDialog from "./components/dialogs/add-column-dialog";
import { generateRandomId } from "./lib/generate-id";
import { Column } from "./types/types";

export default function App() {
  const [columns, setColumns] = useState<Column[]>([]);

  return (
    <main>
      <div className="mx-auto max-w-7xl space-y-5 px-3 py-3">
        <Header />
        <AddColumnDialog setColumns={setColumns} columns={columns} />
        <KanbanBoard columns={columns} />
      </div>
    </main>
  );
}
