import { useState } from 'react';
import './Home.css'
import { useWorkList } from '../work.js';

import Heading from '../components/Heading.jsx'
import BoxLink from '../components/BoxLink.jsx';
import PopUp from '../components/PopUp.jsx'

function Art() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentPopup, setCurrentPopup] = useState({});
    const { workList, loading, error } = useWorkList();

    if (loading) return <div className="loading">Loading projects...</div>;
    if (error) return <div className="error">Error loading projects</div>;

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
        if(workList[i].type !== "art") continue;
        items.push(
            <BoxLink 
            img={workList[i].img} 
            link={() => openPopup(workList[i])} 
            link_type={workList[i].link_type}
            title={workList[i].title} 
            description={workList[i].description}
            tech={workList[i].tech}
            role={workList[i].role}
            date={workList[i].date}
            />
        );
    }

    return (
    <>
        <PopUp 
            isOpen={isPopupOpen} 
            onClose={closePopup} 
            img={currentPopup.img} 
            link={currentPopup.link} 
            link_type={currentPopup.link_type}
            title={currentPopup.title} 
            description={currentPopup.description}
            tech={currentPopup.tech}
            role={currentPopup.role}
            date={currentPopup.date}
        />
        <Heading title={"Art"}/>
        <ol className='workcomp-container'>
            {items}
        </ol>
    </>
    )
}

export default Art
