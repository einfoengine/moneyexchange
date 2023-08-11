import React from "react";
import Section from '@/components/section';

import CurrencyTable from "@/components/CurrencyTable";
import axios from "axios";

const getCurrencies = async () => {
  const response = await axios.get('http://localhost:3000/api/currencies');
  if (response.status!==200) {
    throw new Error('Faild getting currency!')
  }
  return response.data;
};

export default async function Home() {
  const currencies = await getCurrencies();
  console.log("My data: ", currencies);
  return (
    <main className='nt-main p-2 nt-page-pricing'>
      <Section sectionName='money-converter' span={[12]} className='nt'>  
        <CurrencyTable data={currencies} />
      </Section>
    </main>
  )
}
