"use client";
import { useEffect, use } from "react";
import remoteLogin from "@/lib/auth/remoteLogin";
import { useRouter } from "next/navigation";

const CallbackPage = (props: {
  searchParams: Promise<{ code: string; forward?: string }>;
}) => {
  const searchParams = use(props.searchParams);
  const router = useRouter();
  useEffect(() => {
    remoteLogin(searchParams.code).then((res) => {
      if (res.success) {
        router.push(searchParams.forward || "/");
      } else {
        alert("Error: " + res.error);
      }
    });
  }, [searchParams.code, router, searchParams.forward]);
  return <div>redirecting {searchParams.forward}</div>;
};

export default CallbackPage;
