import './WorkContainer.css'
import { useWorkList } from '../work.js';

import Heading from '../components/Heading.jsx'
import BoxLink from '../components/BoxLink.jsx';

function Projects() {
    const { workList, loading, error } = useWorkList();

    const items = [];

    if(loading)
    {
        items.push(<div className="loading">Loading projects...</div>);
    }
    if(error)
    {
        items.push(<div className="error">Error loading projects</div>);
    }

    if(!loading && !error) {
        for (let i = 0; i < workList.length; i++) {
            if(workList[i].type !== "game" && workList[i].type !== "project") continue;
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
