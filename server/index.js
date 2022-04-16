const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(bodyParser.json());

let list = [
  {id: 5, name: "Privat", rate: '7 %', loan: '200000 $', minimumPayment:'20 %',loanTerm:"3 years"},
  {id: 6, name: "Privat24", rate: '7 %', loan: '200000 $', minimumPayment:'20 %',loanTerm:"3 years"}
];

app.get('/list', (req, res) => {
        res.send(list);
});

app.get('/list/:id', (req,res)=>{
console.log(req.params.id);
list = list.filter(el=>el.id != req.params.id)
console.log(list)
});


app.post('/addbank', (req,res)=>{
  console.log(req.body);
  let id = list[list.length-1] ? list[list.length-1].id + 1 : 1 ;
  list.push({'id':id, ...req.body})
  console.log(list)
  });

app.get('/editbank/:id', (req,res)=>{
  console.log(req.params.id);
  res.send(list.find(el=>el.id == +req.params.id));
  });

  app.post('/editbank/:id', (req,res)=>{
    console.log(req.body, req.params.id);
    let index = list.findIndex(el=>el.id == req.params.id);
    console.log(index)
    list.splice(index,1, {id: +req.params.id,...req.body})
    console.log(list)
    });


app.listen(4200, () => {
    console.log('Server start');
});
