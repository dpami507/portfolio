import { useState } from 'react';
import './Home.css'
import { useWorkList } from '../work.js';
import { getImagePath } from '../utils/helpers'
import BoxLink from '../components/BoxLink.jsx'
import PopUp from '../components/PopUp.jsx'

function Home() {

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

    for (let i = 0; i < 3; i++) {
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

    console.log('First item keys:', Object.keys(workList[0]));

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
    
        <div className='landing'>
            <div className='landing-text'>
                <h1>David Amidon</h1>
                <p className='subtitle'>Game Programming Student</p>
                <p className='tech'>C++ / C# (.NET) / Git / Unity / OpenGL</p>
            </div>
            <img src= {getImagePath('/imgs/DavidAmidon.jpg')} alt="" />
        </div>

        <div className='about'>
            <h2>About Me</h2>
            <p>I'm David Amidon, a Game Programming student at Champlain College, working primarily in C++, C#, and Unity.</p>
            <p>I enjoy building games and figuring out how to make things work the way I want them to. I like the problem-solving side of development and working with others on creative projects.</p>
            <p>Currently looking for internship and entry-level opportunities in game programming and software development.</p>
        </div>

        <div className="line"></div>

        <div className='recentwork'>
            <h2>Recent Work</h2>
            <div className='boxlink-container'>
                {items}
            </div>
        </div>
    </>
  )
}

export default Home
