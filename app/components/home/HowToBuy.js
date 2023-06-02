const HowToBuy = () => {
    return (
        <div className="how-to-buy">
        <div className="container">
            <div className="row">
            <div className="col-md-4">
                <div className="how-to-buy__item">
                <div className="how-to-buy__item__icon">
                    <i className="fas fa-truck"></i>
                </div>
                <div className="how-to-buy__item__text">
                    <h4>CONNECT YOUR WALLET</h4>
                    <p>You need to connect your Metamask wallet to do transactions on the platform.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="how-to-buy__item">
                <div className="how-to-buy__item__icon">
                    <i className="far fa-credit-card"></i>
                </div>
                <div className="how-to-buy__item__text">
                    <h4>CHOOSE THE ONE YOU LIKE</h4>
                    <p>Purchase the NFT by placing a bid on the one you choosed. And then enjoy.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="how-to-buy__item">
                <div className="how-to-buy__item__icon">
                    <i className="fas fa-headphones-alt"></i>
                </div>
                <div className="how-to-buy__item__text">
                    <h4>OR SELL YOUR OWN NFT</h4>
                    <p>The marketplace also provide a tool to sell your own NFT.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default HowToBuy
