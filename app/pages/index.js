import Homepage from "../components/homepage/homepage";
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Digital Delirium - Homepage</title>
                <meta name="description" content="Homepage" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Homepage />
        </>
    );
}