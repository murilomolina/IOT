import NextAuth from "next-auth";
// import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";
import GoogleProvider from "next-auth/providers/google";
import type { Provider } from "next-auth/providers";
import { locales, getPathnameLocale, getHeaderLocale } from "./locale";
import { supabase } from "@/lib/supabaseClient";

async function getUserByEmail(email: string) {
  try {
    const { data, error } = await supabase
      .from("user")
      .select("*")
      .eq("email", email);

    if (error) {
      console.error("Erro ao buscar usuário:", error);
      return null;
    }

    return data.length > 0 ? data[0] : null;
  } catch (err) {
    console.error("Erro inesperado ao buscar usuário:", err);
    return null;
  }
}

const providers: Provider[] = [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
  })
  
];

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider();
      return { id: providerData.id, name: providerData.name };
    } else {
      return { id: provider.id, name: provider.name };
    }
  })
  .filter((provider) => provider.id !== "credentials");

export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    async signIn({ user, account }) {
      console.log("Iniciando login para:", user.email);
    
      if (account?.provider === "google") {
        if (!user.email) {
          console.log("Usuário sem e-mail, acesso negado.");
          return false;
        }

        const userData = await getUserByEmail(user.email);

        if (!userData) {
          console.log(`Acesso negado para: ${user.email}, usuário não encontrado no banco.`);
          return false;  // bloqueia acesso
        }

        console.log(`Usuário autorizado: ${user.email}`);
      }

      return true; // permite acesso
    },
    
    authorized({ auth, request: { nextUrl, headers } }) {
     
      let locale = ""
      const { pathname } = nextUrl;

      const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
      );
      if (pathnameHasLocale) {
        console.log(`auth.ts pathnameHasLocale: ${pathnameHasLocale}`);
        locale = getPathnameLocale(pathname)
      } else {
        // Redirect if there is no locale
        locale = getHeaderLocale(headers);
        // nextUrl.pathname = `/${locale}${pathname}`;
        // return NextResponse.redirect(nextUrl);
      }

      console.log(`auth: ${JSON.stringify(auth)}`)
      const isLoggedIn = !!auth?.user;
      console.log(`isLoggedIn: ${JSON.stringify(isLoggedIn)}`)

      const isOnDashboard = nextUrl.pathname.startsWith(`/${locale}/dashboard`);
      console.log(`isOnDashboard: ${JSON.stringify(isOnDashboard)}`)

      if (isOnDashboard) {
        console.log(`Enter dashboard with isLoggedIn: ${isLoggedIn}`)
        if (isLoggedIn) {
          return true; // Enter in Dashboard
        } else {
          return false; // Redirect unauthenticated users to login page // ok
        }
      } else if (isLoggedIn) {
        console.log(`Not in dashboard with isLoggedIn: ${isLoggedIn}`)
        return true;
      }
      console.log(`Not in dashboard no login verify`)

      return true;
    },
  },

  providers,
  pages: {
    signIn: `/login`,
    error: `/error`
  },
});
