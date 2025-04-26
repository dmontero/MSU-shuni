"use server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/db";
import { SessionUserType } from "./types/SessionUser";

export const getUser = async (): Promise<SessionUserType | null> => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(
    process.env.NEXT_PUBLIC_SESSION_COOKIE_NAME!
  )?.value;
  if (!cookie) return null;

  const session = await prisma.session.findUnique({
    where: { id: cookie },
  });

  if (!session) return null;

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
  });

  if (!user) return null;

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    type: user.type,
    group: user.group,
    branch: user.branch,
  };
};

export const getUserOrThrow = async () => {
  const user = await getUser();
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};
