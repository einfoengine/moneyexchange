
'use client'
import React, { useState } from "react";
import ReactFlagsSelect, {Us, In} from "react-flags-select";

const MoneyConverter = ({className}:{className?: string}) => {
const [selected, setSelected] = useState("MY");
const [selectedConvert, setSelectedConvert] = useState("IN");
  return (
    <div className={`nt-money-converter nt-compontnt ${className}`}>
        <form>
            <div className="flex">
                <div className="nt-form-col pr-2 grow">
                    <label htmlFor="nt-base-currency">Given amount</label>
                    <div className="border rounded p-1 flex">
                        <input type="text" className="grow"/>
                        <ReactFlagsSelect
                            countries={["US", "GB", "FR", "DE", "IT", "NG", "MY"]}
                            selected={selected}
                            onSelect={(code) => setSelected(code)}
                            showSelectedLabel={false}
                            showSecondarySelectedLabel={false}
                            showOptionLabel={false}
                            showSecondaryOptionLabel={false}
                            fullWidth={false}
                        />
                    </div>
                </div>
                {/*  */}
                <div className="nt-form-col pl-2 grow">
                    <label htmlFor="nt-base-currency">Converted amount</label>
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
                </div>
            </div>
            {/*  */}
            <button className="bg-black text-white rounded py-2 px-4 mx-auto flex mt-3" type="submit">Convert</button>
        </form>
    </div>
  )
}

export default MoneyConverter