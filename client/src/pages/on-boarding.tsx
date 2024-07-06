import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import { useState } from "react";

export default function OnBoarding() {
  const [orgs, setOrgs] = useState<string[]>([]);

  return (
    <div className="flex h-[calc(100vh-3rem)] md:h-[calc(100vh-3.5rem)]">
      <div className="h-full w-72 border-l border-r p-3">
        <Button className="flex w-full items-center gap-1">
          <PlusCircleIcon size={18} />
          <p>Add Organization</p>
        </Button>

        <div className="my-6 h-0.5 bg-muted" />

        <div></div>
      </div>
    </div>
  );
}
