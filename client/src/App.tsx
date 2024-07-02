/* Packages */
import { useState } from "react";

/* Local Components */
import KanbanBoard from "./components/kanban-board";
import { Header } from "./components";
import AddColumnDialog from "./components/dialogs/add-column-dialog";
import { useAddColumn } from "./hooks/use-add-column";
import { generateRandomId } from "./lib/generate-id";
import { Column } from "./types/types";

export default function App() {
  const [columnName, setColumnName] = useState<string>("");

  const [columns, setColumns] = useState<Column[]>([]);

  const handleAddColumn = () => {
    const columnToAdd: Column = {
      id: generateRandomId(),
      title: columnName,
    };

    setColumns([...columns, columnToAdd]);
  };

  function onColumnNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setColumnName(e.target.value);
  }

  return (
    <main>
      <div className="mx-auto max-w-7xl space-y-5 px-3 py-3">
        <Header />
        <AddColumnDialog
          handleAddColumn={handleAddColumn}
          onColumnNameChange={onColumnNameChange}
          columnName={columnName}
          setColumnName={setColumnName}
        />
        <KanbanBoard columns={columns} />
      </div>
    </main>
  );
}
