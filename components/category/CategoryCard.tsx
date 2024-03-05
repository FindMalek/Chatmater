import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@component/ui/Card";

export default function CategoryCard() {
  return (
    <Card className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="p-2">
        <CardTitle className="text-xl font-semibold text-white">
          🎁 Category
        </CardTitle>
        <CardDescription className="text-md text-gray-200">
          5 messages
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2">
        <p className="text-gray-500">Description of the category More text</p>
      </CardContent>
    </Card>
  );
}
