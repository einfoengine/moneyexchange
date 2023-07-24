import React, { useState } from "react";
import Banner from '@/components/Banner';
import Section from '@/components/section';
import MoneyConverter from '@/components/MoneyConverter';
import ReactFlagsSelect from "react-flags-select";
import Countries from "@/components/Countries";
import TitleBuilder from "@/components/TitleBuilder";
import YoutubeLoader from "@/components/YoutubeLoader";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";

const testimonials = [
  {
      name: "Mohammad Maruf",
      designation: "CEO | Vibely digital",
      message: "Hello there I have worked with this company. This is one of the best company I have worked with so far.",
      ratings: 4,
      image: ""
  },
  {
      name: "Mehedi hassan",
      designation: "MD | GTA",
      message: "Hello there I have worked with this company. This is one of the best company I have worked with so far.",
      ratings: 4,
      image: ""
  }
]

export default function Home() {
  return (
    <main className='nt-main p-2'>
      <Section sectionName='hero' span={[12]} className='bg-green-700 pt-28 rounded text-white'>
        <Banner key={'nt-hero-1'} className='text-center'/>
      </Section>
      
      <Section sectionName='money-converter' span={[12]} className='nt-section'>
        <div className="p-3 border rounded bg-white absolute w-full nt-money-converter-wrap">
          <MoneyConverter/>
          <Countries/>
        </div>
      </Section>
      <Section sectionName='services' span={[12, 12]} className='pt-28'>
        {[<div key="nt-services-1" className="nt-services">
          <TitleBuilder type="section" title="Our services" message="Get our services, you will get bla bla bla. We are one of the best in Malaysia." className="text-center"/>
        </div>,
        <Services key='in-services-2'/>
        ]}
      </Section>
      <Section sectionName='money-converter' span={[12]} className='nt'>
        <div className="nt-wrapper flex justify-center">
          <YoutubeLoader />
        </div>
      </Section>
      <Section sectionName='money-converter' span={[12]} className='nt'>
        <Testimonial data={testimonials}/>
      </Section>
    </main>
  )
}
