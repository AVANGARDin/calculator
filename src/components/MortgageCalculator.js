import React, {useState, useEffect} from 'react'
import Calculator from './Calculator';


export default function MortgageCalculator() {



  const [listOfBanks, setListOfBanks] = useState([]);

  const [props, setProps] = useState({})
  
  useEffect(()=>{
  fetch("http://localhost:4200/list")
      .then((response) => response.json())
      .then((data) => setListOfBanks(data)
        )
},[]);

  const chooseBank = (el) => {
    setProps(listOfBanks.find(element=>element.id == el.currentTarget.dataset.id))
  }



  if(listOfBanks.length <= 0) {
    return (<div>
    <h1>MortgageCalculator</h1>
    <div className='container-for-banks'>List of banks is empty!</div>
      </div> );
  }else 
  {
    return (
    <div>
    <h1>Mortgage Calculator</h1>
    <div className='container-for-banks'>
      {listOfBanks.map(el=>{
      return <div className='bank' key={el.id} onClick={chooseBank} data-id={el.id}>
        <h3>{el.name}</h3>
        <p>Interest rate: {el.rate}<br/>
           Maximum loan: {el.loan}<br/>
           Minimum down payment: {el.minimumPayment}<br/>
           Loan term: {el.loanTerm}
        </p>
        </div>
      })}
    </div>
      <Calculator sendProps={props}/>
    </div>
  )
  }
}
