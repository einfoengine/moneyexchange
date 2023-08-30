'use client'

import React, { useState, useRef, useMemo } from "react";

interface CurrencyDataItem {
  code: string;
  flag: string;
  we_buy: number;
  we_sell: number;
  unit: number
}

interface ComponentProps {
  className?: string;
  functionType: 'buy' | 'sell';
  data: CurrencyDataItem[];
}

const MoneyConverter: React.FC<ComponentProps> = ({ className, functionType, data }) => {
    const [rate, setRate] = useState(0);
    const [amount, setAmount] = useState(0);

  return (
    <div className={`nt-money-converter nt-component ${className}`}>
      <form>
        <div className="flex">
          <div className="nt-form-col pl-2 grow">
            <label className="nt-label" htmlFor="nt-base-currency">
              How much you wanna trade?
            </label>
            <div className="border rounded p-1 flex">
              <input type="number" className="grow" defaultValue={0} onChange={(e)=>{setAmount(parseFloat(e.target.value))}}/>
              <select name="nt-currency-select" onChange={(e)=>{setRate(parseFloat(e.target.value))}}>
                <option key="select-currency" value={0}>Currency</option>
                {data.map((item, index) => (
                  <option
                    key={`nt-country-${index}`}
                    value={item.we_sell}
                  >
                    {item.flag} {item.code}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-center">
              The rate is {rate}, Te amount is {amount}, You will get <span>{rate * amount}</span>
            </div>
          </div>
        </div>
        {/*  */}
        <button className="bg-black text-white rounded py-2 px-4 mx-auto flex mt-3" type="submit">
          Order
        </button>
      </form>
    </div>
  );
};

export default MoneyConverter;
