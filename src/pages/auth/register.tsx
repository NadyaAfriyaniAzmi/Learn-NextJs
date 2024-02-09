import Link from "next/link"
const RegisterPage = () =>{

    return (
        <div>
            <h1>Register Page</h1>
            <p>Sudah Punya akun login <Link href={"/auth/login"} className="text-blue-500">disini</Link></p>
        </div>
    )
}
export default RegisterPage