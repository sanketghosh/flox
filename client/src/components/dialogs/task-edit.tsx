/* PACKAGES  */
import { useForm } from "react-hook-form";
import { SquarePenIcon } from "lucide-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/* LOCALS */
import useEditTaskModal from "@/hooks/use-edit-task-modal";
import { TaskSchema } from "@/schemas";

/* COMPONENTS  */
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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function TaskEdit() {
  const form = useForm<z.infer<typeof TaskSchema>>({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      taskTitle: "",
      taskPriority: "",
      taskDescription: "",
    },
  });

  const handleFormSubmit = (values: z.infer<typeof TaskSchema>) => {
    console.log({
      values,
    });
  };

  const taskEditModal = useEditTaskModal();

  return (
    <>
      <Button
        onClick={taskEditModal.onOpen}
        variant={"ghost"}
        size={"sm"}
        type="button"
        className="flex w-full items-center gap-1"
      >
        <SquarePenIcon size={18} />
        Edit This Task
      </Button>

      <DialogWrapper
        dialogTitle="Edit the task"
        dialogDescription="If you have anything to change in this task, feel free to change things."
        isModalOpen={taskEditModal.isOpen}
        onModalClose={taskEditModal.onClose}
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleFormSubmit)}
            className="space-y-4"
          >
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="taskTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task Title</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Fix login bug."
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="taskPriority"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col">
                    <FormLabel className="mt-2">Task Priority</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        defaultValue={"low"}
                        className="rounded-md border bg-transparent px-3 py-2"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="taskDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Resolve the issues causing login failures"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="w-full">Save Task</Button>
          </form>
        </Form>
      </DialogWrapper>
    </>
  );
}
