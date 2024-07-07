import TabsSection from "@/components/on-boarding/tabs-section";
import OnBoardingSidebar from "@/components/sidebars/on-boarding-sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BoltIcon,
  LayoutGridIcon,
  PlusCircleIcon,
  UsersIcon,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function OnBoarding() {
  const [orgs, setOrgs] = useState<string[]>([]);

  return (
    <div className="flex w-full lg:gap-3">
      <OnBoardingSidebar />
      <TabsSection />
    </div>
  );
}
