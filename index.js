const btns = document.querySelectorAll('.btn')
const innerValue = document.querySelector('.inner-value')

let startValue = 0;

btns.forEach((btn) => {
    btn.addEventListener('click',(e) => {
        if(e.currentTarget.classList.contains('increase-btn')){
            innerValue.style.color = 'green'
            startValue++;
        }else if(e.currentTarget.classList.contains('decrease-btn')){
            innerValue.style.color = 'red'
            startValue--;
        }else{
            innerValue.style.color = 'white'
            startValue = 0;
        }
        innerValue.innerText = startValue
    })

})