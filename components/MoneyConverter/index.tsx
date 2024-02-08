'use client'

import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { UserContext } from "@/Context";
import { userauth } from "@/app/auth";

interface CurrencyDataItem {
  code?: string;
  flag?: string;
  we_buy?: number;
  we_sell?: number;
  unit?: number,
  _id?: string,
  rate?: number
}

interface ComponentProps {
  className?: string;
  functionType: 'buy' | 'sell';
  data: CurrencyDataItem[];
}

const MoneyConverter: React.FC<ComponentProps> = ({ className, functionType, data }) => {
  const {state} = useContext(UserContext);
  const [rate, setRate] = useState(0);
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState();
  const router = useRouter();
  const order = {
    user: state._id,  
    currency: currency, 
    type: functionType,
    amount: amount,
    rate: rate,
    total: rate * amount,
    status: "pending"   
  }
  
  const handleSUbmit = (e:any) => {
    e.preventDefault();
    // Check if the user is logged in 
    userauth().then((res)=>{
      console.log("order console ** ",res);
      if(res.authorized===false){
        router.push("/login")
      }
    })
    // If not logged in, go to login page with a message
    // From login come back to the home page
    axios.post('/api/orders/create', order)
  }
  return (
    <div className={`nt-money-converter nt-component ${className}`}>
      <form>
        <div className="flex">
          <div className="nt-form-col pl-2 grow">
            <label className="nt-label nt-heading-paragraph text-center block" htmlFor="nt-base-currency">
              How much you wanna trade?
            </label>
            <div className="border rounded-lg p-1 flex">
              <input type="number" className="grow" defaultValue={0} onChange={(e)=>{setAmount(parseFloat(e.target.value))}}/>
              <select name="nt-currency-select" onChange={(e)=>{
                setRate(parseFloat(e.target.selectedOptions[0].getAttribute('data-rate')));
                setCurrency(e.target.value);
                }}>
                <option key="select-currency" value={0}>Currency</option>
                {data.map((item, index) => (
                  <option
                    key={`nt-country-${index}`}
                    value={item._id}
                    data-rate={functionType==='sell'?item.we_buy: item.we_sell}
                  >
                    {item.flag} {item.code}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-center">
              <span className="nt-heading-module nt-text-fade">The rate is {rate}, Te amount is {amount}, You will get <span>{rate * amount}</span></span>
            </div>
          </div>
        </div>
        {/*  */}
        <button className="mx-auto block nt-btn nt-btn-primary mt-3" type="submit" onClickCapture={handleSUbmit}>
          Order
        </button>
      </form>
    </div>
  );
};

export default MoneyConverter;
