import './Footer.css'

const Footer = () => {
    return(
        <div>
            <footer className="footer">
            <p className="footer-text">&copy; {new Date().getFullYear()} Vivekanand College. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footer;