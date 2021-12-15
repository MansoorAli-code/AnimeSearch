import React from 'react'

const AnimeCard = ({anime}) => {
    return (
        <div>
            <article className="anime-card">
                <a href={anime.url} target="_blank" rel="noreferrer">
                    <figure>
                        <img src={anime.image_url} alt="Anime Image" />
                    </figure>
                    <h3>{anime.title}</h3>
                </a>
            </article>
        </div>
    )
}

export default AnimeCard
