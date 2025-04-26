import { Branch, UserType } from "@/app/generated/prisma";

export type SessionUserType = {
  id: string;
  email: string | null;
  name: string | null;
  type: UserType;
  group: string | null;
  branch: Branch | null;
};
