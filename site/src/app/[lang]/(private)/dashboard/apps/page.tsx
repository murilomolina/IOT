import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  if (!session?.user) return null;

  return (
    <>
      <div className="flex md:max-h-screen sm:max-h-screen items-center justify-center transition-all p-4">
        <div className="rounded-2xl bg-gray-800 shadow-2xl p-4 sm:p-6 md:p-8 w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl animate-fade-in">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl font-semibold text-white">
              Olá, <span className="font-bold text-blue-400">{session?.user.name}</span>!
            </h1>
            <p className="text-md sm:text-lg text-gray-300 mt-2">
              Escolha um aplicativo para continuar.
            </p>
          </div>

          {/* Grid container for cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Card 1 */}
            <Link
              href="/dashboard/apps/calculo-inclinacao"
              className="group flex flex-col items-center justify-between bg-gradient-to-tl from-blue-400 to-blue-700 text-white rounded-xl shadow-lg hover:scale-105 transition-all p-4 sm:p-6 space-y-3 sm:space-y-4 backdrop-blur-md"
            >
              <Image className="object-contain h-16 sm:h-24" src='/assets/images/logo.png' alt="APP" width={100} height={100} />
              <h2 className="text-md sm:text-lg font-semibold tracking-wide text-white">App1</h2>
            </Link>

            {/* Card 2 */}
            <Link
              href="/dashboard/apps/procuracao"
              className="group flex flex-col items-center justify-between bg-gradient-to-tl from-indigo-400 to-indigo-700 text-white rounded-xl shadow-lg hover:scale-105 transition-all p-4 sm:p-6 space-y-3 sm:space-y-4 backdrop-blur-md"
            >
              <Image className="object-contain h-16 sm:h-24" src='/assets/images/logo.png' alt="APP" width={100} height={100} />
              <h2 className="text-md sm:text-lg font-semibold tracking-wide text-white">App2</h2>
            </Link>

            {/* Card 3 */}
            <Link
              href="/dashboard/apps/bf"
              className="group flex flex-col items-center justify-between bg-gradient-to-tl from-blue-600 to-green-800 text-white rounded-xl shadow-lg hover:scale-105 transition-all p-4 sm:p-6 space-y-3 sm:space-y-4 backdrop-blur-md"
            >
              <Image className="object-contain h-16 sm:h-24" src='/assets/images/logo.png' alt="APP" width={100} height={100} />
              <h2 className="text-md sm:text-lg font-semibold tracking-wide text-white">App3</h2>
            </Link>

            {/* Card 4 */}
            <Link
              href="/dashboard/apps/doc-bf-eiv"
              className="group flex flex-col items-center justify-between bg-gradient-to-tl from-green-700 to-blue-800 text-white rounded-xl shadow-lg hover:scale-105 transition-all p-4 sm:p-6 space-y-3 sm:space-y-4 backdrop-blur-md"
            >
              <Image className="object-contain h-16 sm:h-24" src='/assets/images/logo.png' alt="APP" width={100} height={100} />
              <h2 className="text-md sm:text-lg font-semibold tracking-wide text-white">App4</h2>
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}
