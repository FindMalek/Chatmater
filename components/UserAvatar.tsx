import { UserType } from "@/types/user";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/HoverCard";
import { Icons } from "@component/ui/Icons";
import { TeamTag } from "@component/ui/Tag";
import { Avatar, AvatarFallback, AvatarImage } from "@component/ui/Avatar";

export function UserAvatar({
  children,
  user,
}: {
  children: React.ReactNode;
  user: UserType;
}) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="w-fit">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user.username[0]}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-semibold">{user.username}</h4>
              <TeamTag tagName={user.team} />
            </div>
            <p className="text-sm max-w-[200px]">{user.about}</p>
            <div className="flex items-center pt-2">
              <Icons.calendar className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Joined on{" "}
                {new Date(user.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
