import Image from 'next/image';

const TitleBuilder = ({type, title, subTitle, message, image, alt, className=''}:{
    type: 'section' | 'component' | 'musthead' | null,
    title: string,
    subTitle?: string, 
    message?: string, 
    image?: string,
    alt?: string
    className?: string
}) => {
    switch(type){
        case 'section':
            return(
                <div className={`nt-component nt-title-builder ${className}`}>
                    {image&&<Image className='nt-section-title-image' src={image} alt={alt} layout='intrinsic'/>}
                    <h2 className='nt-heading-section'>{title}</h2>
                    {subTitle&&<h3 className='nt-section-sub-title'>{subTitle}</h3>}
                    {message&&<p className='nt-section-message'>{message}</p>}
                </div>
            )
        case 'component':
            return(
                <div className="nt-component nt-title-builder">
                    {image&&<Image className='nt-heading-module-image' src={image} alt={alt} layout='intrinsic'/>}
                    <h2 className='nt-heading-module'>{title}</h2>
                    {subTitle&&<h3 className='nt-sub-heading-module'>{subTitle}</h3>}
                    {message&&<p className='nt-component-message'>{message}</p>}
                </div>
            )
        case 'musthead':
            return(
                <div className="nt-component nt-title-builder">
                    {image&&<Image className='nt-musthead-title-image' src={image} alt={alt} layout='intrinsic'/>}
                    <h2 className='nt-musthead-title'>{title}</h2>
                    {subTitle&&<h3 className='nt-musthead-sub-title'>{subTitle}</h3>}
                    {message&&<p className='nt-musthead-message'>{message}</p>}
                </div>
            )
        default:
            return(
                <div className="nt-component nt-title-builder">
                    {image&&<Image className='nt-title-image' src={image} alt={alt} layout='intrinsic'/>}
                    <h2 className='nt-title'>{title}</h2>
                    {subTitle&&<h3 className='nt-sub-title'>{subTitle}</h3>}
                    {message&&<p className='nt-message'>{message}</p>}
                </div>
            )

    }
}
export default TitleBuilder