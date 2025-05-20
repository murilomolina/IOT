import { signOut } from "@/auth";
import { Button } from "@/ui/button";

import PowerIcon from "@heroicons/react/24/outline/PowerIcon";

// export function SignOut() {
export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
      className="w-full"
    >
      <Button
        variant="ghost"
        className="flex items-center justify-center gap-2 rounded-md bg-gray-100 text-gray-900 p-3 text-sm font-medium hover:bg-gray-200 hover:text-gray-400 md:flex-none md:justify-start md:p-2 md:px-3"
        {...props}
      >
        {/* SignOut */}
        <PowerIcon className="w-6" />
      </Button>
    </form>
  );
}
