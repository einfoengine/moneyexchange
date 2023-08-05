'use client'
import YouTube from 'react-youtube';
const YoutubeLoader = ({path}:{path: string}) => {
    const opts = {
        height: '360', 
        width: '640', 
    };
    return (
        <div className="nt-component nt-youtube-loader">
            <YouTube videoId={path} opts={opts}/>       
        </div>
    )
}

export default YoutubeLoader