import YouTube from 'react-youtube';
const YoutubeLoader = () => {
    const opts = {
        height: '360', // Set the height of the video player
        width: '640', // Set the width of the video player
    };
    return (
        <div className="nt-component nt-youtube-loader">
            <YouTube videoId="tyFiSwaTxio" opts={opts}/>       
        </div>
    )
}

export default YoutubeLoader