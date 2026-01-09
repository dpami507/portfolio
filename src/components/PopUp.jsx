import './PopUp.css'
import { getImagePath } from '../utils/helpers'

function Popup({isOpen, onClose, img, link, link_type, title, description, tech, role, date}) {
    if (!isOpen) return null;

    return (
    <>
        <div className='popupContainer'>
            <div>
                <div className='topInfo'>
                    <button onClick={onClose} className='close' aria-label="Close">
                        <span></span>
                        <span></span>
                    </button>
                    <h3>{title}</h3>
                </div>

                <p className='desc'>{description}</p>
                <div className='bottomInfo'>
                    <p>Role: {role}</p>
                    <p>Date: {date}</p>
                    <p>Tech: {tech}</p>
                    <a href={link} target="_blank">See More on {link_type}</a>
                </div>
            </div>
            <img src={getImagePath(img)} alt={title || "Project Screenshot"} loading="lazy"/>
        </div>
    </>
    )
}

export default Popup
