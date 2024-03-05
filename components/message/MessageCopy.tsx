"use client";

import { useState } from "react";
import { Icons } from "@component/global/Icons";
import { Card, CardDescription } from "@component/ui/Card";

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
        <Card className="rounded-sm max-w-fit">
            <CardDescription
                onClick={handleCopyClick}
                className="flex items-center text-xs px-2 py-1 space-x-2 text-gray-500  hover:text-blue-500 transition-colors duration-200 ease-in-out cursor-pointer"
            >
                {isCopied ? (
                    <Icons.check className="w-3 h-3 text-blue-500" />
                ) : (
                    <Icons.copy className="w-3 h-3" />
                )}
                <p className="font-mono transition-colors duration-200 ease-in-out">
                    {message}
                </p>
            </CardDescription>
        </Card>
    );
}
