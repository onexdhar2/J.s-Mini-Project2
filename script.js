let incrementBtn=document.querySelector('#counter .incrementBtn')
let counterInput=document.querySelector('#counter input')

const increment =()=>{
    let newValue=(Number(counterInput.value)+1);
    counterInput.value =newValue;
}

incrementBtn.addEventListener('click',increment)


let decrementBtn =document.querySelector('.decrementBtn')

const decrement = ()=>{
    if (counterInput.value>1 ) {
        let newValue= (Number(counterInput.value) -1);
        counterInput.value=newValue; 
    } 
}

decrementBtn.addEventListener('click',decrement)

counterInput.addEventListener('keyup',()=>{
    if (counterInput.value<1) {
        counterInput.value=1
    }
});


// Password

let eyeBtn =document.querySelector('#formGroup .eyeBtn');
let passwordInput =document.querySelector('#formGroup input')

eyeBtn.addEventListener('click',()=>{
    if (passwordInput.type == 'password') {
        passwordInput.type = 'text'
        eyeBtn.innerHTML=`<i class="bi bi-eye-slash"></i>`
    }
    else{
        passwordInput.type='password'
        eyeBtn.innerHTML=`<i class="bi bi-eye-slash"></i>`
        
    }
})