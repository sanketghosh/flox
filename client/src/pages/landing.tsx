import { Button } from "@/components/ui/button";
import { SailboatIcon } from "lucide-react";

export default function Landing() {
  return (
    <main className="h-screen min-h-screen">
      <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center space-y-5 px-5 py-4">
        <SailboatIcon size={250} className="text-blue-700" />
        <div className="mx-auto max-w-5xl">
          <h1 className="text-center text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
            Ditch the Drowning, Embrace the Flow, Streamline Productivity.
          </h1>
          <p className="mt-5 text-center text-base text-muted-foreground md:text-lg">
            Flox is a task management system which helps you to visualize your
            tasks, issues, boost efficiency, and keep campaigns on track. Watch
            your ideas move from brainstorm to brilliant execution.
          </p>
        </div>

        <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-blue-700 px-6 py-2 font-normal text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
          <span className="text-lg font-semibold">Get Started</span>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
            <div className="relative h-full w-8 bg-white/20" />
          </div>
        </button>
      </div>
    </main>
  );
}
