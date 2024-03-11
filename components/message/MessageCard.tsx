import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@component/ui/Tooltip";
import { Icons } from "@component/ui/Icons";
import { Button } from "@component/ui/Button";
import { VersionTag } from "@component/ui/Tag";
import { Avatar, AvatarFallback, AvatarImage } from "@component/ui/Avatar";
import { Card, CardTitle, CardHeader, CardContent } from "@component/ui/Card";

import { UserAvatar } from "@component/UserAvatar";
import { MessageCopy } from "@component/message/MessageCopy";

function Message() {
  return (
    <div>
      <MessageCopy message="This is a message that is being copied" />
      <MessageCopy message="This is a longer message than the previous one because i'm not sure of the cards length so far it looks good" />
      <MessageCopy message="I really think that min-w-fit looks good what do u think of that class?" />
      <MessageCopy message="This is a message that is being copied" />
    </div>
  );
}

export default function MessageCard() {
  return (
    <Card className="mx-auto rounded-lg">
      <CardHeader className="p-2">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <UserAvatar>
              <Avatar className="h-5 w-5">
                <AvatarImage src="https://github.com/findmalek.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </UserAvatar>
            <p className="ml-2 text-xs text-gray-200">
              A small description of what these messages talk about, dosent have
              to be long.
            </p>
          </div>
          <VersionTag tagType="version-100" />
        </CardTitle>
      </CardHeader>
      <Message />
      <CardContent className="p-1 px-2">
        <TooltipProvider>
          <div className="flex items-center justify-between">
            <div className="space-x-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Icons.copy className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copies the next message to the clipboard.</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" disabled>
                    <Icons.send className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="whitespace-pre-line">
                    Automatically sends messages
                  </p>
                  <p className="whitespace-pre-line">
                    (I need API endpoints from Achref to implement this feature)
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="space-x-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Icons.chevronLeft className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Go to the previous message in the thread.</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Icons.chevronRight className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Go to the next message in the thread.</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Icons.edit className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Edit the message.</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
}
