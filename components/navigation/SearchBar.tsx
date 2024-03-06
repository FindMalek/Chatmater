import { Input } from "@component/ui/Input";
import { Card, CardHeader, CardTitle } from "@component/ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@component/ui/Avatar";

export default function SearchBar() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between space-x-4 py-1">
          <Avatar className="w-8 h-auto">
            <AvatarImage src="https://github.com/findmalek.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Input
            className="w-full max-h-8"
            placeholder="Search for a message, tag, category, or user..."
          />
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
