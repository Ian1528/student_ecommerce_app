/**
 * v0 by Vercel.
 * @see https://v0.dev/t/r9jJQ5aaIlC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { signOut } from "~/server/auth/index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student E-commerce App | Logout",
  description: "Student E-commerce App Logout",
};
export default function Component() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-[#f0f6ff] dark:bg-[#5c1cff]">
      <div className="mx-auto max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-[#1761ff]">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-[#1761ff]">Sign Out</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Are you sure you want to sign out?
          </p>
        </div>
        <div className="space-y-4">
          <form
            action={async (formData) => {
              "use server";
              await signOut({ redirectTo: "/login" });
            }}
          >
            <Button
              type="submit"
              className="w-full rounded-md bg-[#1761ff] text-white hover:bg-[#548aff] focus:ring-[#548aff]"
            >
              Sign Out
            </Button>
          </form>
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center rounded-md bg-white text-[#1761ff] border border-[#1761ff] hover:bg-[#548aff] hover:text-[#fff] focus:ring-[#548aff]"
            prefetch={false}
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
