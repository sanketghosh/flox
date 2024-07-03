import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import DialogWrapper from "./dialog-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { TaskSchema } from "@/schemas";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { PenIcon } from "lucide-react";

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

  return (
    <DialogWrapper
      dialogTitle="Edit the task"
      dialogDescription="If you have anything to change in this task, feel free to change things."
      dialogTriggerButton={
        <Button className="flex items-center gap-1" variant={"ghost"}>
          <PenIcon size={18} />
          Add New Task
        </Button>
      }
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
          <Button className="w-full">Add Task</Button>
        </form>
      </Form>
    </DialogWrapper>
  );
}
