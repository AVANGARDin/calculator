import React from 'react'
import  { useNavigate} from 'react-router-dom'

export default function AddBank() {
  const navigate = useNavigate();
  
const sendForm = (el)=>{
  el.preventDefault()
  let formElem = document.getElementById('formElem');
  const bank = {
    name: formElem.name.value,
    rate: formElem.rate.value + ' %',
    loan: formElem.loan.value +' $',
    minimumPayment: formElem.minimumPayment.value + ' %',
    loanTerm: formElem.loanTerm.value + ' years'
  }
console.log(bank)
  fetch(`http://localhost:4200/addbank`,{
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=UTF-8"
    },
    body:  JSON.stringify(bank),
});
navigate('/')
}
  
  return (
        <div>AddBank
        <form id='formElem'>
          <label>Name: <input type="text" name='name'></input></label><br/>
          <label>Interest rate: <input type="number" name='rate'></input> %</label><br/>
          <label>Maximum loan: <input type="number" name='loan'></input> $</label><br/>
          <label>Minimum down payment: <input type="number" name='minimumPayment'></input> %</label><br/>
          <label>Loan term: <input type="number" name='loanTerm'></input> years</label><br/>
          <button onClick={sendForm}>Зберегти</button>
        </form>
        </div>

  )
}
