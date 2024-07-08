import AddWorkspace from "@/components/dialogs/add-workspace";

export default function OnBoardingSidebar() {
  return (
    <div className="sticky top-14 hidden h-[calc(100vh-3rem)] w-72 md:h-[calc(100vh-3.5rem)] lg:block">
      <AddWorkspace />

      <div></div>
    </div>
  );
}
