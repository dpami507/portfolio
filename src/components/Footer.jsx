import './Footer.css';
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer()
{
    return (
        <footer>
            <NavLink to="/contact" className="footer-contact-nav">
                Contact
            </NavLink>
            <p>	&bull;</p>
            <div className='footer-contact-icons'>
                <a href="mailto:david.amidon@mymail.champlain.edu" target='_blank'><FaEnvelope size={18} /></a>
                <a href="https://www.linkedin.com/in/dpamidon/" target='_blank'><FaLinkedin size={18} /></a>
                <a href="https://github.com/dpami507" target='_blank'><FaGithub size={18} /></a>
            </div>
            <p className='footer-contact-copyright'>Copyright &copy; 2026 David Amidon</p>
        </footer>
    );
}
export default Footer;