const Banner = ({className=''}:{className: string}) => {

    return(
        <div className={`nt-component nt-hero-message ${className}`}>
            <h3 className='nt-heading-jumbotroon'>An effordable, rapid method for intarnational <span>currency exchange!</span></h3>
            <p>We are here serving you the best in Malaysia</p>
            <button>See how it works</button>
        </div>
    )
}

export default Banner;