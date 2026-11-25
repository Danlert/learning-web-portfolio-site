"use client";
import { useUserAuth } from "@/_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main>
      {user ? (
        <>
          <h1 className="text-2xl">Welcome</h1>
          <button
            onClick={firebaseSignOut}
            className="bg-amber-100 rounded-md p-5 text-cyan-950 hover:bg-amber-50 active:bg-blue-700"
          >
            Log Out
          </button>
          <Link href="authorization/sensitive">Link to sensitive page</Link>
        </>
      ) : (
        <>
          <button
            onClick={gitHubSignIn}
            className="bg-amber-100 rounded-md p-5 text-cyan-950 hover:bg-amber-50 active:bg-blue-700"
          >
            Log In
          </button>
        </>
      )}
    </main>
  );
}
