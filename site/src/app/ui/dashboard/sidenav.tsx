// import Link from "next/link";
import NavLinks from "./nav-links";

export function SidenavMobile() {
  return (
    <div className="fixed inset-x-0 bottom-0 flex flex-row justify-between space-x-2 p-3">
      <NavLinks />
    </div>
  );
}

// export function SidenavMobile() {
//   return (
//     <div className="fixed inset-x-0 bottom-0 w-full bg-blue-900 text-white shadow-lg p-3">
//       <NavLinks />
//     </div>
//   );
// }


export function SidenavDesktop() {
  return (
    <div className="flex flex-col px-3 mt-8">
    {/* <Link
      className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
      href="/"
    >
      <div className="w-32 text-white md:w-40">
        sair
      </div>
    </Link> */}
    {/* <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2"> */}
    <div className="flex grow justify-between md:flex-col md:space-x-0 md:space-y-2">
    <NavLinks />
      {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div> */}
    </div>
  </div>
  );
}
