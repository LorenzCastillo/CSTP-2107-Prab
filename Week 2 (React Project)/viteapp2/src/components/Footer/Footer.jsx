import "./Footer.css";

const Footer = () => {
    return (
        <section className="footerContainer">
            <nav>
                <ul className="navContainer">
                    <li className="navItem">Support</li>
                    <li className="navItem">Social Media</li>
                </ul>
            </nav>

            <p className="footerTerms">These Terms and Conditions may have been translated if We have made them available to You on our Service. <br/>
                You agree that the original English text shall prevail in the case of a dispute.</p>
        </section>
    )
}

export default Footer;