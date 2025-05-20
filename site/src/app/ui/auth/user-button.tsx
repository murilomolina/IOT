import {
  Avatar,
  // AvatarFallback,
  AvatarImage,
} from "@/ui/avatar";
import { Button } from "@/ui/button";
import { auth } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
// import { SignIn } from "@/ui/auth/signin-button";
import { SignOut } from "@/ui/auth/signout-button";
// import Link from "next/link";
// import * as Icons from "@heroicons/react/24/outline";


export default async function UserButton() {
  const session = await auth();
  if (!session?.user) return null
  // (<Link
  //   className="flex items-center justify-center gap-2 rounded-full  border-transparent bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold text-sm sm:text-base h-auto py-1 sm:h-8 px-3 sm:px-4 shadow-md transition-all duration-300 hover:brightness-110 hover:shadow-lg dark:from-blue-500 dark:to-blue-700"
  //   href="/api/auth/signin"
  // >
  //   <Icons.Squares2X2Icon className="w-5 h-5" />
  // </Link>)

  // <SignIn />;
  return (
    <div className="flex items-center gap-2">
      {/* <span className="text-sm text-white font-semibold">
        {session.user.email}
      </span> */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={
                  session.user.image ??
                  `https://api.dicebear.com/9.x/thumbs/svg?seed=${Math.floor(Math.random() * 100000) + 1
                  }&randomizeIds=true`
                }
                alt={session.user.name ?? ""}
              />
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1 text-white">
              <p className="text-sm font-bold leading-none">
                {session.user.name}
              </p>
              <p className="text-muted-foreground text-xs leading-none">
                {session.user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            {/* DISCOVER WHY INSIDE DROPDOWNMENUITEM THE ACTION SIGNOUT NOT WORKS */}
          </DropdownMenuItem>
          <SignOut />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
