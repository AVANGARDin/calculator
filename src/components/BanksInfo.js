import React, {useState, useEffect} from 'react'

export default function BanksInfo(props) {

  const [listOfBanks, setListOfBanks] = useState([]);
  
  useEffect(()=>{
  fetch("http://localhost:4200/list")
      .then((response) => response.json())
      .then((data) => setListOfBanks(data)
        )
},[]);

    if(listOfBanks.length <= 0) {
      return <></> 
    }else {
      return (
      <>
      {listOfBanks.map(el=>{
        return <div className='bank' key={el.id} onClick={props.onclick} data-id={el.id}>
          <h3>{el.name}</h3>
          <p>Interest rate: {el.rate}<br/>
             Maximum loan: {el.loan}<br/>
             Minimum down payment: {el.minimumPayment}<br/>
             Loan term: {el.loanTerm}
          </p>
          </div>
      })}
      </>
    )
    }
}
