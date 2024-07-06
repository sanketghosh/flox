/* PACKAGES */
import { PlusCircleIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

/* LOCALS */
import { Column } from "@/types/types";
import { generateRandomId } from "@/lib/generate-id";
import useAddColumnModal from "@/hooks/use-add-column-modal";
import { ColumnSchema } from "@/schemas";

/*  COMPONENTS */
import DialogWrapper from "@/components/dialogs/dialog-wrapper";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type AddColumnDialog = {
  setColumns: React.Dispatch<React.SetStateAction<Column[]>>;
  columns: Column[];
};

export default function AddColumnDialog({
  setColumns,
  columns,
}: AddColumnDialog) {
  const form = useForm<z.infer<typeof ColumnSchema>>({
    resolver: zodResolver(ColumnSchema),
    defaultValues: {
      columnTitle: "",
    },
  });

  const handleFormSubmit = (values: z.infer<typeof ColumnSchema>) => {
    const columnToAdd: Column = {
      id: generateRandomId(),
      title: values.columnTitle,
    };

    setColumns([...columns, columnToAdd]);
    addColumnModal.onClose();
  };

  const addColumnModal = useAddColumnModal();
  return (
    <>
      <Button
        className="flex items-center gap-1 font-medium"
        size={"sm"}
        variant={"secondary"}
        onClick={addColumnModal.onOpen}
      >
        <PlusCircleIcon size={19} />
        Add Column
      </Button>
      <DialogWrapper
        isModalOpen={addColumnModal.isOpen}
        onModalClose={addColumnModal.onClose}
        dialogDescription="Specifying a name for the column will help you to organize you work much more easily. It is a must."
        dialogTitle="Add a new column"
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleFormSubmit)}
            className="space-y-4"
          >
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="columnTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Column Title</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Ongoing Project"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full">
              Add Column
            </Button>
          </form>
        </Form>
      </DialogWrapper>
    </>
  );
}
