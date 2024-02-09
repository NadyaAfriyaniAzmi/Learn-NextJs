import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
const LoginPage = () => {
    const router = useRouter()
    const handlerLogin = () => {
        router.push("/product")
    };

  return (
    <div>
      <Head>
        <title>login</title>
      </Head>
      <h1>Login Page</h1>
      {/* imperatif Link */}
      <button onClick={handlerLogin}>Login</button>
      <p>
        Belum Punya aku? Registrasi <Link href="/auth/register" className="text-blue-500">disini</Link>
      </p>
    </div>
  );
};
export default LoginPage;
