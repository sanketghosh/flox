/* PACKAGES  */
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PenBoxIcon } from "lucide-react";

/* LOCALS  */
import useEditColumnModal from "@/hooks/use-edit-column-modal";
import { ColumnSchema } from "@/schemas";

/* COMPONENTS  */
import { Button } from "@/components/ui/button";
import DialogWrapper from "@/components/dialogs/dialog-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function EditColumn() {
  const form = useForm<z.infer<typeof ColumnSchema>>({
    resolver: zodResolver(ColumnSchema),
    defaultValues: {
      columnTitle: "",
    },
  });

  const handleFormSubmit = (values: z.infer<typeof ColumnSchema>) => {
    console.log(values);
  };

  const editColumnModal = useEditColumnModal();

  return (
    <>
      <Button
        className="flex w-full items-center gap-1 font-medium"
        size={"sm"}
        variant={"ghost"}
        onClick={editColumnModal.onOpen}
      >
        <PenBoxIcon size={19} />
        Edit Column
      </Button>
      <DialogWrapper
        isModalOpen={editColumnModal.isOpen}
        onModalClose={editColumnModal.onClose}
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
              Save Column
            </Button>
          </form>
        </Form>
      </DialogWrapper>
    </>
  );
}
