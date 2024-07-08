import { cn } from "@/lib/utils";
import { SailboatIcon } from "lucide-react";
import { Link } from "react-router-dom";

type AppLogoType = {
  size: number;
  className?: string;
};

export default function AppLogo({ size, className }: AppLogoType) {
  return (
    <Link to={"/"} className="flex items-center gap-1">
      <SailboatIcon size={size} />
      <h1 className={cn("font-semibold", className)}>Flox</h1>
    </Link>
  );
}
