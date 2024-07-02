import { PenIcon } from "lucide-react";
import { useState } from "react";

import { Button, Dialog, DialogPanel, Input } from "@headlessui/react";
import { cn } from "../../lib/utils";

export default function TaskEdit() {
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
        <PenIcon size={17} />
        Edit Column
      </button>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={toggleDialog}
      >
        <div
          className={cn(
            "fixed inset-0 z-10 w-screen overflow-y-auto",
            isOpen && "bg-black/60 backdrop-blur-sm",
          )}
        >
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="data-[closed]:transform-[scale(95%)] w-full max-w-md rounded-xl border bg-white p-6 text-black backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0"
            >
              <p className="leading-tight">
                Add the column title, the way you want the column to be named.
              </p>

              <form
                className="mt-4 space-y-4"
                //   onSubmit={submitColumnName}
              >
                <Input
                  className="w-full rounded-md border px-2 py-1.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-black md:text-base"
                  placeholder="Completed project"
                  //   onChange={onColumnNameChange}
                  type="text"
                />
                {/* {error && <ErrorMessage errorMessage={error} />} */}
                <Button
                  className="flex w-full shrink-0 items-center justify-center gap-1 rounded-md bg-black px-3 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:bg-black/30"
                  type="submit"
                >
                  Update Column
                </Button>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}