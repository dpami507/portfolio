import { useParams, useNavigate } from 'react-router-dom'
import {getProjects} from '../work';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './ProjectDetail.css'

function ProjectDetail() {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const load = async () => {
            const loadedProjects = await getProjects();
            setProjects(loadedProjects);
            setLoading(false);
        }
        load();
    })
    useEffect(() => {
        setCurrentImageIndex(0); // reset when project changes
    }, [projectId]);

    if(loading){
        return (<></>)
    }

    // All hooks must come before any conditional returns
    const project = projects.find(proj => proj.id === projectId);

    // Derive src directly — no need for a separate src state
    const src = "..\\" + project.imgs[currentImageIndex] || "";

    function goToNextImage() {
        if (project.imgs?.length > 1) {
            setCurrentImageIndex(prev => (prev + 1) % project.imgs.length);
        }
    }
    function goToPrevImage() {
        if (project.imgs?.length > 1) {
            setCurrentImageIndex(prev => (prev - 1 + project.imgs.length) % project.imgs.length);
        }
    }

    const seeMoreButton = project.link_type === null ? null
        : project.link === undefined && project.type === "art" ? (
            <div className='d-see-more'>
                <a href={src} target='_blank'>View Full Image</a>
            </div>
        ) : project.link === undefined ? null
        : (
            <div className='d-see-more'>
                <a href={project.link} target='_blank'>See More on {project.link_type}</a>
            </div>
        );

    return (
        <>
            <div className='container'>
                <div className="project-container">
                <div className='image-wrapper'>
                    <img src={src} alt={project.title || "Project Screenshot"} loading="lazy" />
                </div>

                {project.imgs?.length > 1 && (
                    <div className='image-nav'>
                        <button className='prev-image' onClick={goToPrevImage}><FaChevronLeft size={18} /></button>
                        <div className='image-dots'>
                            {project.imgs.map((_, i) => (
                                <span
                                    key={i}
                                    className={`dot ${i === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentImageIndex(i)}
                                />
                            ))}
                        </div>
                        <button className='next-image' onClick={goToNextImage}><FaChevronRight size={18} /></button>
                    </div>
                )}
                    <h2>{project.title}</h2>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;{project.description}</p>
                    <div className="tech-stack-detail">
                        <p><b>Tech Stack:</b> {project.tech.join(", ")}</p>
                        <p><b>Role:</b> {project.role}</p>
                        <p><b>Date:</b> {project.date}</p>
                    </div>
                    {seeMoreButton}
                    <button className='back-button' onClick={() => navigate(`/${project.type === "art" ? "art" : "projects"}`)}>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default ProjectDetail;