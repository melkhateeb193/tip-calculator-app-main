
document.addEventListener("DOMContentLoaded",(e)=>{
e.preventDefault();
let billInput = document.getElementById('BillInput');
let buttonValue =document.querySelectorAll('.buttonValue');
let NumberofPeaple = document.getElementById('NumberofPeaple');
let outPutTipAmount =document.querySelector(".outPutNumber1");
let outPutTotal =document.querySelector(".outPutNumber2");
let buttonReset = document.getElementById('buttonReset');
let error = document.querySelector('.error2');
let error1 = document.querySelector('.error');
let inputCustom = document.getElementById('inputCustom');

buttonValue.forEach((e) => {
    e.addEventListener('click', () => {
        const match = e.textContent.match(/(\d+)%/);
        // console.log(match[1])
       let billValue = billInput.value;
       let numberOfPeople = NumberofPeaple.value ;
       if (numberOfPeople == "" || numberOfPeople == "") {
        NumberofPeaple.style.border='2px red solid';
        billInput.style.border='2px red solid';
        error.classList.replace('d-none','d-block');
        error1.classList.replace('d-none','d-block');
        setTimeout(() => {
            NumberofPeaple.style.border='';
            billInput.style.border='';
            error.classList.replace('d-block','d-none');
            error1.classList.replace('d-block','d-none');
        }, 2500);
       }else{
        outPutTipAmount.innerHTML=tipAmount(tipCalculate(billValue,match[1]),numberOfPeople).toFixed(2);
        outPutTotal.innerHTML=calculateTotal(tipAmount(tipCalculate(billValue,match[1]),numberOfPeople),billValue,numberOfPeople).toFixed(2);
       }
    });
});

buttonReset.addEventListener('click',()=>{

    outPutTipAmount.innerHTML="$0.00";
    outPutTotal.innerHTML="$0.00";
    billInput.value = "";
    NumberofPeaple.value = "";
})


inputCustom.addEventListener('focusout',()=>{
    let billValue = billInput.value;
    let numberOfPeople = NumberofPeaple.value ;
    if (numberOfPeople == "" || numberOfPeople == "") {
        NumberofPeaple.style.border='2px red solid';
        billInput.style.border='2px red solid';
        error.classList.replace('d-none','d-block');
        error1.classList.replace('d-none','d-block');
        setTimeout(() => {
            NumberofPeaple.style.border='';
            billInput.style.border='';
            error.classList.replace('d-block','d-none');
            error1.classList.replace('d-block','d-none');
        }, 2000);
       }else{
        outPutTipAmount.innerHTML=tipAmount(tipCalculate(billValue,inputCustom.value),numberOfPeople).toFixed(2);
        outPutTotal.innerHTML=calculateTotal(tipAmount(tipCalculate(billValue,inputCustom.value),numberOfPeople),billValue,numberOfPeople).toFixed(2);
       }

})
})


function tipCalculate(Number  , precent) {
    
    return Number*(precent/100);
}


function tipAmount(numberoftip , numberOfPeople) {
    return numberoftip/numberOfPeople;
}

function calculateTotal(tipAmount,Number, numberOfPeople){
    let tipSplited = Number / numberOfPeople ;
return tipSplited +tipAmount ;
}

