import { getImagePath } from '../utils/helpers'
import './BoxLink.css'

function BoxLink({img, link, title, description}) {
  return (
    <>
        <button onClick={link} className='container'>
          <div>
            <h3>{title}</h3>
          </div>
          <img src={getImagePath(img)} alt={title || "Project Screenshot"} loading="lazy"/>
        </button>
    </>
  )
}

export default BoxLink
