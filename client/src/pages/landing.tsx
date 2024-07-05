/* PACKAGES */
import { MoveRightIcon, SailboatIcon } from "lucide-react";
import { useState } from "react";

/* COMPONENTS */
import LoginForm from "@/components/auth/login-form";
import RegisterForm from "@/components/auth/register-form";

export default function Landing() {
  const [loginCard, setLoginCard] = useState<boolean>(true);

  const handleToggleAuthForm = () => {
    setLoginCard(!loginCard);
  };

  return (
    <main className="h-full w-full">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-5 py-8 lg:flex-row">
        <div className="flex flex-col space-y-3 sm:max-w-xl sm:items-center sm:text-center md:max-w-2xl lg:max-w-full lg:flex-1 lg:items-start lg:text-left">
          <div className="flex items-center gap-1">
            <SailboatIcon className="size-9" />
            <p className="text-4xl font-semibold">Flox</p>
          </div>
          <h1 className="text-3xl font-semibold capitalize md:text-4xl lg:text-5xl">
            Collaborate, manage, create in the rapidest way possible.
          </h1>
          <p className="text-base text-muted-foreground md:text-lg">
            Flox is modern kanban style application for project and task
            management. It makes collaboration and management with your
            teammates much faster and easier.
          </p>
          <div className="flex w-fit select-none items-center gap-1 rounded-full bg-foreground px-5 py-1 text-sm font-medium text-background">
            <p>It's easy to get started</p>
            <MoveRightIcon size={18} />
          </div>
        </div>
        <div className="lg:flex-1">
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
