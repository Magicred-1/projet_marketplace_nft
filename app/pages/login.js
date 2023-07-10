import Head from "next/head";
import LoginForm from "../components/account/login-form";

const LoginPage = () => {
    return (
        <>
            <Head>
                <title>Digital Delirium - Login</title>
                <meta name="description" content="Login" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <LoginForm />
        </>
    );
};

export default LoginPage;