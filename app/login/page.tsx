import SSOLoginButton from "./SSOLoginButton";

const LoginPage = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Para acceder a este recurso tienes que estar conectado</p>
      <SSOLoginButton />
    </main>
  );
};

export default LoginPage;
