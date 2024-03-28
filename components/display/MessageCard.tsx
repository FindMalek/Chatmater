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
import { MessageCopy } from "@component/display/MessageCopy";

import { ClusterType, MessageType } from "@/types/cluster";

function Message({ messages }: { messages: MessageType[] }) {
  return (
    <div>
      {messages.map((message) => (
        <MessageCopy key={message.id} message={message.content} />
      ))}
    </div>
  );
}

export default async function MessageCard({
  cluster,
}: {
  cluster: ClusterType;
}) {
  return (
    <Card className="mx-auto rounded-lg">
      <CardHeader className="p-2">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <UserAvatar user={cluster.user}>
              <Avatar className="h-5 w-5">
                <AvatarImage src={cluster.user.avatar} />
                <AvatarFallback>{cluster.user.username[0]}</AvatarFallback>
              </Avatar>
            </UserAvatar>
            <p className="ml-2 text-xs text-gray-200">
              {cluster.details.about}
            </p>
          </div>
          <VersionTag
            tagType={cluster.details.version}
            maxVersion={cluster.details.maxVersion}
          />
        </CardTitle>
      </CardHeader>

      <Message messages={cluster.messages} />

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
