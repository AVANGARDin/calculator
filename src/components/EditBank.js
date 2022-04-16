import React, {useEffect} from 'react';
import  { useNavigate} from 'react-router-dom'


export default function EditBank() {
  const navigate = useNavigate()

  useEffect(()=>{
    fetch(`http://localhost:4200/editbank/${localStorage.getItem('id')}`)
        .then((response) => response.json())
        .then((data) => {
          const formElem = document.getElementById('formElem');
            formElem.name.value = data.name;
            formElem.rate.value = parseInt(data.rate);
            formElem.loan.value = parseInt(data.loan);
            formElem.minimumPayment.value = parseInt(data.minimumPayment);
            formElem.loanTerm.value = parseInt(data.loanTerm);
        }
          )
  },[]);

  const seveForm = (el)=>{
    el.preventDefault()
    let formElem = document.getElementById('formElem');
    const bank = {
      name: formElem.name.value,
      rate: formElem.rate.value + ' %',
      loan: formElem.loan.value +' $',
      minimumPayment: formElem.minimumPayment.value + ' %',
      loanTerm: formElem.loanTerm.value + ' years'
    }

    fetch(`http://localhost:4200/editbank/${localStorage.getItem('id')}`,{
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8"
      },
      body:  JSON.stringify(bank),
  });
  localStorage.clear();
  navigate('/');
  }


  return (
    <div><h2>Edit bank</h2>
        <form id='formElem'>
          <label>Name: <input type="text" name='name'></input></label><br/>
          <label>Interest rate: <input type="number" name='rate'></input> %</label><br/>
          <label>Maximum loan: <input type="number" name='loan'></input> $</label><br/>
          <label>Minimum down payment: <input type="number" name='minimumPayment'></input> %</label><br/>
          <label>Loan term: <input type="number" name='loanTerm'></input> years</label><br/>
          <button onClick={seveForm}>Зберегти</button>
        </form>
      </div>
  )
}
