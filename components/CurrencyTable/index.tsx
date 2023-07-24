type dataObject = {
    country: string,
    unit: string,
    code: string,
    currency: string,
    weBuy: number,
    weSell: number,
    lastUpdate: string,
}

interface data{data:dataObject[]}

const CurrencyTable:React.FC<data> = ({ data }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Country</th>
              <th className="px-4 py-2 border">Unit</th>
              <th className="px-4 py-2 border">Code</th>
              <th className="px-4 py-2 border">Currency</th>
              <th className="px-4 py-2 border">We Buy</th>
              <th className="px-4 py-2 border">We Sell</th>
              <th className="px-4 py-2 border">Last Update</th>
              <th className="px-4 py-2 border">Order Now</th>
            </tr>
          </thead>
          <tbody>
            {data.map((currency) => (
              <tr key={currency.code}>
                <td className="px-4 py-2 border">{currency.country}</td>
                <td className="px-4 py-2 border">{currency.unit}</td>
                <td className="px-4 py-2 border">{currency.code}</td>
                <td className="px-4 py-2 border">{currency.currency}</td>
                <td className="px-4 py-2 border">{currency.weBuy}</td>
                <td className="px-4 py-2 border">{currency.weSell}</td>
                <td className="px-4 py-2 border">{currency.lastUpdate}</td>
                <td className="px-4 py-2 border">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Order Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrencyTable;
