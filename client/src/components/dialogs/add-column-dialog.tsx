/* packages */
import { FormEvent, useState } from "react";
import { CirclePlusIcon } from "lucide-react";
import { Button } from "@headlessui/react";

/* local components */
import DialogWrapper from "./dialog-wrapper";
import DialogForm from "./dialog-form";

type AddColumnDialog = {
  handleAddColumn?: () => void;
  onColumnNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  columnName: string;
  setColumnName: (name: string) => void;
};

export default function AddColumnDialog({
  handleAddColumn,
  onColumnNameChange,
  columnName,
  setColumnName,
}: AddColumnDialog) {
  /*   */
  let [isOpen, setIsOpen] = useState<boolean>(false);
  let [error, setError] = useState<string | null>(null);

  function toggleDialog() {
    setIsOpen(!isOpen);
    setError(null);
  }

  function submitColumnName(e: FormEvent) {
    e.preventDefault();

    if (columnName.length <= 0) {
      setError("Enter a column name please!");
    } else if (columnName.length > 20) {
      setError("More than 20 characters not allowed");
    } else {
      setError(null);
      if (handleAddColumn) {
        handleAddColumn();
      }
      setColumnName("");
      toggleDialog();
    }
  }

  return (
    <div>
      <Button
        className="flex shrink-0 items-center gap-1 rounded-md bg-black px-3 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={toggleDialog}
      >
        <CirclePlusIcon size={18} />
        Create Column
      </Button>
      <DialogWrapper
        isOpen={isOpen}
        dialogTitle="Create a new column, name it and add task to it. Yes, it's that easy."
        toggleDialog={toggleDialog}
      >
        <DialogForm
          errorMessage={error}
          onChangeInput={onColumnNameChange}
          buttonLabel="Add New Column"
          formSubmitHandler={submitColumnName}
          taskEditOrAdd={false}
          inputPlaceholder="Enter a column name"
          inputType="text"
        />
      </DialogWrapper>
    </div>
  );
}
