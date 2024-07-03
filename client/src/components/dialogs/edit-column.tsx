import { PenIcon, PlusIcon } from "lucide-react";
import { Button, Dialog, DialogPanel, Input } from "@headlessui/react";
import { cn } from "../../lib/utils";
import { FormEvent, useState } from "react";
import DialogWrapper from "./dialog-wrapper";
import DialogForm from "./dialog-form";

export default function EditColumn() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [columnName, setColumnName] = useState<string>("");

  const handleChangeColumnName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumnName(e.target.value);
  };

  function toggleDialog() {
    setIsOpen(!isOpen);
  }

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log({
      columnName,
    });
  };

  return (
    <div>
      <button
        className="flex w-full items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100"
        onClick={toggleDialog}
      >
        <PenIcon size={17} />
        Edit Column
      </button>
      <DialogWrapper
        isOpen={isOpen}
        toggleDialog={toggleDialog}
        dialogTitle="You can edit your column name if you want to change it something else."
      >
        <DialogForm
          taskEditOrAdd={false}
          buttonLabel="Edit Column"
          errorMessage={""}
          formSubmitHandler={handleFormSubmit}
          onChangeInput={handleChangeColumnName}
          inputPlaceholder="Write changed column title."
          inputType="text"
        />
      </DialogWrapper>
    </div>
  );
}
