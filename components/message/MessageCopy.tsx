"use client";

import { useState } from "react";
import { Card } from "@component/ui/Card";
import { Icons } from "@component/ui/Icons";

export function MessageCopy({ message }: { message: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(message)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
      })
      .catch((err) => console.error("Could not copy text: ", err));
  };

  return (
    <Card
      onClick={handleCopyClick}
      className="flex items-start max-w-fit text-xs px-2 py-1 space-x-2 text-gray-500 hover:text-indigo-400 transition-colors duration-200 ease-in-out cursor-pointer"
    >
      {isCopied ? (
        <Icons.check className="w-3 h-3 text-indigo-400 shrink-0" />
      ) : (
        <Icons.copy className="w-3 h-3 shrink-0" />
      )}
      <p className="text-left font-mono transition-colors duration-200 ease-in-out">
        {message}
      </p>
    </Card>
  );
}
