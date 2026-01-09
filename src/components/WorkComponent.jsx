import { useState } from 'react'
import { getImagePath } from '../utils/helpers'
import './WorkComponent.css'

function WorkComponent({img, link, title, description}) {
  return (
    <>
        <div className='work-container'>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank">Click To See</a>
          </div>

          <img src={getImagePath(img)} alt={title || "Project Screenshot"} loading="lazy"/>
        </div>
    </>
  )
}

export default WorkComponent
