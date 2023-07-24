'use client'
import YouTube from 'react-youtube';
const YoutubeLoader = () => {
    const opts = {
        height: '360', 
        width: '640', 
    };
    return (
        <div className="nt-component nt-youtube-loader">
            <YouTube videoId="ym7qcc6GXdY" opts={opts}/>       
        </div>
    )
}

export default YoutubeLoader