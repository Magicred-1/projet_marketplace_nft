import Head from "next/head";
import RegisterForm from "../components/account/register-form";

const RegisterPage = () => {
    return (
        <>
            <Head>
                <title>Digital Delirium - Register</title>
                <meta name="description" content="Register" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <RegisterForm />
        </>
    );
};

export default RegisterPage;