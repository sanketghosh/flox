// PACKAGES
import { GithubIcon, MoveRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// COMPONENTS
import AppLogo from "@/components/logo/app-logo";
import { Button } from "@/components/ui/button";

type HeroProps = {
  onClickGetStarted: () => void;
  getStarted: boolean;
};

export default function Hero({ onClickGetStarted, getStarted }: HeroProps) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-3 sm:max-w-xl sm:items-center sm:text-center md:max-w-2xl lg:max-w-full lg:flex-1 lg:items-start lg:text-left",
        getStarted && "hidden",
      )}
    >
      <AppLogo size={32} className="text-4xl" />
      <h1 className="text-3xl font-semibold capitalize text-teal-500 md:text-4xl lg:text-5xl">
        Collaborate, manage, create in the rapidest way possible.
      </h1>
      <p className="text-base text-muted-foreground md:text-lg">
        Flox is modern kanban style application for project and task management.
        It makes collaboration and management with your teammates much faster
        and easier.
      </p>
      <div className="flex flex-col gap-4 capitalize sm:flex-row">
        <Button variant={"outline"} size={"sm"} asChild>
          <a
            href="https://github.com/sanketghosh"
            target="_blank"
            className="flex items-center gap-1"
          >
            <GithubIcon size={18} />
            <p>Start the project</p>
          </a>
        </Button>
        <Button
          className="flex select-none items-center gap-1"
          size={"sm"}
          onClick={onClickGetStarted}
        >
          <p>It's easy to get started</p>
          <MoveRightIcon size={18} />
        </Button>
      </div>
    </div>
  );
}
