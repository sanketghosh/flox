import { Dialog, DialogPanel } from "@headlessui/react";
import { cn } from "../../lib/utils";

type DialogWrapperProps = {
  isOpen: boolean;
  toggleDialog: () => void;
  dialogTitle?: string;
  children: React.ReactNode;
};

export default function DialogWrapper({
  isOpen,
  toggleDialog,
  children,
  dialogTitle,
}: DialogWrapperProps) {
  return (
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
            <p className="leading-tight">{dialogTitle}</p>
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
