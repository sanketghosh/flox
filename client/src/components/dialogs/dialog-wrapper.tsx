import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

type DialogWrapperProps = {
  dialogTitle?: string;
  dialogDescription?: string;
  children: React.ReactNode;
  dialogTriggerButton?: React.ReactElement;
};

export default function DialogWrapper({
  children,
  dialogTitle,
  dialogDescription,
  dialogTriggerButton,
}: DialogWrapperProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{dialogTriggerButton}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
