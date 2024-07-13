import { DUMMY_WORKSPACE } from "@/constants";

export default function ListOfWorkspaces() {
  return (
    <div className="space-y-4">
      {DUMMY_WORKSPACE.map((i, idx) => (
        <div
          className="line-clamp-1 w-full cursor-pointer rounded-md border border-border/70 px-4 py-3 font-medium transition-all hover:bg-secondary/30"
          key={idx}
        >
          {i}
        </div>
      ))}
    </div>
  );
}
