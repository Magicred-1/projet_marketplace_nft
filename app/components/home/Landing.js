const Landing = () => {
    return (
        <div className="landing" style={{ backgroundImage: "url('./images/background.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="landing-inner py-8 text-center">
                            <h1 className="
                                x-large text-white break-all
                            ">
                                Your NFT auction Marketplace 
                                platform on Ethereum.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Landing
