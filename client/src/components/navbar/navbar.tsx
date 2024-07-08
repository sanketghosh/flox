// PACKAGES
import { Link } from "react-router-dom";

// COMPONENTS
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import AppLogo from "@/components/logo/app-logo";

export default function Navbar() {
  return (
    <nav className="sticky left-0 right-0 top-0 z-50 border-b bg-background">
      <div className="mx-auto flex h-12 w-full max-w-7xl items-center justify-between px-3 md:h-14">
        <AppLogo size={22} className="text-2xl" />

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
