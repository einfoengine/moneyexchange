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

import CurrencyTable from "@/components/CurrencyTable";

const data = [
  {
    country: 'Country 1',
    unit: 'Unit 1',
    code: 'BDT',
    currency: 'Currency 1',
    weBuy: 100,
    weSell: 110,
    lastUpdate: 'Update 1',
  },
  {
    country: 'Country 2',
    unit: 'Unit 2',
    code: 'USD',
    currency: 'Currency 2',
    weBuy: 25,
    weSell: 30,
    lastUpdate: 'Update 2',
  },
  // Add more data as needed
];

export default function Home() {
  return (
    <main className='nt-main p-2 nt-page-pricing'>
      <Section sectionName='money-converter' span={[12]} className='nt'>
        <CurrencyTable data={data} />
      </Section>
    </main>
  )
}
