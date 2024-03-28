"use client";

import { signOut } from "next-auth/react";
import { DropdownMenuItem } from "@component/ui/DropdownMenu";

export function SignoutButton() {
  return (
    <DropdownMenuItem
      className="text-red-600 cursor-pointer"
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </DropdownMenuItem>
  );
}
