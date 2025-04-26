"use server";
import crypto from "crypto";
import { setTokenCookie } from "./cookie";
import { prisma } from "@/lib/db";

const createSession = async (user: { id: string }) => {
  const session = await prisma.session.create({
    data: {
      userId: user.id,
      token: crypto.randomBytes(32).toString("hex"),
    },
  });

  await setTokenCookie(session.id);
};

export default createSession;
