import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/Card";

export default function CategoryCard() {
  return (
    <Card className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="p-2 bg-blue-950/30">
        <CardTitle className="text-xl font-semibold text-white">🎁 Category</CardTitle>
        <CardDescription className="text-md text-gray-200">
          5 messages
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-gray-600">Description of the category</p>
      </CardContent>
    </Card>
  );
}
