// @ts-nocheck
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FgckyDvpe1M
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "~/components/ui/button";
import { signIn } from "~/server/auth/index";
import { AuthError } from "next-auth";
export default function Component() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center">
      <div className="mx-auto max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Sign in to your account using your Google account.
          </p>
        </div>
        <form
          action={async () => {
            "use server";
            try {
              await signIn("google", { redirectTo: "/" });
            } catch (error) {
              // Signin can fail for a number of reasons, such as the user
              // not existing, or the user not having the correct role.
              // In some cases, you may want to redirect to a custom error
              if (error instanceof AuthError) {
                return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`);
              }

              // Otherwise if a redirects happens NextJS can handle it
              // so you can just re-thrown the error and let NextJS handle it.
              // Docs:
              // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
              throw error;
            }
          }}
        >
          <Button variant="outline" className="w-full rounded-md" type="submit">
            <ChromeIcon className="mr-2 h-5 w-5" />

            <span>Sign in with Google</span>
          </Button>
        </form>
      </div>
    </div>
  );
}

function ChromeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}
