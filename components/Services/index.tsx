'use client'
import Image from 'next/image';
type ServiceData = {
    title: string;
    sub_title: string;
    message: string;
    image: string;
}[];
 
const Data:ServiceData = [
    {
        title: "Service One",
        sub_title: "sub title one",
        message: "Hello readers, this is the demo text about the service introduction",
        image: "beta_testing.svg"
    },
    {
        title: "Service Two",
        sub_title: "sub title two",
        message: "Hello readers, this is the demo text about the service introduction",
        image: "business_deal.svg"
    },
    {
        title: "Service Three",
        sub_title: "sub title three",
        message: "Hello readers, this is the demo text about the service introduction",
        image: "cryptocurrency_wallet.svg"
    },
]

const Services = ({services}:{services: any}) => {
    // console.log("Service: ", services)
  return (
    <div className='nt-services nt-component flex'>
        {/* {Data.map((item, index) => (
            <div key={`service-${index}`} className='nt-service-items'>
                {console.log(index,": ",services[index])}
                <Image src={`/images/${item.image}`} width={200} height={200} alt="NodeThemes image missing" className='nt-service-image' />
                <h3 className='nt-heading-paragraph'>{item.title}</h3>
                <h4 className='nt-sub-heading-paragraph'>{item.sub_title}</h4>
                <p>{item.message}</p>
            </div>
        ))} */}
        {services.map((item, index) => (
            <div key={`service-${index}`} className='nt-service-items'>
                {/* <Image src={`https://cdn.pixabay.com/photo/2015/10/30/10/45/service-1013724_640.jpg`} width={200} height={200} alt="NodeThemes image missing" className='nt-service-image' /> */}
                <img src="https://cdn.pixabay.com/photo/2015/10/30/10/45/service-1013724_640.jpg" alt="Service image" />
                <h3 className='nt-heading-paragraph'>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        ))}
        

    </div>
  )
}

export default Services;