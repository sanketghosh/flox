import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, Kanban } from "./pages";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/kanban/:id" element={<Kanban />} />
      </Routes>
    </Router>
  );
}

/* 

// PACKAGES 
import { useState } from "react";

// LOCALS 
import { Column } from "@/types/types";

// COMPONENTS *
import KanbanBoard from "@/components/kanban-board";
import { Header } from "@/components";
import AddColumnDialog from "@/components/dialogs/add-column-dialog";

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
 */
