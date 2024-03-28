import Image from "next/image";

import { User } from "@prisma/client";

import { InputSearch } from "@component/navigation/InputSearch";
import { Card, CardHeader, CardTitle } from "@component/ui/Card";
import { UserDropdown } from "@component/navigation/UserDropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@component/ui/Avatar";
import { DropdownMenuTrigger, DropdownMenu } from "@component/ui/DropdownMenu";

export default function SearchBar({ user }: { user: User }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between space-x-4 py-1">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="w-8 h-auto">
                <AvatarImage src={user.image!} />
                <AvatarFallback>
                  <Image
                    src={`https://avatars.jakerunzer.com/${user.email}`}
                    alt="default"
                    width={32}
                    height={32}
                  />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <UserDropdown />
          </DropdownMenu>
          <InputSearch />
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
