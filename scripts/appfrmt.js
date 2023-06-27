const thTextA = document.getElementById('thTextA');
const thTextB = document.getElementById('thTextB');
const inner = document.querySelector(".inner");
let i = 0;


function moveText() {
    if(i == 0) {
        thTextA.innerText = "Free Delivery & returns";
        thTextB.innerText = "Nike members get free Delivery and free 30 day returns";
        inner.classList.add("mfl");
        inner.classList.remove("mfr");
        i++;
    }else if (i == 1) {
        thTextA.innerText = "Student Discount";
        thTextB.innerText = "10% off for students.";
        inner.classList.remove("mfl");
        inner.classList.add("mfr");
        i--;
    }
    
}
setInterval(moveText, 1000);

