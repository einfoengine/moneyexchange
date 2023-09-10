const Countries = ({currencies}:{currencies: any}) => {
  return (
    <div className="nt-component nt-countries mt-4">
      <div className="nt-wrap grid grid-cols-4 gap-2">
        {
          currencies.map((item, index)=>{
            return(
              <div key={index} className="nt-currencies-list flex border rounded-lg bg-white p-2">
                <span className="nt-flag mr-2" >
                  {item.flag}
                </span>
                <span className="nt-details">
                  <div className="nt-contry-name">{item.code}</div>
                  <div className="nt-currency-rate"><span className="text-xs">We buy </span>{item.we_buy} - <span className="text-xs">We sell </span>{item.we_sell}</div>
                </span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Countries