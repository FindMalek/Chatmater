import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

import { Icons } from "@/components/Icons";

export default function CategoryNavigationBar() {
  return (
    <Card className="-py-4">
      <CardHeader className="-py-4">
        <CardTitle className="flex items-center space-x-4 text-xl font-bold">
          <Icons.menu className="w-6 h-6" />
          <span>Text Categories</span>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
