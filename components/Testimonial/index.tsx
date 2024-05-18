'use client'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

type data = {
    author: string,
    designation?: string,
    content: string,
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
                        <h6 className="nt-testimonial-designation">{item.designation}</h6>
                        <div className='nt-testimonial-message'>{item.content}</div>
                        <h4 className='nt-testimonial-name'>{item.author}</h4>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </>
  );
};

export default Testimonial;
