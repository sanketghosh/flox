import { TriangleAlertIcon } from "lucide-react";

type ErrorMessageProps = {
  errorMessage: string;
};

export default function ErrorMessage({ errorMessage }: ErrorMessageProps) {
  return (
    <div className="flex items-center gap-2 rounded-md border-2 border-red-700 bg-red-300/70 px-4 py-2 text-red-700">
      <TriangleAlertIcon size={18} />
      <h2 className="text-sm md:text-base">{errorMessage}</h2>
    </div>
  );
}
