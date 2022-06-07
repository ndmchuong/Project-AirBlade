let indexMenu = 0;
function blockMenu() {
    indexMenu += 1;
    if (indexMenu > 1) {
        indexMenu = 0;
    }
    let headerList = document.getElementsByClassName("header-list-responsive");
    let navList = document.getElementsByClassName("nav-list-responsive");
    if (indexMenu == 1) {
        headerList[0].style.top = "64px";
        navList[0].style.top = "24px";
    }
    if (indexMenu == 0) {
        headerList[0].style.top = "-500px";
        navList[0].style.top = "-500px";
        
    }
    
}
let indexDesign = 0;
let indexTech = 0;
let indexSafety = 0;
function blockDesign() {
    if (indexTech === 1) {
        indexTech = 0;
        let tech = document.getElementsByClassName("img-text-st3-center-information2");
        tech[0].style.display = "none";
        let textTech = document.getElementsByClassName("st3-right-columns-text");
        textTech[1].style.display = "none";
        let angelDown = document.getElementsByTagName("i");
        angelDown[1].style.transform = "rotate(0deg)";
    }
    if (indexSafety === 1) {
        indexSafety = 0;
        let safety = document.getElementsByClassName("img-text-st3-center-information3");
        safety[0].style.display = "none";
        let textSafety = document.getElementsByClassName("st3-right-columns-text");
        textSafety[2].style.display = "none";
        let angelDown = document.getElementsByTagName("i");
        angelDown[2].style.transform = "rotate(0deg)";
    }
    indexDesign += 1;
    if (indexDesign === 2) {
       indexDesign = 0;
    }
    let design = document.getElementsByClassName("img-text-st3-center-information1");
    let textDesign = document.getElementsByClassName("st3-right-columns-text");
    let angelDown = document.getElementsByTagName("i");
    if (indexDesign === 1) {
        design[0].style.display = "flex";
        textDesign[0].style.display = "block";
        angelDown[0].style.transform = "rotate(180deg)"
    }
    else {
        design[0].style.display = "none";
        textDesign[0].style.display = "none";
        angelDown[0].style.transform = "rotate(0deg)"
    }
}

function blockTech() {
    if (indexDesign === 1) {
        indexDesign = 0;
        let design = document.getElementsByClassName("img-text-st3-center-information1");
        design[0].style.display = "none";
        let textDesign = document.getElementsByClassName("st3-right-columns-text");
        textDesign[0].style.display = "none";
        let angelDown = document.getElementsByTagName("i");
        angelDown[0].style.transform = "rotate(0deg)"
    }
    if (indexSafety === 1) {
        indexSafety = 0;
        let safety = document.getElementsByClassName("img-text-st3-center-information3");
        safety[0].style.display = "none";
        let textSafety = document.getElementsByClassName("st3-right-columns-text");
        textSafety[2].style.display = "none";
        let angelDown = document.getElementsByTagName("i");
        angelDown[2].style.transform = "rotate(0deg)";
    }
    indexTech += 1;
    if (indexTech === 2) {
       indexTech = 0;
    }
    let tech = document.getElementsByClassName("img-text-st3-center-information2");
    let textTech = document.getElementsByClassName("st3-right-columns-text");
    let angelDown = document.getElementsByTagName("i");
    if (indexTech === 1) {
        tech[0].style.display = "flex";
        textTech[1].style.display ="block";
        angelDown[1].style.transform = "rotate(180deg)";
    }
    else {
        tech[0].style.display = "none";
        textTech[1].style.display = "none";
        angelDown[1].style.transform = "rotate(0deg)";
    }
}

function blockSafety() {
    if (indexDesign === 1) {
        indexDesign = 0;
        let design = document.getElementsByClassName("img-text-st3-center-information1");
        design[0].style.display = "none";
        let textDesign = document.getElementsByClassName("st3-right-columns-text");
        textDesign[0].style.display = "none";
        let angelDown = document.getElementsByTagName("i");
        angelDown[0].style.transform = "rotate(0deg)"
    }
    if (indexTech === 1) {
        indexTech = 0;
        let tech = document.getElementsByClassName("img-text-st3-center-information2");
        tech[0].style.display = "none";
        let textTech = document.getElementsByClassName("st3-right-columns-text");
        textTech[1].style.display = "none";
        let angelDown = document.getElementsByTagName("i");
        angelDown[1].style.transform = "rotate(0deg)";
    }
    indexSafety += 1;
    if (indexSafety === 2) {
       indexSafety = 0;
    }
    let safety = document.getElementsByClassName("img-text-st3-center-information3");
    let textSafety = document.getElementsByClassName("st3-right-columns-text");
    let angelDown = document.getElementsByTagName("i");
    if (indexSafety === 1) {
        safety[0].style.display = "flex";
        textSafety[2].style.display = "block";
        angelDown[2].style.transform = "rotate(180deg)";
    }
    else {
        safety[0].style.display = "none";
        textSafety[2].style.display = "none";
        angelDown[2].style.transform = "rotate(0deg)";
    }
}
let index = 0;
let image = document.getElementsByClassName("slide");
let content = document.getElementsByClassName("content");

function blockDetail() {
    let detail = document.getElementsByClassName("st3-fullview");
    detail[0].style.display = "flex";
    image[index].style.display = "block";
    content[index].style.display = "block";
}
function closeDetail() {
    let detail = document.getElementsByClassName("st3-fullview");
    detail[0].style.display = "none";
}

function nextSlide() {
    image[index].style.display = "none";
    content[index].style.display = "none";
    index += 1;
    if (index > 10) {
        index = 0;
    }
    image[index].style.display = "block";
    content[index].style.display = "block";
}
function previousSlide() {
    image[index].style.display = "none";
    content[index].style.display = "none";
    index -= 1;
    if (index < 0) {
        index = 10;
    }
    image[index].style.display = "block";
    content[index].style.display = "block";
}
let price = document.getElementsByClassName("price-edition");
let imageColor = document.getElementsByClassName("st4-img-color");
function blackEdition() {
    /*imageColor[0].style.backgroundImage = "url(img/den-db.png)";*/
    let valueColor = 0;
    for (let i = 0; i < imageColor.length; i++) {
        if (i == valueColor) {
            imageColor[i].style.display = "block";
        }
        if (i != valueColor) {
            imageColor[i].style.display = "none";
        }
    }
    price[0].innerHTML = "43.290.000 VNĐ";
}
function redBlack125() {
    /*imageColor[0].style.backgroundImage = "url(img/do-125-tc.png)";*/
    let valueColor = 1;
    for (let i = 0; i < imageColor.length; i++) {
        if (i == valueColor) {
            imageColor[i].style.display = "block";
        }
        if (i != valueColor) {
            imageColor[i].style.display = "none";
        }
    }
    price[0].innerHTML = "42.090.000 VNĐ";
}
function blueBlack125() {
    /*imageColor[0].style.backgroundImage = "url(img/xanh-125-tc.png)";*/
    let valueColor = 2;
    for (let i = 0; i < imageColor.length; i++) {
        if (i == valueColor) {
            imageColor[i].style.display = "block";
        }
        if (i != valueColor) {
            imageColor[i].style.display = "none";
        }
    }
    price[0].innerHTML = "42.090.000 VNĐ";
}
function specialEdition() {
    /*imageColor[0].style.backgroundImage = "url(img/xanh-db.png)";*/
    let valueColor = 3;
    for (let i = 0; i < imageColor.length; i++) {
        if (i == valueColor) {
            imageColor[i].style.display = "block";
        }
        if (i != valueColor) {
            imageColor[i].style.display = "none";
        }
    }
    price[0].innerHTML = "57.190.000 VNĐ";
}
function redGrey160() {
    /*imageColor[0].style.backgroundImage = "url(img/do-160-tc.png)";*/
    let valueColor = 4;
    for (let i = 0; i < imageColor.length; i++) {
        if (i == valueColor) {
            imageColor[i].style.display = "block";
        }
        if (i != valueColor) {
            imageColor[i].style.display = "none";
        }
    }
    price[0].innerHTML = "55.990.000 VNĐ";
}
function blackGrey160() {
    /*imageColor[0].style.backgroundImage = "url(img/den-160-tc.png)";*/
    let valueColor = 5;
    for (let i = 0; i < imageColor.length; i++) {
        if (i == valueColor) {
            imageColor[i].style.display = "block";
        }
        if (i != valueColor) {
            imageColor[i].style.display = "none";
        }
    }
    price[0].innerHTML = "55.990.000 VNĐ";
}
function blueGrey160() {
    /*imageColor[0].style.backgroundImage = "url(img/xanh-160-tc.png)";*/
    let valueColor = 6;
    for (let i = 0; i < imageColor.length; i++) {
        if (i == valueColor) {
            imageColor[i].style.display = "block";
        }
        if (i != valueColor) {
            imageColor[i].style.display = "none";
        }
    }
    price[0].innerHTML = "55.990.000 VNĐ";
}




