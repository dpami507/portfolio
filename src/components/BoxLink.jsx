import { getImagePath } from '../utils/helpers'
import './BoxLink.css'

function BoxLink({img, link, title, description, tech}) {

  const techStack = Array.isArray(tech) ? tech : tech ? tech.split(',').map(t => t.trim()) : [];

  return (
    <>
      <div class="card-container" onClick={link}>
        <div class="card-img">
          <img src={getImagePath(img)} alt={title || "Project Screenshot"} loading="lazy"></img>
        </div>
        <div class="card-info">
          <h3>{title}</h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{description}</p>
          <div class="bottom-card">
            <div class="tech-stack">
              <ul>
                {techStack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div class="see-more">
              <a onClick={link}>See More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BoxLink
