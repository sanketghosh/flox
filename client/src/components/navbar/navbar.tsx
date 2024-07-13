// PACKAGES
import { Link } from "react-router-dom";
import { useGetUserDataFromLocalStorage } from "@/hooks/auth-hooks/use-get-user-data-from-local-storage";

// COMPONENTS
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import AppLogo from "@/components/logo/app-logo";

export default function Navbar() {
  const userData = useGetUserDataFromLocalStorage();

  return (
    <nav className="sticky left-0 right-0 top-0 z-50 border-b bg-background">
      <div className="mx-auto flex h-12 w-full max-w-7xl items-center justify-between px-3 md:h-14">
        <AppLogo size={22} className="text-2xl" />

        <Link to={"/profile"}>
          <Avatar>
            <AvatarFallback className="text-xl font-bold">
              {userData.firstName?.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </nav>
  );
}
