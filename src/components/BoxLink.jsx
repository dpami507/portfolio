import { getImagePath } from '../utils/helpers'
import { Link } from 'react-router-dom';
import './BoxLink.css'

function BoxLink({id, type, img, link, title, description, tech}) {

  const techStack = Array.isArray(tech) ? tech : tech ? tech.split(',').map(t => t.trim()) : [];
  const dir = type === "art" ? "/art" : "/projects";

  return (
    <>
    <Link
      key={id} 
      to={`${dir}/${id}`}>
      <div className="card-container" onClick={link}>
        <div className="card-img">
          <img src={getImagePath(img)} alt={title || "Project Screenshot"} loading="lazy"></img>
        </div>
        <div className="card-info">
          <h3>{title}</h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{description}</p>
          <div className="bottom-card">
            <div className="tech-stack">
              <ul>
                {techStack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="see-more">
              <a onClick={link}>See More</a>
            </div>
          </div>
        </div>
      </div>
    </Link>
    </>
  )
}

export default BoxLink
