import { PlusIcon } from "lucide-react";
import { FormEvent, useState } from "react";
import DialogWrapper from "./dialog-wrapper";
import DialogForm from "./dialog-form";

export default function AddNewTask() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleDialog() {
    setIsOpen(!isOpen);
  }

  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [taskPriority, setTaskPriority] = useState<string>("");

  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setTaskDescription(e.target.value);
  };

  const handleChangeTaskTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const handleChangeTaskPriority = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setTaskPriority(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({
      taskTitle,
      taskPriority,
      taskDescription,
    });
  };

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
        <DialogForm
          onChangeInput={handleChangeTaskTitle}
          onChangeTextarea={handleChangeDescription}
          onChangeSelect={handleChangeTaskPriority}
          formSubmitHandler={handleFormSubmit}
          buttonLabel="Add New Task"
          errorMessage={""}
          taskEditOrAdd={true}
          inputPlaceholder="Write your task's title"
          inputType="text"
          textareaPlaceholder="Explain shortly about your task."
        />
      </DialogWrapper>
    </div>
  );
}
