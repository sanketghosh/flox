// PACKAGES
import {
  BoltIcon,
  LayoutGridIcon,
  PlusCircleIcon,
  UsersIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

// COMPONENTS
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const TABS_TRIGGERS = [
  {
    icon: <LayoutGridIcon size={16} />,
    label: "boards",
  },
  {
    icon: <UsersIcon size={16} />,
    label: "members",
  },
  {
    icon: <BoltIcon size={16} />,
    label: "settings",
  },
];

const board_cards = [
  "ABC Project Workspace and others",
  "ABC Workspace",
  "ABC Workspace",
  "ABC Workspace",
  "ABC Workspace",
  "ABC Workspace",
  "ABC Workspace",
  "ABC Workspace",
  "ABC Workspace",
  "ABC Workspace",
  "ABC Workspace",
  "ABC Workspace",
  "ABC Workspace",
  "ABC Workspace",
  "ABC Workspace",
  "ABC Workspace",
  "ABC Workspace",
  "ABC Workspace",
  "ABC Workspace",
];

export default function TabsSection() {
  return (
    <div className="w-full space-y-4 p-3">
      <div className="rounded-md border p-3">
        <h1 className="text-lg font-semibold md:text-xl">Organization Name</h1>
        <p className="text-muted-foreground">
          This is a very short about the workspace, what it contains or it's
          goal.
        </p>
      </div>

      <div>
        <Tabs defaultValue="boards" className="">
          <TabsList className="grid w-full grid-cols-3 lg:w-1/2">
            {TABS_TRIGGERS.map((item) => (
              <TabsTrigger
                value={item.label}
                className="flex items-center gap-2 capitalize"
              >
                {item.icon}
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="boards" className="w-full">
            <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {board_cards.map((item, idx) => (
                <Card
                  key={idx}
                  className="cursor-pointer select-none space-y-2 bg-secondary/30 px-3 py-4 text-center"
                >
                  <span className="text-4xl">😡</span>
                  <Link
                    to={"/"}
                    className="flex items-center justify-center text-base leading-tight"
                  >
                    {item}
                  </Link>
                </Card>
              ))}
              <div>
                <PlusCircleIcon />
                Add Card
              </div>
            </div>
          </TabsContent>
          <TabsContent value="members" className="w-full">
            <div>Tab content</div>
          </TabsContent>
          <TabsContent value="settings" className="w-full">
            <div>Tab content</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
