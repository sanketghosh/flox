// PACKAGES
import { SailboatIcon } from "lucide-react";
import { Link } from "react-router-dom";

// COMPONENTS
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <nav className="h-12 border-b md:h-14">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-3">
        <Link to={"/"} className="flex items-center gap-1 text-blue-700">
          <SailboatIcon size={24} />
          <h1 className="text-xl font-semibold md:text-2xl">Flox</h1>
        </Link>

        <div></div>

        <Link to={"/"}>
          <Avatar>
            <AvatarFallback>SG</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </nav>
  );
}
