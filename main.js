
let bill = document.querySelector('.calculadora1_bill');
let billNumber = parseInt(bill.value);

let people = document.querySelector('.calculadora1_people');
let PeopleNumber =parseInt(people.value);

let tipResult = document.querySelector('.resultados-valores');
let totalresult = document.querySelector('.resultados-tvalores');

let butons = document.querySelectorAll('.button_porcentajes');
let tipValue=10;

  butons.forEach(Element =>{
    Element.addEventListener('click', Event=>{
        butons.forEach(Element =>{
            Element.classList.remove('button_porcentajesselec');
        });
        Element.classList.add('button_porcentajesselec');

        
        tipValue = parseInt(Event.target.innerText.slice(0,-1));
        calculateTip()
      
    });
  })
  bill.addEventListener('input', ()=>{
    billNumber = parseFloat(bill.value);
    calculateTip()
  });
  people.addEventListener('input', ()=>{
    PeopleNumber = parseFloat(bill.value);

    if(PeopleNumber == 0){
        people.getElementsByClassName.borderColor= 'red'
    }
    calculateTip()
  });
  function calculateTip(){
    tipResult.innerText = ((billNumber * tipValue / 100) / PeopleNumber);

      totalresult.innerText = (((billNumber * tipValue / 100) + billNumber)/ PeopleNumber);

  }