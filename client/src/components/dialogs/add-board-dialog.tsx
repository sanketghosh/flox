// PACKAGES
import { CircleOffIcon, PlusCircleIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { BoardSchema } from "@/schemas";
import useAddBoardModal from "@/hooks/use-add-board-modal";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

// COMPONENTS
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function AddBoardDialog() {
  const form = useForm<z.infer<typeof BoardSchema>>({
    resolver: zodResolver(BoardSchema),
    defaultValues: {
      boardTitle: "",
      emoji: "",
    },
  });

  const addNewBoard = useAddBoardModal();

  const handleFormSubmit = (values: z.infer<typeof BoardSchema>) => {
    console.log(values);
  };

  return (
    <>
      <div
        className="flex cursor-pointer select-none flex-col items-center justify-center space-y-2 rounded-md border px-3 py-4 text-center transition-all hover:bg-secondary/30"
        role="button"
        onClick={addNewBoard.onOpen}
      >
        <PlusCircleIcon size={33} />
        Add New Card
      </div>

      <DialogWrapper
        onModalClose={addNewBoard.onClose}
        isModalOpen={addNewBoard.isOpen}
        dialogTitle="Add a new board"
        dialogDescription="A new board can help you to organize tasks topic wise inside a workspace."
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleFormSubmit)}
            className="space-y-4"
          >
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="boardTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Board Title</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Next.js issues"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="emoji"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Emoji</FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className="h-[100px] w-full"
                          >
                            {form.watch("emoji") ? (
                              <div className="flex flex-col items-center gap-2">
                                <span className="text-5xl" role="img">
                                  {field.value}
                                </span>
                                <p className="text-xs text-muted-foreground">
                                  Click to change
                                </p>
                              </div>
                            ) : (
                              <div className="flex flex-col items-center gap-2">
                                <CircleOffIcon className="h-[48px] w-[48px]" />
                                <p className="text-xs text-muted-foreground">
                                  Click to select
                                </p>
                              </div>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full">
                          <Picker
                            data={data}
                            onEmojiSelect={(emoji: { native: string }) => {
                              field.onChange(emoji.native);
                            }}
                          />
                        </PopoverContent>
                      </Popover>
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
