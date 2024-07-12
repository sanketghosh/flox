import { DUMMY_WORKSPACE } from "@/constants";

export default function ListOfWorkspaces() {
  return (
    <div className="my-3 space-y-3">
      {DUMMY_WORKSPACE.map((i, idx) => (
        <div className="w-full rounded-md bg-secondary/60 p-2">{i}</div>
      ))}
    </div>
  );
}
