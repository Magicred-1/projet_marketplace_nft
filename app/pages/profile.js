import Head from 'next/head';
import HeaderComponent from '../components/header-component';

const ProfilePage = () => {
    return (
        <>
            <Head>
                <title>Digital Delirium - Profile</title>
                <meta name="description" content="Profile" />
                <link rel="icon" href="/favicon.ico" />
            </Head>,
            <HeaderComponent />,
        <div>
        <h1>Profile Page</h1>
        </div>
        </>
    );
};

export default ProfilePage;