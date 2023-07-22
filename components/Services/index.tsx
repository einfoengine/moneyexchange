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
        image: "cryptocurrency_wallet 1.svg"
    },
]
const Services = () => {
  return (
    <div className='nt-services nt-component flex'>
        {Data.map((item, index) => (
            <div key={`service-${index}`} className='nt-service-item'>
                <Image width={300} height={200} src={`/images/${item.image}`} alt="" />
                <h3>{item.title}</h3>
                <h4>{item.sub_title}</h4>
                <p>{item.message}</p>
            </div>
        ))}
    </div>
  )
}

export default Services;