
'use client'
import React, { useState } from "react";

interface componentProps {
    className?: string,
    functionType: 'buy'|'sell',
    data: any
}

const MoneyConverter:React.FC<componentProps> = ({className, functionType, data}) => {
const [selected, setSelected] = useState("MY");
const [selectedConvert, setSelectedConvert] = useState("IN");
console.log("Currency data in convertor: ", data);
  return (
    <div className={`nt-money-converter nt-compontnt ${className}`}>
        <form>
            <div className="flex">
                <div className="nt-form-col pl-2 grow">
                    <label className="nt-label" htmlFor="nt-base-currency">How much you wanna trade?</label>
                    <div className="border rounded p-1 flex">
                        <input type="text" className="grow" defaultValue={1}/>
                        <select name="nt-currency-select">
                            {
                                data.map((item, index)=>{
                                    return(
                                        <option key={`nt-country-${index}`} value={item.Code} selected={item.Code==='USD'}>
                                            {item.Flag} {item.Code}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="text-center">
                        You will get <span>30</span> <span>RM</span>
                    </div>
                </div>
            </div>
            {/*  */}
            <button className="bg-black text-white rounded py-2 px-4 mx-auto flex mt-3" type="submit">Convert</button>
        </form>
    </div>
  )
}

export default MoneyConverter