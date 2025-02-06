import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

export default function BlogLayout({ children }: any) {
  return (
    <div className="normal-case relative h-screen min-h-screen flex flex-col scrollbar-none scrollbar">
      <Navbar />
      <main className="flex-1 overflow-y-auto">{children}</main>
      <Footer />
    </div>
  );
}
