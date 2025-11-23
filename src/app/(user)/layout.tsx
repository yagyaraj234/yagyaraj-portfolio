import { Navbar } from "../components/navbar";
import { UserInfo } from "../components/user-info";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl">
      <Navbar />
      <UserInfo />
      {children}
    </div>
  );
}
