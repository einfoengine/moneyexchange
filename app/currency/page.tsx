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
    currencies: {[key: string]: Currency};
  }

  const currencies: {[key: string]: Currency} = {
    Us: {
      flag: "🇺🇸",
      unit: "US Dollar",
      code: "USD",
      currency: "United States Dollar",
      weBuy: 1.0,
      weSell: 1.0,
      lastUpdated: "2023-08-03",
      info: undefined,
    },
    Sar: {
      flag: "🇸🇦",
      unit: "Saudi Riyal",
      code: "SAR",
      currency: "Saudi Arabian Riyal",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Saudi Riyal
      weSell: 1.0, // Replace with the actual currency rate we sell for the Saudi Riyal
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    SGD: {
      flag: "🇸🇬",
      unit: "Singapore Dollar",
      code: "SGD",
      currency: "Singapore Dollar",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Singapore Dollar
      weSell: 1.0, // Replace with the actual currency rate we sell for the Singapore Dollar
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    BRD: {
      flag: "🇧🇷",
      unit: "Brazilian Real",
      code: "BRL",
      currency: "Brazilian Real",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Brazilian Real
      weSell: 1.0, // Replace with the actual currency rate we sell for the Brazilian Real
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    AUD: {
      flag: "🇦🇺",
      unit: "Australian Dollar",
      code: "AUD",
      currency: "Australian Dollar",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Australian Dollar
      weSell: 1.0, // Replace with the actual currency rate we sell for the Australian Dollar
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    GBP: {
      flag: "🇬🇧",
      unit: "British Pound Sterling",
      code: "GBP",
      currency: "British Pound Sterling",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the British Pound Sterling
      weSell: 1.0, // Replace with the actual currency rate we sell for the British Pound Sterling
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    EURO: {
      flag: "🇪🇺",
      unit: "Euro",
      code: "EUR",
      currency: "Euro",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Euro
      weSell: 1.0, // Replace with the actual currency rate we sell for the Euro
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    CHF: {
      flag: "🇨🇭",
      unit: "Swiss Franc",
      code: "CHF",
      currency: "Swiss Franc",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Swiss Franc
      weSell: 1.0, // Replace with the actual currency rate we sell for the Swiss Franc
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    CAD: {
      flag: "🇨🇦",
      unit: "Canadian Dollar",
      code: "CAD",
      currency: "Canadian Dollar",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Canadian Dollar
      weSell: 1.0, // Replace with the actual currency rate we sell for the Canadian Dollar
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    NZD: {
      flag: "🇳🇿",
      unit: "New Zealand Dollar",
      code: "NZD",
      currency: "New Zealand Dollar",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the New Zealand Dollar
      weSell: 1.0, // Replace with the actual currency rate we sell for the New Zealand Dollar
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    JPY: {
      flag: "🇯🇵",
      unit: "Japanese Yen",
      code: "JPY",
      currency: "Japanese Yen",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Japanese Yen
      weSell: 1.0, // Replace with the actual currency rate we sell for the Japanese Yen
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    HKD: {
      flag: "🇭🇰",
      unit: "Hong Kong Dollar",
      code: "HKD",
      currency: "Hong Kong Dollar",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Hong Kong Dollar
      weSell: 1.0, // Replace with the actual currency rate we sell for the Hong Kong Dollar
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    CNY: {
      flag: "🇨🇳",
      unit: "Chinese Yuan",
      code: "CNY",
      currency: "Chinese Yuan",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Chinese Yuan
      weSell: 1.0, // Replace with the actual currency rate we sell for the Chinese Yuan
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    THB: {
      flag: "🇹🇭",
      unit: "Thai Baht",
      code: "THB",
      currency: "Thai Baht",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Thai Baht
      weSell: 1.0, // Replace with the actual currency rate we sell for the Thai Baht
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    NTD: {
      flag: "🇹🇼",
      unit: "Taiwan Dollar",
      code: "TWD",
      currency: "New Taiwan Dollar",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the New Taiwan Dollar
      weSell: 1.0, // Replace with the actual currency rate we sell for the New Taiwan Dollar
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    IDR: {
      flag: "🇮🇩",
      unit: "Indonesian Rupiah",
      code: "IDR",
      currency: "Indonesian Rupiah",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Indonesian Rupiah
      weSell: 1.0, // Replace with the actual currency rate we sell for the Indonesian Rupiah
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    INR: {
      flag: "🇮🇳",
      unit: "Indian Rupee",
      code: "INR",
      currency: "Indian Rupee",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Indian Rupee
      weSell: 1.0, // Replace with the actual currency rate we sell for the Indian Rupee
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    WON: {
      flag: "🇰🇷",
      unit: "South Korean Won",
      code: "KRW",
      currency: "South Korean Won",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the South Korean Won
      weSell: 1.0, // Replace with the actual currency rate we sell for the South Korean Won
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    PHP: {
      flag: "🇵🇭",
      unit: "Philippine Peso",
      code: "PHP",
      currency: "Philippine Peso",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Philippine Peso
      weSell: 1.0, // Replace with the actual currency rate we sell for the Philippine Peso
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    DONG: {
      flag: "🇻🇳",
      unit: "Vietnamese Dong",
      code: "VND",
      currency: "Vietnamese Dong",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Vietnamese Dong
      weSell: 1.0, // Replace with the actual currency rate we sell for the Vietnamese Dong
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    AED: {
      flag: "🇦🇪",
      unit: "United Arab Emirates Dirham",
      code: "AED",
      currency: "United Arab Emirates Dirham",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the UAE Dirham
      weSell: 1.0, // Replace with the actual currency rate we sell for the UAE Dirham
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    QAR: {
      flag: "🇶🇦",
      unit: "Qatari Riyal",
      code: "QAR",
      currency: "Qatari Riyal",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Qatari Riyal
      weSell: 1.0, // Replace with the actual currency rate we sell for the Qatari Riyal
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    OMR: {
      flag: "🇴🇲",
      unit: "Omani Rial",
      code: "OMR",
      currency: "Omani Rial",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Omani Rial
      weSell: 1.0, // Replace with the actual currency rate we sell for the Omani Rial
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    BHD: {
      flag: "🇧🇭",
      unit: "Bahraini Dinar",
      code: "BHD",
      currency: "Bahraini Dinar",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Bahraini Dinar
      weSell: 1.0, // Replace with the actual currency rate we sell for the Bahraini Dinar
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    KWD: {
      flag: "🇰🇼",
      unit: "Kuwaiti Dinar",
      code: "KWD",
      currency: "Kuwaiti Dinar",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Kuwaiti Dinar
      weSell: 1.0, // Replace with the actual currency rate we sell for the Kuwaiti Dinar
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    SEK: {
      flag: "🇸🇪",
      unit: "Swedish Krona",
      code: "SEK",
      currency: "Swedish Krona",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Swedish Krona
      weSell: 1.0, // Replace with the actual currency rate we sell for the Swedish Krona
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    DKK: {
      flag: "🇩🇰",
      unit: "Danish Krone",
      code: "DKK",
      currency: "Danish Krone",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Danish Krone
      weSell: 1.0, // Replace with the actual currency rate we sell for the Danish Krone
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    JOD: {
      flag: "🇯🇴",
      unit: "Jordanian Dinar",
      code: "JOD",
      currency: "Jordanian Dinar",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Jordanian Dinar
      weSell: 1.0, // Replace with the actual currency rate we sell for the Jordanian Dinar
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    EGP: {
      flag: "🇪🇬",
      unit: "Egyptian Pound",
      code: "EGP",
      currency: "Egyptian Pound",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Egyptian Pound
      weSell: 1.0, // Replace with the actual currency rate we sell for the Egyptian Pound
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    MOP: {
      flag: "🇲🇴",
      unit: "Macau Pataca",
      code: "MOP",
      currency: "Macau Pataca",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Macau Pataca
      weSell: 1.0, // Replace with the actual currency rate we sell for the Macau Pataca
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    LKR: {
      flag: "🇱🇰",
      unit: "Sri Lankan Rupee",
      code: "LKR",
      currency: "Sri Lankan Rupee",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Sri Lankan Rupee
      weSell: 1.0, // Replace with the actual currency rate we sell for the Sri Lankan Rupee
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    ZAR: {
      flag: "🇿🇦",
      unit: "South African Rand",
      code: "ZAR",
      currency: "South African Rand",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the South African Rand
      weSell: 1.0, // Replace with the actual currency rate we sell for the South African Rand
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    TRY: {
      flag: "🇹🇷",
      unit: "Turkish Lira",
      code: "TRY",
      currency: "Turkish Lira",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Turkish Lira
      weSell: 1.0, // Replace with the actual currency rate we sell for the Turkish Lira
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    RUB: {
      flag: "🇷🇺",
      unit: "Russian Ruble",
      code: "RUB",
      currency: "Russian Ruble",
      weBuy: 1.0, // Replace with the actual currency rate we buy for the Russian Ruble
      weSell: 1.0, // Replace with the actual currency rate we sell for the Russian Ruble
      lastUpdated: "2023-08-03", // Replace with the actual last updated date
      info: undefined, // You can add additional info here if needed
    },
    // Add more currencies as needed
  };
  

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
          {Object.entries(currencies).map(([key, currency]) => (
            <tr key={key}>
              <td className="border border-gray-300 px-4 py-2">{currency.flag}</td>
              <td className="border border-gray-300 px-4 py-2">{currency.unit}</td>
              <td className="border border-gray-300 px-4 py-2">{currency.code}</td>
              <td className="border border-gray-300 px-4 py-2">{currency.currency}</td>
              <td className="border border-gray-300 px-4 py-2">{currency.weBuy}</td>
              <td className="border border-gray-300 px-4 py-2">{currency.weSell}</td>
              <td className="border border-gray-300 px-4 py-2">{currency.lastUpdated}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-black text-white py-2 px-8 rounded">More</button>
              </td>
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