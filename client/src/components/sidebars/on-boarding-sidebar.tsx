import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import AddWorkspace from "../dialogs/add-workspace";

export default function OnBoardingSidebar() {
  return (
    <div className="sticky top-14 h-[calc(100vh-3rem)] w-72 md:h-[calc(100vh-3.5rem)]">
      <AddWorkspace />

      <div></div>
    </div>
  );
}
