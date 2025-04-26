import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="tracking-[-.01em]">
            No olvides configurar las variables de entorno en el archivo .env
            (consulta README.md para más detalles).
          </li>
          <li className="tracking-[-.01em]">
            Empieza por visitar{" "}
            <Link
              href="/private-route"
              className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold"
            >
              /private-route
            </Link>{" "}
            para ver cómo funciona la autenticación con sherpa.
          </li>
          <li className="tracking-[-.01em]">
            Usa este código como base para tu proyecto ☺
          </li>
        </ol>
      </main>
    </div>
  );
}
