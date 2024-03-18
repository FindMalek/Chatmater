import { InputSearch } from "@component/navigation/InputSearch";
import { Card, CardHeader, CardTitle } from "@component/ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@component/ui/Avatar";

import { User } from "@prisma/client";

export default function SearchBar({ user }: {
  user: User;
}) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between space-x-4 py-1">
          <Avatar className="w-8 h-auto">
            <AvatarImage src="https://github.com/findmalek.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <InputSearch />
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
