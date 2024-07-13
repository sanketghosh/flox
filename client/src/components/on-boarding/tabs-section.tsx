// PACKAGES
import { useState } from "react";
import {
  BoltIcon,
  BriefcaseIcon,
  LayoutGridIcon,
  UserCogIcon,
  UserPlusIcon,
  UsersIcon,
} from "lucide-react";

// COMPONENTS
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Boards from "@/components/on-boarding/tabs-sections/boards";
import UsersTable from "@/components/on-boarding/tabs-sections/users-table";
import EditEmployeeModal from "@/components/dialogs/edit-employee-modal";
import AddEmployeeModal from "@/components/dialogs/add-employee-modal";
import MobileWorkspace from "@/components/sidebars/mobile-workspace";

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
  "ABC Project Board and others",
  "ABC Project Board and others",
  "ABC Project Board and others",
  "ABC Project Board and others",
  "ABC Project Board and others",
  "ABC Project Board and others",
  "ABC Project Board and others",
  "ABC Project Board and others",
  "ABC Project Board and others",
  "ABC Project Board and others",
  "ABC Project Board and others",
  "ABC Project Board and others",
  "ABC Project Board and others",
  "ABC Project Board and others",
  "ABC Project Board and others",
  "ABC Project Board and others",
  "ABC Project Board and others",
  "ABC Project Board and others",
  "ABC Project Board and others",
];

export default function TabsSection() {
  const [selectRow, setSelectRow] = useState<string | number | null>(null);

  function toggleRow(id: string | number | null) {
    if (selectRow === id) {
      setSelectRow(null);
    } else {
      setSelectRow(id);
    }
  }

  return (
    <div className="w-full space-y-4 p-3">
      <div className="rounded-md border p-3">
        <h1 className="text-lg font-semibold md:text-xl">Organization Name</h1>
        <p className="text-muted-foreground">
          This is a very short about the workspace, what it contains or it's
          goal.
        </p>
      </div>

      <MobileWorkspace />

      <div>
        <Tabs defaultValue="boards" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3 lg:w-1/2">
            {TABS_TRIGGERS.map((item) => (
              <TabsTrigger
                value={item.label}
                className="flex items-center gap-2 capitalize"
                key={item.label}
              >
                {item.icon}
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="boards" className="w-full">
            <Boards board_cards={board_cards} />
          </TabsContent>
          <TabsContent value="members" className="w-full space-y-4">
            <p className="text-muted-foreground">
              Instructions: This table contains, data of employees who can
              access the boards of this workspace. If you want to remove or
              change the role of an employee just click on the row and click{" "}
              <b>edit employee</b> button and in case you want to add an
              employee, just click <b>add employee</b> button. Double click on
              the row to unselect.
            </p>

            <div className="flex w-full space-x-4">
              <EditEmployeeModal selectRow={selectRow} />
              <AddEmployeeModal />
            </div>

            <UsersTable toggleSelectRow={toggleRow} selectedRow={selectRow} />
          </TabsContent>
          <TabsContent value="settings" className="w-full">
            <div>Working on settings</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
