import './WorkContainer.css'
import {getProjects} from '../work.js';

import Heading from '../components/Heading.jsx'
import BoxLink from '../components/BoxLink.jsx';

function Projects() {

    const projects = getProjects();

    const items = [];

    for (let i = 0; i < projects.length; i++) {
        if(projects[i].type !== "game" && projects[i].type !== "project") continue;
        items.push(
            <BoxLink
                key={projects[i].id}
                id={projects[i].id}
                type={projects[i].type}
                img={projects[i].imgs[0]}
                link={projects[i].link}
                link_type={projects[i].link_type}
                title={projects[i].title}
                description={projects[i].description}
                tech={projects[i].tech}
                role={projects[i].role}
                date={projects[i].date}
            />
        );
    }

    return (
    <>
        <Heading title={"Projects"}/>
        <ol className='workcomp-container'>
            {items}
        </ol>
    </>
    )
}

export default Projects
