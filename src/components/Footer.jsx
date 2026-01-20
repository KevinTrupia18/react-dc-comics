export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-top">
                <div className="footer-links">

                    <div>
                        <h4>DC COMICS</h4>
                        <ul>
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                        </ul>

                        <h4>SHOP</h4>
                        <ul>
                            <li>Shop DC</li>
                            <li>Shop DC Collectibles</li>
                        </ul>
                    </div>

                    <div>
                        <h4>DC</h4>
                        <ul>
                            <li>Terms Of Use</li>
                            <li>Privacy Policy</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                        </ul>
                    </div>

                    <div>
                        <h4>SITES</h4>
                        <ul>
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                        </ul>
                    </div>



                </div>

                <img
                    className="footer-logo"
                    src="/img/dc-logo-bg.png"
                    alt="DC Logo"
                />
            </div>

            <div className="footer-bottom">
                <button>SIGN-UP NOW!</button>

                <div className="social">
                    <span>FOLLOW US</span>
                    <img src="/img/footer-facebook.png" />
                    <img src="/img/footer-twitter.png" />
                    <img src="/img/footer-youtube.png" />
                    <img src="/img/footer-pinterest.png" />
                    <img src="/img/footer-periscope.png" />
                </div>
            </div>

        </footer>
    );
}