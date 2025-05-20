"use client";

import * as Icons from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Dashboard", href: "/dashboard/", icon: Icons.Squares2X2Icon },
  { name: "Apps", href: "/dashboard/apps", icon: Icons.CubeIcon },
  { name: "Settings", href: "/dashboard/settings", icon: Icons.Cog6ToothIcon },
  // { name: "Calendar", href: "/dashboard/calendar", icon: Icons.CalendarIcon },
  { name: "Site", href: "/", icon: Icons.HomeIcon },
];

// export default function Sidebar() {
//   const pathname = usePathname() || "";

//   return (
//     <nav className={clsx("h-screen py-4 w-48 p-1 bg-white dark:bg-gray-500 overflow-y-hidden")}> 
//       <ul className="space-y-2 mt-4">
//         {links.map((link) => {
//           const LinkIcon = link.icon;
//           return (
//             <li key={link.name}>
//               {link.blank ? (
//                 <button
//                   onClick={() => window.open(link.href, "_blank", "noopener,noreferrer")}
//                   className={clsx(
//                     "flex items-center gap-2 p-2 rounded-md hover:bg-gray-100",
//                     pathname === link.href && "bg-gray-200"
//                   )}
//                 >
//                   <LinkIcon className="w-6 h-6" />
//                   <span>{link.name}</span>
//                 </button>
//               ) : (
//                 <Link
//                   href={link.href}
//                   className={clsx(
//                     "flex items-center gap-2 p-2 rounded-md hover:bg-gray-100",
//                     pathname === link.href && "bg-gray-200"
//                   )}
//                 >
//                   <LinkIcon className="w-6 h-6" />
//                   <span>{link.name}</span>
//                 </Link>
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// }

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] text-white grow items-center justify-center border border-gray-600 gap-2 rounded-md bg-gray-800 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-gray-800 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

// export default function NavLinks() {
//   const pathname = usePathname();

//   return (
//     <nav className="flex flex-col space-y-2 md:space-y-1 w-full">
//       {links.map((link) => {
//         const LinkIcon = link.icon;

//         return (
//           <Link
//             key={link.name}
//             href={link.href}
//             className={clsx(
//               "flex h-12 w-full items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium transition-all duration-300 ease-in-out",
//               "hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white",
//               pathname === link.href
//                 ? "bg-blue-600 text-white shadow-md dark:bg-blue-500"
//                 : "bg-gray-800 text-gray-300 dark:bg-gray-900 dark:text-gray-400"
//             )}
//           >
//             <LinkIcon className="w-6 h-6 text-current" />
//             <span className="hidden md:block">{link.name}</span>
//           </Link>
//         );
//       })}
//     </nav>
//   );
// }