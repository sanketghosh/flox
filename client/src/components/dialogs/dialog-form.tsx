import { Button, Input, Select, Textarea } from "@headlessui/react";
import ErrorMessage from "../messages/error-message";
import { FormEvent, HTMLInputTypeAttribute } from "react";

type DialogFormProps = {
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextarea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeSelect?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  formSubmitHandler: (e: FormEvent) => void;

  taskEditOrAdd?: boolean;
  errorMessage?: string | null;

  inputPlaceholder?: string;
  inputType?: HTMLInputTypeAttribute;
  textareaPlaceholder?: string;
  buttonLabel?: string;
};

export default function DialogForm({
  formSubmitHandler,
  onChangeInput,
  onChangeSelect,
  onChangeTextarea,

  errorMessage,
  taskEditOrAdd,

  buttonLabel = "Button",
  inputPlaceholder,
  inputType,
  textareaPlaceholder,
}: DialogFormProps) {
  return (
    <form className="mt-4 space-y-4" onSubmit={formSubmitHandler}>
      <Input
        className="w-full rounded-md border px-2 py-1.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-black md:text-base"
        placeholder={inputPlaceholder}
        onChange={onChangeInput}
        type={inputType}
      />
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}

      {taskEditOrAdd && (
        <>
          <Select
            name="priority"
            aria-label="Task Priority"
            className="w-full rounded-md border bg-transparent px-2 py-2"
            defaultValue={"low"}
            onChange={onChangeSelect}
          >
            <option value="low">LOW</option>
            <option value="medium">MEDIUM</option>
            <option value="high">HIGH</option>
          </Select>
          <Textarea
            className="w-full rounded-md border px-2 py-2"
            placeholder={textareaPlaceholder}
            onChange={onChangeTextarea}
          />
        </>
      )}

      <Button
        className="flex w-full shrink-0 items-center justify-center gap-1 rounded-md bg-black px-3 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:bg-black/30"
        type="submit"
      >
        {buttonLabel}
      </Button>
    </form>
  );
}
