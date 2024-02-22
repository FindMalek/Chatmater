import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

export default function CategoryCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Category</CardTitle>
        <CardDescription>Description of the category</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content</p>
      </CardContent>
      <CardFooter>
        <p>Footer</p>
      </CardFooter>
    </Card>
  );
}
