import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    console.log(id, title, url);
  return (
    <div className='card animate__animated animate__fadeIn'>
        <article className="location-listing">
            <a className="location-title">{title}</a>
            <div className="location-image">
            <a href="#">
                <img src={url} alt={title} />
            </a>
            </div>
        </article>
    </div>
  )
}
