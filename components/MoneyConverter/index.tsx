
'use client'
import React, { useState } from "react";
import ReactFlagsSelect, {Us, In} from "react-flags-select";

interface componentProps {
    className?: string,
    functionType: 'buy'|'sell'
}

const MoneyConverter:React.FC<componentProps> = ({className, functionType}) => {
const [selected, setSelected] = useState("MY");
const [selectedConvert, setSelectedConvert] = useState("IN");
  return (
    <div className={`nt-money-converter nt-compontnt ${className}`}>
        <form>
            <div className="flex">
                <div className="nt-form-col pl-2 grow">
                    <label className="nt-label" htmlFor="nt-base-currency">How much you wanna trade?</label>
                    <div className="border rounded p-1 flex">
                        <input type="text" className="grow"/>
                        <ReactFlagsSelect
                            countries={["US", "GB", "FR", "DE", "IT", "NG", "IN"]}
                            selected={selectedConvert}
                            onSelect={(cd) => setSelectedConvert(cd)}
                            showSelectedLabel={false}
                            showSecondarySelectedLabel={false}
                            showOptionLabel={false}
                            showSecondaryOptionLabel={false}
                            fullWidth={false}
                        />
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