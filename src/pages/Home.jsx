import './Home.css'
import { useWorkList } from '../work.js';
import { MdHeight } from 'react-icons/md';

import BoxLink from '../components/BoxLink.jsx'
import SkillIcon from '../components/SkillIcon.jsx';

function Home() {
    const { workList, assets, skills,  loading, error } = useWorkList();

    const items = [];
    const skillsList = [];

    if(loading)
    {
        items.push(<div className="loading">Loading content...</div>);
        skillsList.push(<div className="loading">Loading skills...</div>);
    }
    if(error)
    {
        items.push(<div className="error">Error loading content</div>);
        skillsList.push(<div className="error">Error loading skills</div>);
    }

    if(!loading && !error) {
        for (let i = 0; i < 3; i++) {
            items.push(
                <BoxLink 
                key={workList[i].id}
                id={workList[i].id}
                type={workList[i].type}
                img={workList[i].img} 
                link={workList[i].link} 
                link_type={workList[i].link_type}
                title={workList[i].title} 
                description={workList[i].description}
                tech={workList[i].tech}
                role={workList[i].role}
                date={workList[i].date}
                />
            );
        }
        for(const skill in skills)
        {
            skillsList.push(
                <SkillIcon
                key={skill}
                skill={{name: skill, img: skills[skill]}}
                />
            );
        }

    }

  return (
    <>      
        <div className='landing'>
            <div className='landing-text'>
                <h1>David Amidon</h1>
                <p className='subtitle'>Game Programming Student</p>
                <p className='tech'>C++ / C# (.NET) / Git / Unity / OpenGL / SDL3 / ASIO</p>
                <p>Burlington, VT</p>
            </div>
            <img src= "DavidAmidon.jpg" alt="" />
            <a className='landing-jump' href="#about" style={{height: "10px"}}>
                <span></span>
                <span></span>
            </a>
        </div>

        <div id='about'>
            <h2>About Me</h2>
            <p>I'm David Amidon, a Game Programming student at Champlain College, working primarily in C++, C#, and Unity.</p>
            <p>I enjoy building games and figuring out how to make things work the way I want them to. I like the problem-solving side of development and working with others on creative projects.</p>
            <p>Currently looking for internship and entry-level opportunities in game programming and software development.</p>
        </div>

        <div className="line"></div>

        <div id='tech-stack'>
            <h2>Skills</h2>
            <div className='skills-icons'>
                {skillsList}
            </div>
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
