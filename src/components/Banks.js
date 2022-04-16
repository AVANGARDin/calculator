import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';


export default function Banks() {
  const [listOfBanks, setListOfBanks] = useState([]);
  
  useEffect(()=>{
  fetch("http://localhost:4200/list")
      .then((response) => response.json())
      .then((data) => setListOfBanks(data)
        )
},[]);

const editBank = (el) => {
  localStorage.setItem("id", el.target.dataset.id);
}

const removeBank = (el)=>{
  el.target.parentNode.style="display:none;";
  fetch(`http://localhost:4200/list/${el.target.dataset.id}`)
  .then((response) => response.json())
      .then((data) => console.log(data)
        )
}
  if(listOfBanks.length <= 0) {
    return <></> 
  }else {
    return (
    <>
    {listOfBanks.map(el=>{
      return <div className='bank' key={el.id}>
        <h3>{el.name}</h3>
        <p>Interest rate: {el.rate}<br/>
           Maximum loan: {el.loan}<br/>
           Minimum down payment: {el.minimumPayment}<br/>
           Loan term: {el.loanTerm}
        </p>
        <button onClick={removeBank} data-id={el.id}>Delete bank</button>
        <Link to='/editbank'><button onClick={editBank} data-id={el.id}>EditBank</button></Link>
        </div>
    })}
    </>
  )
  }
}
