import Link from "next/link";
import { cn } from "@/lib/utils";
import { Suspense } from "react";

import { buttonVariants } from "@component/ui/Button";
import { UserAuthForm, UserAuthSkeleton } from "@component/form/UserAuth";

export const metadata = {
  title: "Create your account",
};

export default function RegisterPage() {
  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/login"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        Login
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 lg:flex dark:border-r">
        <div className="absolute inset-0 bg-white-900" />
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "relative w-fit z-20 flex items-center text-lg font-semibold"
          )}
        >
          <span className="text-2xl">🤖</span> Chatmater
        </Link>
        <div></div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo; The next generation of chatbots is here. &rdquo;
            </p>
            <footer className="text-sm">@findmalek</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <span className="text-4xl">🤖</span>

            <h1 className="text-2xl font-semibold tracking-tight">
              Create your account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>

          <Suspense fallback={<UserAuthSkeleton />}>
            <UserAuthForm />
          </Suspense>

          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/about/terms"
              className="hover:text-brand underline underline-offset-4"
            >
              Terms of Service
            </Link>{" "}
            et{" "}
            <Link
              href="/about/privacy"
              className="hover:text-brand underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
