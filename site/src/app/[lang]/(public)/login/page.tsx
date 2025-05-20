import Image from "next/image";
// import { Button } from "../../../ui/button";
// import { redirect } from "next/navigation";
// import { signIn, auth, providerMap } from "@/auth";
// import { AuthError } from "next-auth";
import { noto_serif } from "../../../ui/fonts";
import { SignIn } from "@/app/ui/auth/signin-button";
import Link from "next/link";

export default async function Page() {
//   {
//   // searchParams,
// }: {
//   // searchParams: Promise<{ callbackUrl: string | undefined }>;
// }
  // const SIGNIN_ERROR_URL = "/";

  // const sP = await searchParams;

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-700 from-gray-900 relative">
      {/* Botão de voltar */}
      <Link
        href="/"
        className="absolute top-5 left-5 flex items-center space-x-2 hover:text-gray-600 text-white hover:text-gray-400 transition duration-200"
      >
        <span className="text-lg font-medium">Voltar</span>
      </Link>

      {/* Main Container */}
      <div className="flex flex-col justify-center items-center p-8 space-y-12 bg-white bg-opacity-80 rounded-xl shadow-2xl w-full max-w-md">
        {/* Logo container */}
        <div className="mb-6">
          <Image
            className="shadow-lg"
            src="/assets/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>

        {/* Title */}
        <h1
          className={`text-4xl sm:text-5xl font-bold text-gray-800 ${noto_serif.className} tracking-wide`}
        >
          Login
        </h1>


          {/* Button and Sign-in section with increased spacing */}
          {/* <div className="space-y-5">
            {Object.values(providerMap).map((provider) => (
              <form
                key={provider.id}
                className="space-y-4"
                action={async () => {
                  "use server";
                  try {
                    await signIn(provider.id, {
                      // redirectTo: sP?.callbackUrl ?? "/dashboard",
                      redirectTo:  "/dashboard",
                    });
                  } catch (error) {
                    if (error instanceof AuthError) {
                      return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`);
                    }
                    throw error;
                  }
                }}
              >
                <Button
                  className="space-x-5 rounded-full bg-white px-6 py-3 sm:px-7 sm:py-4 transition duration-150 ease-in hover:bg-neutral-300"
                  style={{ boxShadow: "8px 8px 25px rgba(0,0,0,.2)" }}
                >
                  <span className="text-center text-black text-[0.825rem] uppercase tracking-wider">ENTRAR COM</span>
                  <Image src="/assets/images/microsoft365-logo.svg" alt="Microsoft" width={100} height={100} />
                </Button>
              </form>
            ))}
          </div> */}
        <SignIn />
        <div className="text-sm text-gray-500 text-center mt-6">
          <p>Ao entrar, você concorda com nossos Termos de Serviço e Política de Privacidade.</p>
        </div>
      </div>
    </main>
  );
}
