"use server";

import { cookies } from "next/headers";

export async function setTokenCookie(sessionId: string) {
  const cookieStore = await cookies();

  cookieStore.set(process.env.NEXT_PUBLIC_SESSION_COOKIE_NAME!, sessionId, {
    httpOnly: true,
    secure: process.env.VERCEL_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function deleteTokenCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(process.env.NEXT_PUBLIC_SESSION_COOKIE_NAME!);
}
