import AddWorkspace from "@/components/dialogs/add-workspace";
import ListOfWorkspaces from "@/components/sidebars/list-of-workspaces";

export default function OnBoardingSidebar() {
  return (
    <div className="sticky top-14 hidden h-[calc(90vh-3rem)] w-96 md:h-[calc(90vh-3.5rem)] lg:block">
      <AddWorkspace />
      <div className="mt-5 h-full overflow-y-scroll">
        <ListOfWorkspaces />
      </div>
    </div>
  );
}
