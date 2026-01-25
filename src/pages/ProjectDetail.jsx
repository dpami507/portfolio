import { useParams, useNavigate } from 'react-router-dom'
import { getImagePath } from '../utils/helpers'
import { useWorkList } from '../work';

import './ProjectDetail.css'

function ProjectDetail() {

    const { projectId } = useParams();
    const { workList, loading, error } = useWorkList();
    const navigate = useNavigate();

    const project = workList.find(proj => proj.id === projectId);
    if(loading) {
        return <div className="loading">Loading project...</div>;
    }

    return (
    <>
    <div className='container'>
        <div className="project-container">
            <img src={getImagePath(project.img)} alt={project.title || "Project Screenshot"} loading="lazy"></img>
            <h2>{project.title}</h2>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{project.description}</p>
            <div className="tech-stack-detail">
                <p><b>Tech Stack:</b> {project.tech}</p>
                <p><b>Role:</b> {project.role}</p>
                <p><b>Date:</b> {project.date}</p>
            </div>
            <div className='d-see-more'> 
                <a href={project.link} target='_blank'>See More on {project.link_type}</a>
            </div>
            <button className='back-button' onClick={() => navigate(`/${(project.type) === "art" ? "art" : "projects"}`)}>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
    </>
    )
}

export default ProjectDetail