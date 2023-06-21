import MarketplaceComponent from "../components/marketplace-component"
import Head from 'next/head'
import HeaderComponent from "../components/header-component";

const Marketplace = () => {
    return(
    <>
        <Head>
            <title>Digital Delirium - Marketplace</title>
            <meta name="description" content="Marketplace" />
            <link rel="icon" href="/favicon.ico" />
        </Head>,
        <HeaderComponent />,
        <MarketplaceComponent />
    </>
    );
}
export default Marketplace;

