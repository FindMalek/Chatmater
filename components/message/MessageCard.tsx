import { Card, CardTitle, CardHeader, CardContent } from "@component/ui/Card";
import { VersionTag } from "@component/ui/VersionTag";
import { Avatar, AvatarFallback, AvatarImage } from "@component/ui/Avatar";

import { MessageCopy } from "@component/message/MessageCopy";

function Message() {
  return (
    <div className="">
      <MessageCopy message="This is a message that is being copied" />
      <MessageCopy message="This is a message that is being copied" />
      <MessageCopy message="This is a message that is being copied" />
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
            <Avatar className="h-5 w-fit">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="ml-2 text-xs text-gray-200">
              A small description of what these messages talk about, dosent have
              to be long.
            </span>
          </div>
          <VersionTag tagType="version-1" />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <Message />
      </CardContent>
    </Card>
  );
}
