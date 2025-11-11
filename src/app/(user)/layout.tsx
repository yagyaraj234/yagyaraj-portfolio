import { Navbar } from "../components/navbar";
import { UserInfo } from "../components/user-info";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <UserInfo />
      {children}
    </div>
  );
}
