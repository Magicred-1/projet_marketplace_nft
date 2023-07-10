import MarketplaceComponent from "../components/marketplace/marketplace-component"
import Head from 'next/head'
import HeaderComponent from "../components/global/header-component";

const Marketplace = () => {
    return(
        <>
            <Head>
                <title>Digital Delirium - Marketplace</title>
                <meta name="description" content="Marketplace" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <HeaderComponent />
            <MarketplaceComponent />
        </>
    );
}
export default Marketplace;
