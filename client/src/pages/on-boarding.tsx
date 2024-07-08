import TabsSection from "@/components/on-boarding/tabs-section";
import OnBoardingSidebar from "@/components/sidebars/on-boarding-sidebar";

import { useState } from "react";

export default function OnBoarding() {
  const [orgs, setOrgs] = useState<string[]>([]);

  return (
    <div className="flex w-full lg:gap-3">
      <OnBoardingSidebar />
      <TabsSection />
    </div>
  );
}
