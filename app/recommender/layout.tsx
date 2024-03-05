import Footer from "@component/navigation/Footer";
import CategoryBar from "@component/category/CategoryNavigationBar";
interface RecommenderProps {
  children: React.ReactNode;
}

export default function RecommenderLayout({ children }: RecommenderProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="z-40 bg-background sticky w-full">
        <CategoryBar />
      </header>
      {children}
      <Footer />
    </div>
  );
}
