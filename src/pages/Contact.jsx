import './Contact.css'
import Heading from '../components/Heading.jsx'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useWorkList } from '../work.js';

function Contact() {
    const { workList, assets, loading, error } = useWorkList();

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

            <a href="https://drive.google.com/file/d/1-_TowS3IwQnTeMnhOMAtZvo4yRy4kjvAhN3BFHFZuaU/view" className="resume" target="_blank">
              <img src={assets.resume} alt="Resume" />
            </a>
        </div>
    </>
    )
}

export default Contact
