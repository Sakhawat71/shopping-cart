"use strict";

function productChange(porduct, isIncrease) {
  var porductInput = document.getElementById(porduct + '-count');
  var porductNumber = parseInt(porductInput.value);
  porductNewCount = porductNumber;

  if (isIncrease == true) {
    porductNewCount = porductNumber + 1;
  }

  if (isIncrease == false && porductNewCount > 0) {
    porductNewCount = porductNumber - 1;
  }

  porductInput.value = porductNewCount;
  var porductPrice = 0;

  if (porduct == 'phone') {
    porductPrice = porductNewCount * 1200;
  }

  if (porduct == 'case') {
    porductPrice = porductNewCount * 60;
  }

  document.getElementById(porduct + '-Price').innerText = porductPrice;
  porductPriceCalculet();
}

;

function porductPriceCalculet() {
  var totalPrice = gteInputValue('phone') * 1200 + gteInputValue('case') * 60;
  document.getElementById('total-price').innerText = '$' + totalPrice;
  var taxcount = totalPrice * 0.1;
  var tax = Math.round(taxcount);
  document.getElementById('tax').innerText = '$' + tax;
  var finalPrice = totalPrice + tax;
  document.getElementById('final-price').innerText = '$' + finalPrice;
}

;

function gteInputValue(porduct) {
  var porductInput = document.getElementById(porduct + '-count');
  var porductCount = parseInt(porductInput.value);
  return porductCount;
}

; // const phoneInput = document.getElementById('phone-count');
// const phoneCount = parseInt(phoneInput.value);
// const caseInput = document.getElementById('case-count');
// const caseCount = parseInt(caseInput.value);
// const phoneCount = gteInputValue('phone');
// const caseCount = gteInputValue('case');
// const totalPrice = phoneCount * 1200 + caseCount * 60;
// function productChange(isIncrease)
// {
//     const porductInput = document.getElementById('porduct-count');
//     const porductNumber = parseInt(porductInput.value);
//     porductNewCount = porductNumber;
//     if(isIncrease == true){
//         porductNewCount = porductNumber + 1;
//     }
//     if(isIncrease == false && porductNewCount > 1){
//         porductNewCount = porductNumber - 1;
//     }
//     porductInput.value = porductNewCount;
//     const porductTotalPrice = porductNewCount * 60;
//     document.getElementById('porductPrice').innerText = porductTotalPrice;
// };
// function porductIncreaseDecrease(isIncrease)
// {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     if(isIncrease == true){
//         phoneNewCount = phoneCount + 1;
//     }
//     if(isIncrease == false && phoneCount > 1){
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotalPrice = phoneNewCount * 1200;
//     document.getElementById('phone-total-price').innerText = phoneTotalPrice;
// };
// const phoneInput = document.getElementById('phone-count');
// const phoneCount = parseInt(phoneInput.value);
// const phoneNewCount = phoneCount + 1;
// phoneInput.value = phoneNewCount;
// const phoneTotalPrice = phoneNewCount * 1200;
// document.getElementById('phone-total-price').innerText = phoneTotalPrice;
// document.getElementById("increase").addEventListener('click',function()
// {
//     productChange(true);
// }
// );