const  toastBoxEl = document.getElementById('toast-box');
let successMsg = '<i class="fa-solid fa-circle-check"></i>Successfully Submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>System Error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invaid input';

function showToast(msg){
    let toastDivEl = document.createElement('div');
    toastDivEl.classList.add('toast-show');
    toastDivEl.innerHTML = msg;
    toastBoxEl.appendChild(toastDivEl);

    if(msg === successMsg){
        toastDivEl.classList.add('success');
    }
    else if(msg === errorMsg){
        toastDivEl.classList.add('error');
    }
    else{
        toastDivEl.classList.add('invalid');
    }

    setTimeout(() => {
        toastDivEl.remove();
    }, 6000);
    
    
}
