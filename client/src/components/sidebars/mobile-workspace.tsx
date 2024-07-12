import { BriefcaseIcon } from "lucide-react";

// COMPONENTS
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import AddWorkspace from "@/components/dialogs/add-workspace";
import { DUMMY_WORKSPACE } from "@/constants";
import ListOfWorkspaces from "./list-of-workspaces";

export default function MobileWorkspace() {
  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant={"outline"}
            size={"sm"}
            className="flex items-center gap-1 text-sm font-medium"
          >
            <BriefcaseIcon size={18} />
            View Workspaces
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full md:w-1/2">
          <SheetHeader>
            <AddWorkspace />
          </SheetHeader>
          <div>
            <ListOfWorkspaces />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
