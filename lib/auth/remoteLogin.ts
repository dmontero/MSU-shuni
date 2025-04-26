"use server";

import { prisma } from "@/lib/db";
import createSession from "./createSession";
import { RemoteUserType } from "./types/RemoteUserType";

const remoteLogin = async (code: string) => {
  const tokenResponse = await fetch(process.env.SSO_TOKEN_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: process.env.NEXT_PUBLIC_SSO_CLIENT_ID!,
      client_secret: process.env.SSO_CLIENT_SECRET!,
      code,
    }),
  });

  if (!tokenResponse.ok) {
    return { success: false, error: "Token request failed" };
  }

  const { access_token }: { access_token: string } = await tokenResponse.json();

  const userResponse = await fetch(process.env.SSO_USER_URL!, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!userResponse.ok) {
    return { success: false, error: "User request failed" };
  }

  const user = (await userResponse.json()) as RemoteUserType;

  const dbUser = await prisma.user.upsert({
    where: { ssoUserId: user.id },
    create: {
      ssoUserId: user.id,
      name: user.name,
      email: user.email,
      type: user.type,
      group: user.group,
      branch: user.branch,
    },
    update: {
      name: user.name,
      email: user.email,
      type: user.type,
      group: user.group,
      branch: user.branch,
    },
  });

  await createSession(dbUser);
  return { success: true };
};

export default remoteLogin;
