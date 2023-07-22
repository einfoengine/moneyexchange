const Banner = ({className=''}:{className: string}) => {
    return(
        <div className={`nt-component nt-hero ${className}`}>
            <h3 className='text-3xl'>An effordable, rapid method for intarnational <span>currency exchange!</span></h3>
            <p>We are here serving you the best in Malaysia</p>
            <button>See how it works</button>
        </div>
    )
}

export default Banner;