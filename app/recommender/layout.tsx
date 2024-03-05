import SearchBar from "@component/navigation/SearchBar";
import CategoryBar from "@component/category/CategoryNavigationBar";

interface RecommenderProps {
  children: React.ReactNode;
}

export default function RecommenderLayout({ children }: RecommenderProps) {
  return (
    <div className="flex flex-col">
      <header className="z-40 bg-background sticky top-0 w-full">
        <CategoryBar />
      </header>

      <main className="flex-1 py-1">{children}</main>

      <footer className="inset-x-0 bottom-0 sticky bg-background flex items-center z-50">
        <SearchBar />
      </footer>
    </div>
  );
}
