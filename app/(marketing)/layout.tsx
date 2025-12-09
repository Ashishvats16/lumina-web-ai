import { Header } from "@/components/layout/Header";
import Footer from "@/components/sections/FooterSection";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-2">{children}</main>
      <Footer />
    </>
  );
}
