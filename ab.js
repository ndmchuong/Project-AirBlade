function blockTitle() {
    let hoverLinkHeader = document.getElementsByClassName("hover-link-header");
    hoverLinkHeader[0].style.display = "block";
    
}
function blockTitle2() {
    let hoverLinkHeader = document.getElementsByClassName("hover-link-header");
    hoverLinkHeader[1].style.display = "block";
}
function noneTitle() {
    let hoverLinkHeader = document.getElementsByClassName("hover-link-header");
    hoverLinkHeader[0].style.display = "none";
}
function noneTitle2() {
    let hoverLinkHeader = document.getElementsByClassName("hover-link-header");
    hoverLinkHeader[1].style.display = "none";
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
    }
    if (indexSafety === 1) {
        indexSafety = 0;
        let safety = document.getElementsByClassName("img-text-st3-center-information3");
        safety[0].style.display = "none";
        let textSafety = document.getElementsByClassName("st3-right-columns-text");
        textSafety[2].style.display = "none";
    }
    indexDesign += 1;
    if (indexDesign === 2) {
       indexDesign = 0;
    }
    let design = document.getElementsByClassName("img-text-st3-center-information1");
    let textDesign = document.getElementsByClassName("st3-right-columns-text");
    if (indexDesign === 1) {
        design[0].style.display = "flex";
        textDesign[0].style.display = "block";
    }
    else {
        design[0].style.display = "none";
        textDesign[0].style.display = "none";
    }
}

function blockTech() {
    if (indexDesign === 1) {
        indexDesign = 0;
        let design = document.getElementsByClassName("img-text-st3-center-information1");
        design[0].style.display = "none";
        let textDesign = document.getElementsByClassName("st3-right-columns-text");
        textDesign[0].style.display = "none";
    }
    if (indexSafety === 1) {
        indexSafety = 0;
        let safety = document.getElementsByClassName("img-text-st3-center-information3");
        safety[0].style.display = "none";
        let textSafety = document.getElementsByClassName("st3-right-columns-text");
        textSafety[2].style.display = "none";
    }
    indexTech += 1;
    if (indexTech === 2) {
       indexTech = 0;
    }
    let tech = document.getElementsByClassName("img-text-st3-center-information2");
    let textTech = document.getElementsByClassName("st3-right-columns-text");
    if (indexTech === 1) {
        tech[0].style.display = "flex";
        textTech[1].style.display ="block"
    }
    else {
        tech[0].style.display = "none";
        textTech[1].style.display = "none";
    }
}

function blockSafety() {
    if (indexDesign === 1) {
        indexDesign = 0;
        let design = document.getElementsByClassName("img-text-st3-center-information1");
        design[0].style.display = "none";
        let textDesign = document.getElementsByClassName("st3-right-columns-text");
        textDesign[0].style.display = "none";
    }
    if (indexTech === 1) {
        indexTech = 0;
        let tech = document.getElementsByClassName("img-text-st3-center-information2");
        tech[0].style.display = "none";
        let textTech = document.getElementsByClassName("st3-right-columns-text");
        textTech[1].style.display = "none";
    }
    indexSafety += 1;
    if (indexSafety === 2) {
       indexSafety = 0;
    }
    let safety = document.getElementsByClassName("img-text-st3-center-information3");
    let textSafety = document.getElementsByClassName("st3-right-columns-text");
    if (indexSafety === 1) {
        safety[0].style.display = "flex";
        textSafety[2].style.display = "block";
    }
    else {
        safety[0].style.display = "none";
        textSafety[2].style.display = "none";
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

