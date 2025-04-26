"use client";

import { useSearchParams } from "next/navigation";

const SSOLoginButton = () => {
  const searchParams = useSearchParams();

  const forward = searchParams.get("forward") || "/";

  const loginUrl = new URL("https://sherpa.msu.edu.uy/auth/authorize");
  loginUrl.searchParams.append(
    "client_id",
    process.env.NEXT_PUBLIC_SSO_CLIENT_ID!
  );
  loginUrl.searchParams.append(
    "redirect_uri",
    `${
      process.env.NEXT_PUBLIC_BASE_URL
    }/auth/callback?forward=${encodeURIComponent(forward)}`
  );

  return <a href={loginUrl.toString()}>Acceder</a>;
};

export default SSOLoginButton;
