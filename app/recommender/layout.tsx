import CategoryBar from "@components/category/CategoryNavigationBar";

interface RecommenderProps {
  children: React.ReactNode;
}

export default function RecommenderLayout({ children }: RecommenderProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-2 py-2 z-40 bg-background sticky top-0 z-10 w-full">
        <CategoryBar />
      </header>
      {children}
      <div>Navigation & Search bar</div>
    </div>
  );
}
