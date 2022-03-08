function vaccineDateHide() {
    let n = document.getElementById("vaccine-date");
    n.style.display = "none";
}

function vaccineDateShow() {
    let b = document.getElementById("vaccine-date");
    b.style.display = "block";
}

function covidDatehide() {
    let n = document.getElementById("covid-date");
    n.style.display = "none";
}

function covidDateShow() {
    let b = document.getElementById("covid-date");
    b.style.display = "block";
}

function devTalkHide() {
    document.getElementById("devTalk").style.display = "none";
    document.getElementById("devTalkParagraph").style.display = "none";
}

function devTalkShow() {
    document.getElementById("devTalk").style.display = "block";
    document.getElementById("devTalkParagraph").style.display = "block";
}