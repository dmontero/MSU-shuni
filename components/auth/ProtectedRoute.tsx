"use client";
import { SessionUserType } from "@/lib/auth/types/SessionUser";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import React from "react";

function ProtectedRoute({
  children,
  user,
}: {
  children: React.ReactNode;
  user: SessionUserType | null;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Manda a la página de login si no hay usuario
  if (user === null) {
    const params = new URLSearchParams();

    const forwardUrl = `${pathname}${
      searchParams.toString() ? `?${searchParams}` : ""
    }`;

    params.set("forward", forwardUrl);
    redirect(`/login?${params}`);
  }

  return <>{children}</>;
}

export default ProtectedRoute;
