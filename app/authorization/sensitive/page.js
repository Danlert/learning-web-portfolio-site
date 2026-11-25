"use client";

import { redirect } from "next/navigation";
import { useUserAuth } from "@/_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth();

  if (user === null) {
    redirect("/authorization");
  }

  return (
    <main>
      <h1>This is a secret page homepage </h1>
    </main>
  );
}
