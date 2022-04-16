import React, { useState } from 'react'

export default function Calculator(props) {
const[param, setParam] = useState();

// const[valueInput, setVelueInput] = useState(document.getElementById('initialLoan'));
// console.log(valueInput)

// <h2>Monthly payment: {}</h2>
  const calculating = ()=>{
    let initialLoan = document.getElementById('initialLoan');
    let downPayment = document.getElementById('downPayment');

          if (
            parseInt(initialLoan.value) > parseInt(props.sendProps.loan) &&
            parseInt(downPayment.value) <
              (parseInt(initialLoan.value) * parseInt(props.sendProps.minimumPayment)) /
                100
          )
            return setParam(<h2>Excess loan amount and small down payment</h2>);
    if(parseInt(initialLoan.value) > parseInt(props.sendProps.loan)) return setParam(<h2>Excess loan amount</h2>);
    if(parseInt(downPayment.value) < parseInt(initialLoan.value) * parseInt(props.sendProps.minimumPayment)/100) return setParam(<h2>
      Small down payment</h2>);



let month = parseInt(props.sendProps.loanTerm) * 12;
let amount = parseInt(initialLoan.value) - parseInt(downPayment.value);
let interest = parseInt(props.sendProps.rate)*0.01/12;
let powInterest = Math.pow(1+interest, month);
let payment = (amount * interest * powInterest) / (powInterest - 1);

let monthlypayment = payment.toFixed(2) + ' $';
setParam(<h2>Monthly payment: {monthlypayment}</h2>)
  }

  
  if(props.sendProps.id){
  return (
    <div className='bank-calculator'>
      <div className='bank' style={{backgroundColor: "green"}}>
      <h2>you have chosen</h2>
      <h3>{props.sendProps.name}</h3>
          <p>Interest rate: {props.sendProps.rate}<br/>
             Maximum loan: {props.sendProps.loan}<br/>
             Minimum down payment: {props.sendProps.minimumPayment}<br/>
             Loan term: {props.sendProps.loanTerm}
          </p>
      </div>
      <div className='calculator'>
          <label>Initial loan: <input type="number" name='initialLoan' id="initialLoan"></input> $</label><br/>
          <label>Down payment: <input type="number" name='downPayment' id="downPayment"></input> $</label><br/>
          <button onClick={calculating}>Calculate</button><br/>
          {param}
      </div>
    </div>

    
  )
  }else {
    return (
      <div className='bank'>Choose bank !</div>
    )
  }
}
