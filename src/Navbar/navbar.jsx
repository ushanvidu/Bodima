import './navbar.css';
function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="upperheader">
                    <div className="phone-item">
                        <a href="tel:+94701040942">
                        <img className="icon" src="/phone1.png" alt="Phone" />
                        </a>
                        <a href= "tel:+94701040942" id="phone">0701040942</a>
                    </div>
                    <div className="whatapp-item">
                        <a href="https://wa.me/715367306?text=Hello%2C%20how%20are%20you%3F">
                        <img className="icon" src="/whatsapp1.png" alt="WhatsApp" />
                        </a>
                        <a href="https://wa.me/715367306?text=Hello%2C%20how%20are%20you%3F" >0715367306</a>
                    </div>


                </div>
                <div className="lowerheader">
                    <div className="navigations">
                        <div className="left">
                            <a href="/">HOME</a>
                            <a href="Rules">RULES</a>

                        </div>
                        <div className="logo">
                            <a href="/icons8-home-128.png">
                                <img src="/icons8-home-128.png" alt="logo"/>
                            </a>
                        </div>
                        <div className="right">
                            <a href="Signin">SIGNIN</a>
                            <a href="logout">
                                <img src="./icons8-quit-30.png" alt=""/>
                            </a>
                            
                        </div>

                    </div>


                </div>

            </div>

        </div>
    )
}
export default Navbar;