import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { getUser } from "@/lib/auth/getUser";
import Image from "next/image";

export default async function PrivateRoutePage() {
  const user = await getUser();
  return (
    <ProtectedRoute user={user}>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          {user && (
            <div>
              <h1 className="text-2xl font-bold">Usuario conectado</h1>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-bold">Información del usuario</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    <strong>Nombre:</strong> {user.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Tipo:</strong> {user.type}
                  </p>
                  <p>
                    <strong>Grupo:</strong> {user.group}
                  </p>
                  <p>
                    <strong>Rama:</strong> {user.branch}
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </ProtectedRoute>
  );
}
