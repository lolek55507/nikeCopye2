
const tt = document.querySelector(".tt");
const fullRightContainer = document.querySelector(".fullRightContainer");
const imagAndTextContainer = document.querySelector(".image_And_Text_Container");
const imageContainer = document.querySelector(".image_Container");
let redCircle = document.getElementById('red_Circle');
let productName = document.getElementById("name");
let productPrice = document.getElementById("thePrice");
let forCheck = "red";
let s = 0;
function showOptions() {
    if (s == 0) {
        tt.style.opacity = "1";
        fullRightContainer.style.opacity = "1";
        s++;
    }else if (s == 1) {
        tt.style.opacity = "0";
        fullRightContainer.style.opacity = "0";
        s--;
    }
}
function moveRight(red, green, blue, tfrn, tfgn, tfbn, tfrp, tfgp, tfbp) {
    if (forCheck == "red") {
        productName.innerText = tfgn;
        productPrice.innerText = tfgp;
        imageContainer.classList.remove(red)
        imageContainer.classList.add(green);
        productNameValue = tfgn;
        priceValue = tfgp;
        forCheck = "green";

    } else if (forCheck == "green") {
        productName.innerText = tfbn;
        productPrice.innerText = tfbp;
        imageContainer.classList.remove(green)
        imageContainer.classList.add(blue);
        productNameValue = tfbn;
        priceValue = tfbp;
        forCheck = "blue";
    } else if(forCheck == "blue") {
        productName.innerText = tfrn;
        productPrice.innerText = tfrp;
        imageContainer.classList.remove(blue)
        imageContainer.classList.add(red);
        productNameValue = tfrn;
        priceValue = tfrp;
        forCheck = "red";
    }
}
function moveLeft(red, green, blue, tfrn, tfgn, tfbn, tfrp, tfgp, tfbp) {
    if (forCheck == "red") {
        productName.innerText = tfbn;
        productPrice.innerText = tfbp;
        imageContainer.classList.remove(red)
        imageContainer.classList.add(blue);
        productNameValue = tfbn;
        priceValue = tfbp;
        forCheck = "blue";
    } else if (forCheck == "blue") {
        productName.innerText = tfgn;
        productPrice.innerText = tfgp;
        imageContainer.classList.remove(blue)
        imageContainer.classList.add(green);
        productNameValue = tfgn;
        priceValue = tfgp;
        forCheck = "green";
    }   else if(forCheck == "green") {
        productName.innerText = tfrn;
        productPrice.innerText = tfrp;
        imageContainer.classList.remove(green)
        imageContainer.classList.add(red);
        productNameValue = tfrn;
        priceValue = tfrp;
        forCheck = "red";
    }
}


function saveData(name, price) {
    // Get data from input box
    let new_Data_Name = name;
    let new_Data_Price = price;


    // If there is nothing saved at the start then save an empty array 
    if(localStorage.getItem('dataName') == null){
        localStorage.setItem('dataName', '[]');
        localStorage.setItem('dataPrice', '[]');
        setRedCirlceValue();
    }

    // get old data and slap it on the new data

    let old_Data_Name = JSON.parse(localStorage.getItem('dataName'));
    let old_Data_Price = JSON.parse(localStorage.getItem('dataPrice'));
    old_Data_Name.push(new_Data_Name);
    old_Data_Price.push(new_Data_Price);

    // save the old + new data to local storage
    localStorage.setItem('dataName', JSON.stringify(old_Data_Name));
    localStorage.setItem('dataPrice', JSON.stringify(old_Data_Price));
    setRedCirlceValue();
}

function setRedCirlceValue() {
    let NamesAr = JSON.parse(localStorage.getItem('dataName'));
    redCircle.innerText = NamesAr.length;
}

setRedCirlceValue();
