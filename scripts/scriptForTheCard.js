let containerLeft = document.getElementById('containerLeft');
let containerRight = document.getElementById('containerRight');
let dataNamesArray = JSON.parse(localStorage.getItem('dataName'));
let dataPriceArray = JSON.parse(localStorage.getItem('dataPrice'));
let total = document.getElementById('Total');


function view() {
    for (let w = dataNamesArray.length - 1; w >= 0; w--) {
        const para = document.createElement("p");
        const brum = document.createElement("p");
        containerLeft.appendChild(para);
        containerRight.appendChild(brum);
        para.innerText = dataNamesArray[w];
        brum.innerText = dataPriceArray[w];
    }
    
}
function clearTheCard() {
    containerRight.innerHTML = "";
    containerLeft.innerHTML = "";
    localStorage.clear();
    total.innerHTML = "";
    redCircle.innerHTML = "0";
    
}
let fullPrice = 0;
function getTheTotal () {
    
    for (let m = dataPriceArray.length - 1; m >= 0; m--) {
        const regex = /(?<=£)\d+(?:\.\d+)?|\d+(?:\.\d+)?(?=£)/g;
        let newString = dataPriceArray[m].match(regex, "");
        console.log(newString);
        fullPrice += parseInt(newString);
    }
    total.innerHTML = "£" + fullPrice;
    
}
getTheTotal();

view();