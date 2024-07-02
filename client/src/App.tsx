/* packages */
import { useState } from "react";

/* local components */
import KanbanBoard from "./components/kanban-board";
import { Header } from "./components";
import { useAddColumn } from "./hooks/use-add-column";
import AddColumnDialog from "./components/column/add-column-dialog";

export default function App() {
  let [columnName, setColumnName] = useState<string>("");

  const { columns, handleAddColumn } = useAddColumn(columnName);

  function onColumnNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setColumnName(e.target.value);
  }

  return (
    <main>
      <div className="mx-auto max-w-7xl space-y-3 px-3 py-3">
        <Header />
        <AddColumnDialog
          handleAddColumn={handleAddColumn}
          onColumnNameChange={onColumnNameChange}
          columnName={columnName}
        />
        <KanbanBoard columns={columns} />
      </div>
    </main>
  );
}
