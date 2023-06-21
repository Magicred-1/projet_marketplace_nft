import MarketplaceComponent from "../components/marketplace-component"
import Head from 'next/head'

const Marketplace = () => {
    return(
    <>
        <Head>
            <title>Digital Delirium - Marketplace</title>
            <meta name="description" content="Marketplace" />
            <link rel="icon" href="/favicon.ico" />
        </Head>,
        <MarketplaceComponent />
    </>
    );
}
export default Marketplace;

