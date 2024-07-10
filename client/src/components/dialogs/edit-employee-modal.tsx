import { EditEmployee } from "@/schemas";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { UserCogIcon } from "lucide-react";
import useEditEmployeeModal from "@/hooks/use-edit-employee-modal";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import DialogWrapper from "@/components/dialogs/dialog-wrapper";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { zodResolver } from "@hookform/resolvers/zod";

type EditEmployeeModalProps = {
  selectRow: string | number | null;
};

export default function EditEmployeeModal({
  selectRow,
}: EditEmployeeModalProps) {
  const form = useForm<z.infer<typeof EditEmployee>>({
    resolver: zodResolver(EditEmployee),
    defaultValues: {
      remove: false,
      employeeRole: "",
    },
  });

  const handleFormSubmit = (values: z.infer<typeof EditEmployee>) => {
    console.log(values);
  };

  const editEmployeeModal = useEditEmployeeModal();

  return (
    <>
      <Button
        size={"sm"}
        disabled={!selectRow}
        className="flex items-center gap-1 disabled:cursor-not-allowed"
        variant={"secondary"}
        onClick={editEmployeeModal.onOpen}
      >
        <UserCogIcon size={18} />
        Edit Employee
      </Button>
      <Form {...form}>
        <DialogWrapper
          isModalOpen={editEmployeeModal.isOpen}
          onModalClose={editEmployeeModal.onClose}
          dialogDescription="You can edit an employee role or even remove him/her from the workspace if you want to."
          dialogTitle="Edit employee"
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleFormSubmit)}
              className="space-y-4"
            >
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="employeeRole"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Delete Employee</FormLabel>
                      <div className="flex items-center gap-3">
                        <FormControl className="flex items-center">
                          <Input
                            {...field}
                            type="checkbox"
                            className="size-6 cursor-pointer accent-secondary/70"
                          />
                        </FormControl>
                        <Label htmlFor="" className="text-lg">
                          Check the box to delete user
                        </Label>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="employeeRole"
                  render={({ field }) => (
                    <FormItem className="flex flex-col space-y-2">
                      <FormLabel>Employee Role</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          defaultValue={"normal"}
                          className="rounded-md border bg-background px-2 py-2"
                        >
                          <option value="normal">Normal</option>
                          <option value="admin">Admin</option>
                          <option value="editor">Editor</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full">
                Confirm Changes
              </Button>
            </form>
          </Form>
        </DialogWrapper>
      </Form>
    </>
  );
}
