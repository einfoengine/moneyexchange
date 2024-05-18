'use client'

const Services = ({services}) => {
    console.log("services: ", services);
    return (
        <div className='nt-services nt-component flex'>
        {services.map((item, index) => (
            <div key={`service-${index}`} className='nt-service-items'>
                <img src={item.image} alt="Service image" />
                <h3 className='nt-heading-paragraph'>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        ))}
    </div>
  )
}

export default Services;