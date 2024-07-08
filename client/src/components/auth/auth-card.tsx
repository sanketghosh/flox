import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AppLogo from "@/components/logo/app-logo";

type AuthCardProps = {
  cardTitle?: string;
  cardDescription?: string;
  children: React.ReactNode;
  toggleAuthCard?: () => void;
  isLoginCard?: boolean;
};

export default function AuthCard({
  children,
  cardTitle,
  cardDescription,
  isLoginCard,
  toggleAuthCard,
}: AuthCardProps) {
  return (
    <Card className="w-full rounded-lg shadow-md md:w-[470px] lg:w-[500px]">
      <CardHeader>
        <CardTitle>
          <AppLogo size={22} />
        </CardTitle>
        <CardDescription className="text-base">
          {cardDescription}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex w-full items-center justify-center">
        {isLoginCard ? (
          <Button variant={"link"} onClick={toggleAuthCard}>
            Don't have an account ? Register
          </Button>
        ) : (
          <Button variant={"link"} onClick={toggleAuthCard}>
            Already have an account ? Login
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
