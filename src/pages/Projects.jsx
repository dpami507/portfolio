import { useState } from 'react';
import './WorkContainer.css'
import { workList } from '../work.js';

import Heading from '../components/Heading.jsx'
import BoxLink from '../components/BoxLink.jsx';
import PopUp from '../components/PopUp.jsx'

function Projects() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentPopup, setCurrentPopup] = useState({});

    const openPopup = (data) => {
        setCurrentPopup(data);
        setIsPopupOpen(true);
        console.log(currentPopup);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const items = [];

    for (let i = 0; i < workList.length; i++) {
        if(workList[i].type !== "game" && workList[i].type !== "project") continue;
        items.push(
            <BoxLink 
            img={workList[i].img} 
            link={() => openPopup(workList[i])} 
            title={workList[i].title} 
            description={workList[i].description}
            />
        );
    }

    return (
    <>
        <PopUp isOpen={isPopupOpen} onClose={closePopup} img={currentPopup.img} link={currentPopup.link} title={currentPopup.title} description={currentPopup.description}/>
        <Heading title={"Projects"}/>
        <ol className='workcomp-container'>
            {items}
        </ol>
    </>
    )
}

export default Projects
