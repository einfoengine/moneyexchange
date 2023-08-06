import Section from "@/components/section";
import Client from "../client-template";

interface Currency {
    flag: string;
    unit: string;
    code: string;
    currency: string;
    weBuy: number;
    weSell: number;
    lastUpdated: string;
    info: undefined;
  }
  
  interface CurrencyListProps {
    currencies: Currency[];
  }

  const currencies: Currency[] = [
    {
      flag: '🇺🇸',
      unit: 'US Dollar',
      code: 'USD',
      currency: 'United States Dollar',
      weBuy: 1.2345,
      weSell: 1.3456,
      lastUpdated: '2023-08-03',
      info: undefined
    },
    {
      flag: '🇪🇺',
      unit: 'Euro',
      code: 'EUR',
      currency: 'Euro',
      weBuy: 1.0987,
      weSell: 1.2345,
      lastUpdated: '2023-08-03',
      info: undefined
    },
    {
      flag: '🇬🇧',
      unit: 'British Pound',
      code: 'GBP',
      currency: 'British Pound Sterling',
      weBuy: 1.5678,
      weSell: 1.6789,
      lastUpdated: '2023-08-03',
      info: undefined
    },
    // Add more currencies as needed
  ];
  

  const CurrencyList: React.FC<CurrencyListProps> = ({ currencies }) => {
    return (
      <section className="pt-28">
        <table className="w-full border border-collapse border-gray-300 rounded">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">FLAG</th>
              <th className="border border-gray-300 px-4 py-2 text-left">UNIT</th>
              <th className="border border-gray-300 px-4 py-2 text-left">CODE</th>
              <th className="border border-gray-300 px-4 py-2 text-left">CURRENCY</th>
              <th className="border border-gray-300 px-4 py-2 text-left">WE BUY</th>
              <th className="border border-gray-300 px-4 py-2 text-left">WE SELL</th>
              <th className="border border-gray-300 px-4 py-2 text-left">LAST UPDATED</th>
              <th className="border border-gray-300 px-4 py-2 text-left">INFO</th>
            </tr>
          </thead>
          <tbody>
            {currencies.map((currency, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{currency.flag}</td>
                <td className="border border-gray-300 px-4 py-2">{currency.unit}</td>
                <td className="border border-gray-300 px-4 py-2">{currency.code}</td>
                <td className="border border-gray-300 px-4 py-2">{currency.currency}</td>
                <td className="border border-gray-300 px-4 py-2">{currency.weBuy}</td>
                <td className="border border-gray-300 px-4 py-2">{currency.weSell}</td>
                <td className="border border-gray-300 px-4 py-2">{currency.lastUpdated}</td>
                <td className="border border-gray-300 px-4 py-2"><button className="bg-black text-white py-2 px-8 rounded">More</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  };
  
  

const Currency = () => {
    return(
        <Client>
            <Section sectionName="currency-list" span={[12]} className="nt-currency">
                <CurrencyList currencies={currencies}/>
            </Section>
        </Client>
    )
}

export default Currency;