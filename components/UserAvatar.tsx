import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/HoverCard";
import { Icons } from "@component/ui/Icons";
import { TeamTag } from "@component/ui/Tag";
import { Avatar, AvatarFallback, AvatarImage } from "@component/ui/Avatar";

export function UserAvatar({ children }: { children: React.ReactNode }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/findmalek.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-semibold">FindMalek</h4>
              <TeamTag tagName="team-gigi" />
            </div>

            <p className="text-sm">
              Hello there! I&apos;m a software engineer and I love it
            </p>
            <div className="flex items-center pt-2">
              <Icons.calendar className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
