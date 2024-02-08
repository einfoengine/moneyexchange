import Section from "@/components/section";
import Client from "../client-template";
import axios from "axios";

interface Currency {
  flag: string;
  unit: string;
  code: string;
  currency: string;
  we_buy: number;
  we_sell: number;
  updatedAt: string;
  info: undefined;
}
  
interface CurrencyListProps {
  currencies: {[key: string]: Currency};
}
  

const CurrencyList: React.FC<CurrencyListProps> = ({ currencies }) => {
  return (
    <section className="pt-28">
      <table className="w-full border border-collapse border-gray-300 rounded-lg">
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
        {Object.entries(currencies).map(([key, currency]) => (
          <tr key={key}>
            <td className="border border-gray-300 px-4 py-2">{currency.flag}</td>
            <td className="border border-gray-300 px-4 py-2">{currency.unit}</td>
            <td className="border border-gray-300 px-4 py-2">{currency.code}</td>
            <td className="border border-gray-300 px-4 py-2">{currency.currency}</td>
            <td className="border border-gray-300 px-4 py-2">{currency.we_buy}</td>
            <td className="border border-gray-300 px-4 py-2">{currency.we_sell}</td>
            <td className="border border-gray-300 px-4 py-2">{currency.updatedAt}</td>
            <td className="border border-gray-300 px-4 py-2">
              <button className="bg-black text-white py-2 px-8 rounded-lg">More</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </section>
  );
};
  
const getCurrencies = async () => {
  const response = await axios.get('http://localhost:3000/api/currencies/find');
  if(response.status!==200){
    throw new Error("Faild to get the currencies!");
  }
  return response.data
}

const Currency = async () => {
  const fetchCurrecties = await getCurrencies();
  return(
    <Client>
          <Section sectionName="currency-list" span={[12]} className="nt-currency">
              <CurrencyList currencies={fetchCurrecties}/>
          </Section>
      </Client>
    )
}

export default Currency;