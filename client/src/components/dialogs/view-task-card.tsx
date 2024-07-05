/* PACKAGES */
import { CalendarIcon, ViewIcon } from "lucide-react";

/* LOCALS  */
import { cn } from "@/lib/utils";
import useAddNewTaskModal from "@/hooks/use-add-new-task-modal";

/* COMPONENTS  */
import { Button } from "@/components/ui/button";
import DialogWrapper from "@/components/dialogs/dialog-wrapper";

const data = {
  title: "Complete project report.",
  description:
    "Ensure to cover all aspects of the project. Ensure if all the parts of the projects are working absolutely perfectly. Ensure if all the parts of the projects are working absolutely perfectly.",
  date: "2025-09-20",
  priority: "medium",
};

export default function ViewTaskCard() {
  const viewTaskCardModal = useAddNewTaskModal();

  return (
    <>
      <Button
        onClick={viewTaskCardModal.onOpen}
        variant={"ghost"}
        size={"sm"}
        type="button"
        className="flex w-full items-center gap-1"
      >
        <ViewIcon size={18} />
        View Card Data
      </Button>

      <DialogWrapper
        dialogTitle={""}
        dialogDescription={""}
        isModalOpen={viewTaskCardModal.isOpen}
        onModalClose={viewTaskCardModal.onClose}
      >
        <p
          className={cn(
            "w-fit rounded-full px-3 py-0.5 text-base font-semibold uppercase",
            data.priority === "high" &&
              "border border-red-700 bg-red-400/40 text-red-700",
            data.priority === "medium" &&
              "border border-yellow-700 bg-yellow-400/40 text-yellow-700",
            data.priority === "low" &&
              "border border-green-700 bg-green-400/40 text-green-700",
          )}
        >
          {data.priority}
        </p>
        <div className="space-y-2">
          <h1 className="text-lg font-semibold lg:text-xl">{data.title}</h1>
          <p className="text-muted-foreground">{data.description}</p>
        </div>
        <div className="flex items-center gap-1 font-medium">
          <CalendarIcon size={17} />
          <p>{data.date}</p>
        </div>
      </DialogWrapper>
    </>
  );
}
