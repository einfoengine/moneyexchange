import React, { useEffect, useState } from "react";
import Banner from '@/components/Banner';
import Section from '@/components/section';
import Countries from "@/components/Countries";
import TitleBuilder from "@/components/TitleBuilder";
import YoutubeLoader from "@/components/YoutubeLoader";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Client from "./client-template";
import { Button } from "antd";
import Tabs from '@/components/Tabs';
import axios from "axios";
import Animate from "@/components/Animate";

// const testimonials = [
//   {
//       name: "Mohammad Maruf",
//       designation: "CEO | Vibely digital",
//       message: "Hello there I have worked with this company. This is one of the best company I have worked with so far.",
//       ratings: 4,
//       image: ""
//   },
//   {
//       name: "Mehedi hassan",
//       designation: "MD | GTA",
//       message: "Hello there I have worked with this company. This is one of the best company I have worked with so far.",
//       ratings: 4,
//       image: ""
//   }
// ]

const testimonial = async () => {
  const response = await axios.get('http://localhost:3000/api/testimonials/');
  if(response.status!==200){
    throw new Error("Faild to get the testimonial!");
  }
  return response.data
}

const getCurrencies = async () => {
  const response = await axios.get('http://localhost:3000/api/currencies/find');
  if(response.status!==200){
    throw new Error("Faild to get the currencies!");
  }
  return response.data
}
const getArticles = async () => {
  const response = await axios.get('http://localhost:3000/api/articles');
  if(response.status!==200){
    throw new Error("Faild reading articles!");
  }
  return response.data
}
const getServices = async () => {
  const response = await axios.get('http://localhost:3000/api/services');
  if(response.status!==200){
    throw new Error("Faild reading services!");
  }
  return response.data
}


export default async function Home() {
  const services = await getServices();
  const currencies = await getCurrencies();
  const articles = await getArticles();
  const testimonials = await testimonial();
  return (
    <Client>
      <main className='nt-main p-2'>
        <Animate direction="b-t" delay={0.2}>
        <Section sectionName='hero' span={[12]} className='bg-green-700 pt-28 rounded-xl text-white'>
          <Animate direction="t-b" delay={0.2}>
            <Banner key={'nt-hero-1'} className='text-center'/>
          </Animate>
        </Section>
        </Animate>
        <Section sectionName='money-converter' span={[12]} className='nt-section'>
          <Animate direction="b-t" delay={0.5}>
          <div className="p-3 border rounded-xl bg-white w-full nt-money-converter-wrap">
            <Tabs data={currencies}/>
            <Countries currencies={currencies}/>
          </div>
          </Animate>
        </Section>
        <Section sectionName='services' span={[12]} className='pt-28'>
          <Animate delay={0} direction="b-t">
            {[<div key="nt-services-1" className="nt-services">
              <TitleBuilder type="section" title="The services we provide" message="Get our services, you will get bla bla bla. We are one of the best in Malaysia." className="text-center"/>
            </div>,
              <Services services={services} key='in-services-2'/>
            ]}
          </Animate>
        </Section>
        <Animate direction='b-t'>
          <Section sectionName='money-converter' span={[12]} className='nt'>
            <div className="nt-wrapper flex justify-center">
              <YoutubeLoader path="ym7qcc6GXdY"/>
            </div>
          </Section>
        </Animate>
        <Animate direction='b-t'>
          <Section sectionName='testimonial' span={[12]} className='nt'>
            <>
              <TitleBuilder type="section" title="They have said it" className="text-center"/>
              <Testimonial data={testimonials}/>
            </>
          </Section>
        </Animate>
      </main>
    </Client>
  )
}