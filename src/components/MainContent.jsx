import React from 'react'
import AnimeCard from './AnimeCard'

const MainContent = (props) => {
    return (
        <main>
            <div className="main-head">
                <form className="search-box" onSubmit={props.handleSearch}>
                    <input type="search" placeholder="Search for an anime..." required  value={props.search} onChange={e => {props.setSearch(e.target.value)}}/>
                </form>
            </div>
            <div className="anime-list">
                {props.animeList.map(anime => (
                    <div className="anime-card">
                        <AnimeCard anime={anime} key={anime.mal_id} />
                    </div>
                ))}
            </div>
        </main>
    )
}

export default MainContent
