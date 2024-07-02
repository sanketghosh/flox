/* packages */
import { useState } from "react";

/* local components */
import { Column } from "../types/types";
import { generateRandomId } from "../lib/generate-id";

export const useAddColumn = (columnName: string) => {
  const [columns, setColumns] = useState<Column[]>([]);

  const handleAddColumn = () => {
    const columnToAdd: Column = {
      id: generateRandomId(),
      title: columnName,
    };

    setColumns([...columns, columnToAdd]);
  };

  return {
    columns,
    setColumns,
    handleAddColumn,
  };
};
