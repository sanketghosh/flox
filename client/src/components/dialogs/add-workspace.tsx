// PACKAGES
import { WorkspaceSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { PlusCircleIcon } from "lucide-react";
import useAddWorkspaceModal from "@/hooks/use-add-workspace-modal";

// COMPONENTS
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
import { Textarea } from "@/components/ui/textarea";

export default function AddWorkspace() {
  const form = useForm<z.infer<typeof WorkspaceSchema>>({
    resolver: zodResolver(WorkspaceSchema),
    defaultValues: {
      emoji: "",
      workspaceTitle: "",
      workspaceDescription: "",
    },
  });

  const handleFormSubmit = (values: z.infer<typeof WorkspaceSchema>) => {
    console.log(values);
  };

  const addWorkspaceModal = useAddWorkspaceModal();

  return (
    <>
      <Button
        className="mt-3 flex w-full items-center gap-1 font-semibold"
        variant={"default"}
        onClick={addWorkspaceModal.onOpen}
      >
        <PlusCircleIcon size={19} />
        Add Workspace
      </Button>
      <DialogWrapper
        isModalOpen={addWorkspaceModal.isOpen}
        onModalClose={addWorkspaceModal.onClose}
        dialogDescription="A new workspace helps you to keep your important boards in group and manage things more easily."
        dialogTitle="Add a new workspace"
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleFormSubmit)}
            className="space-y-4"
          >
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="workspaceTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Emoji</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="DevOps Stuff"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="workspaceTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Workspace Title</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="DevOps Stuff"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="workspaceDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Workspace Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="All things important and to be done in devops side."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full">
              Add Workspace
            </Button>
          </form>
        </Form>
      </DialogWrapper>
    </>
  );
}
