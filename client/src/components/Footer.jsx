import { Link } from "react-router-dom";

export default function Footer() {
    const today = new Date()
    return (
        <>
        <footer>
            <div id="foot-wrap">
                <div id="foot-link">
                    <Link to='/'>Home</Link>
                    <Link to='/admin'>Admin</Link>
                    <Link to='/store'>Store</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/sitemap'>Sitemap</Link>
                    <Link to='/privacy-policy'>Privacy Policy</Link>
                </div>
                <p>&copy;{today.getFullYear()} Alright Reserved.</p>
            </div>
        </footer>
        </>
    )
}