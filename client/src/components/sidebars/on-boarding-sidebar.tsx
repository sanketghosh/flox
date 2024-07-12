import AddWorkspace from "@/components/dialogs/add-workspace";
import ListOfWorkspaces from "./list-of-workspaces";

export default function OnBoardingSidebar() {
  return (
    <div className="sticky top-14 hidden h-[calc(100vh-3rem)] w-96 md:h-[calc(100vh-3.5rem)] lg:block">
      <AddWorkspace />
      <div>
        <ListOfWorkspaces />
      </div>
    </div>
  );
}
