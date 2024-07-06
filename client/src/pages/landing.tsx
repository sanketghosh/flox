/* PACKAGES */
import {
  GithubIcon,
  MoveLeftIcon,
  MoveRightIcon,
  SailboatIcon,
} from "lucide-react";
import { useState } from "react";

/* COMPONENTS */
import LoginForm from "@/components/auth/login-form";
import RegisterForm from "@/components/auth/register-form";
import { Button } from "@/components/ui/button";
import Hero from "@/components/landing/hero";
import { cn } from "@/lib/utils";

export default function Landing() {
  const [loginCard, setLoginCard] = useState<boolean>(true);
  const [getStarted, setGetStarted] = useState<boolean>(false);

  const handleToggleAuthForm = () => {
    setLoginCard(!loginCard);
  };

  const handleToggleGetStarted = () => {
    setGetStarted(!getStarted);
  };

  return (
    <main className="h-full w-full">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-5 py-8 lg:flex-row">
        {
          <Hero
            onClickGetStarted={handleToggleGetStarted}
            getStarted={getStarted}
          />
        }
        <div
          className={cn(
            "lg:flex-1",
            getStarted && "flex flex-col items-center justify-center",
          )}
        >
          {getStarted && (
            <div className="flex w-full justify-start md:w-[470px] lg:w-[500px]">
              <Button
                className="mb-3 flex items-center gap-1"
                variant={"ghost"}
                size={"sm"}
                onClick={handleToggleGetStarted}
              >
                <MoveLeftIcon size={18} />
                <p>Go Back</p>
              </Button>
            </div>
          )}
          {loginCard && (
            <LoginForm
              isLoginCard={loginCard}
              toggleAuthCard={handleToggleAuthForm}
            />
          )}
          {!loginCard && (
            <RegisterForm
              isLoginCard={loginCard}
              toggleAuthCard={handleToggleAuthForm}
            />
          )}
        </div>
      </div>
    </main>
  );
}
