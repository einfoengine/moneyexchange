'use client'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

type data = {
    name: string,
    designation?: string,
    message: string,
    ratings?: number,
    image?: string,
};
interface testimonialProps {
    data: data[]
}

const Testimonial: React.FC<testimonialProps> = ({data}) => {
  return (
    <>
        <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper text-center">
            {
                data.map((item, index)=>(
                    <SwiperSlide key={index}>
                        {<Image className='mx-auto' width={300} height={300} src={item.image?item.image:'/images/user.jpg'} alt=''/>}
                        <div className='nt-testimonial-message'>{item.message}</div>
                        <h4 className='nt-testimonial-name'>{item.name}</h4>
                        <h6 className="nt-testimonial-designation">{item.designation}</h6>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </>
  );
};

export default Testimonial;
