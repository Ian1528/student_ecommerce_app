import { redirect } from "next/navigation";
import { auth } from "~/server/auth/index";
import Component from "./component";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student E-Commerce App | Login",
  description: "Student E-Commerce App Login",
};

export default async function SignInPage() {
  // if signed in, redirect to home
  const session = await auth();
  if (session) {
    redirect("/");
  }

  return (
    <div className="flex flex-col gap-2">
      <Component />
    </div>
  );
}
