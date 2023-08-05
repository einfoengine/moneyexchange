'use client'
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { type } from 'os';

interface member {
  name: string,
  image: string
};

interface Props{
  teamMembers: member[]
}

const OurTeam:React.FC<Props> = ({teamMembers}) => {
    return (
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          teamMembers.map((member)=>{
            return(
              <SwiperSlide key={member.name}>
                <img src={member.image} alt={`teammate-${member.name}`} width={100} height={100}/>
                <h4>
                  {member.name}
                </h4>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    )
}
export default OurTeam;