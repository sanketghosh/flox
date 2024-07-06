import Navbar from "@/components/navbar/navbar";

type UsersLayoutProps = {
  children?: React.ReactNode;
};

export default function UsersLayout({ children }: UsersLayoutProps) {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-7xl space-y-5 px-3">{children}</div>
    </div>
  );
}
