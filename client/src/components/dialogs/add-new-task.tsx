import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { Button, Input, Select, Textarea } from "@headlessui/react";
import DialogWrapper from "./dialog-wrapper";

export default function AddNewTask() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleDialog() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button
        className="flex w-full items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100"
        onClick={toggleDialog}
      >
        <PlusIcon size={17} />
        Add New Task
      </button>
      <DialogWrapper
        isOpen={isOpen}
        toggleDialog={toggleDialog}
        dialogTitle="How about adding a new task ? You can add task title, description and add a priority. That's it."
      >
        <form
          className="mt-4 w-full space-y-4"
          //   onSubmit={submitColumnName}
        >
          <Input
            className="w-full rounded-md border px-2 py-1.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-black md:text-base"
            placeholder="Completed project"
            //   onChange={onColumnNameChange}
            type="text"
          />
          <Select
            name="status"
            aria-label="Project status"
            className="w-full rounded-md border bg-transparent px-2 py-2"
          >
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="delayed">Delayed</option>
            <option value="canceled">Canceled</option>
          </Select>
          <Textarea
            className="w-full rounded-md border px-2 py-2"
            placeholder="Add the task description briefly here."
          />
          {/* {error && <ErrorMessage errorMessage={error} />} */}
          <Button
            className="flex w-full shrink-0 items-center justify-center gap-1 rounded-md bg-black px-3 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:bg-black/30"
            type="submit"
          >
            Add New Task
          </Button>
        </form>
      </DialogWrapper>
    </div>
  );
}
