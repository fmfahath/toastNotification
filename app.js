const  toastBoxEl = document.getElementById('toast-box');
let successMsg = "Successfully Submitted";
let errorMsg = "System Error";
let invalidMsg = 'PLease, Check the input';

function showToast(msg){
    let toastDivEl = document.createElement('div');
    toastDivEl.classList.add('toast-show');
    toastDivEl.innerHTML = msg;
    toastBoxEl.appendChild(toastDivEl);
}
