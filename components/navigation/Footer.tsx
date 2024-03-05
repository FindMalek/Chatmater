import { Input } from "@component/ui/Input";
import { Card, CardHeader, CardTitle } from "@component/ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@component/ui/Avatar";

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 bg-background flex items-center z-50">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-between space-x-4 py-1">
            <Avatar className="w-8 h-auto">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Input
              className="w-full max-h-8"
              placeholder="Search for a message, category, or user..."
            />
          </CardTitle>
        </CardHeader>
      </Card>
    </footer>
  );
}
