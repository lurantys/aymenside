function YTEmbed() {
    return (
    <>
        <h1 className='blue-league-title'>Now Playing</h1>
        <p className='gray-league-paragraph'>Check out what I'm listening to on Spotify</p>
        <iframe title="Spotify Playlist" style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/playlist/5fkSKBiYYePY2bOlgBi33l?utm_source=generator" width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </>
    )
}

export default YTEmbed