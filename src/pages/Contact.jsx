import './Contact.css'
import Heading from '../components/Heading.jsx'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
    return (
    <>
        <Heading title={"Contact"}/>
        <div className='contact'>
            <div className='info'>
                <p>You can reach me by email or by sending me a message on LinkedIn, There are also other contact methods on my Resume.</p>

                <div className='contactIcons'>
                    <a href="mailto:david.amidon@mymail.champlain.edu" target='_blank'><FaEnvelope size={24} /></a>
                    <a href="https://www.linkedin.com/in/dpamidon/" target='_blank'><FaLinkedin size={24} /></a>
                    <a href="https://github.com/dpami507" target='_blank'><FaGithub size={24} /></a>
                </div>
            </div>

            <div className="border_line"></div>

            <a href="David Amidon-Resume.pdf" className="resume" target="_blank">
              <img src="imgs/Resume.png" alt="" />
            </a>
        </div>
    </>
    )
}

export default Contact
