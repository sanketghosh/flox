import { AddEmployee } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import { UserPlusIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import DialogWrapper from "./dialog-wrapper";
import { Input } from "../ui/input";
import useEditEmployeeModal from "@/hooks/use-edit-employee-modal";

export default function AddEmployeeModal() {
  const form = useForm<z.infer<typeof AddEmployee>>({
    resolver: zodResolver(AddEmployee),
    defaultValues: {
      email: "",
    },
  });

  const handleFormSubmit = (values: z.infer<typeof AddEmployee>) => {
    console.log(values);
  };

  const addEmployeeModal = useEditEmployeeModal();

  return (
    <>
      <Button
        size={"sm"}
        className="flex items-center gap-1"
        onClick={addEmployeeModal.onOpen}
      >
        <UserPlusIcon size={18} />
        Add Employee
      </Button>

      <DialogWrapper
        isModalOpen={addEmployeeModal.isOpen}
        onModalClose={addEmployeeModal.onClose}
        dialogDescription="Type an email and send add request, if the employee accept it he/she will be added to the workspace. Ask your employee to check his/her account."
        dialogTitle="Add an employee"
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleFormSubmit)}
            className="space-y-4"
          >
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Employee Email</FormLabel>
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
              Send Add Request
            </Button>
          </form>
        </Form>
      </DialogWrapper>
    </>
  );
}
