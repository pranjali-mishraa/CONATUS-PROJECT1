document.addEventListener('DOMContentLoaded',()=>{
const decbtn = document.querySelector('#decbtn');
const btncont = document.querySelector('#btncont');
const intbtn = document.querySelector('#incbtn');

let quantity = parseInt(btncont.textContent);

intbtn.addEventListener('click',function(){
quantity++
btncont.textContent = quantity;
});

decbtn.addEventListener('click' , function(){
  if(quantity>1){
    quantity--;

    btncont.textContent=quantity;
  }
})


const aftpay = document.querySelector('#afterpay');

aftpay.addEventListener('click',function(){
    aftpay.textContent="paid"
});



}

)