import CategoryBar from "@components/category/CategoryNavigationBar";

interface RecommenderProps {
  children: React.ReactNode;
}

export default function Recommender({ children }: RecommenderProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-2 py-2 z-40 bg-background">
        <CategoryBar />
      </header>
      {children}
      <div>Navigation & Search bar</div>
    </div>
  );
}
