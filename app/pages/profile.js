import ProfileDetails from "../components/profile-details";
import Head from "next/head";

const ProfilePage = () => {
    return (
        <>
        <Head>
            <title>Digital Delirium - Profile</title>
            <meta name="description" content="Profile" />
            <link rel="icon" href="/favicon.svg" />
        </Head>
        <ProfileDetails />
        </>
    );
};

export default ProfilePage;
