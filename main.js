function but1() {
    document.getElementById("div3").className = "onmore";
    document.getElementById("but1").className = "more";
    document.getElementById("but2").className = "shop";
}

function but2() {
    document.getElementById("div3").className = "more";
    document.getElementById("but2").className = "more";
    document.getElementById("but1").className = "shop";

}

function but4() {
    document.getElementById("div3").className = "onmore";
    document.getElementById("but4").className = "more";
    document.getElementById("but5").className = "navigation23";

}

function but5() {
    document.getElementById("div3").className = "more";
    document.getElementById("but5").className = "more";
    document.getElementById("but4").className = "navigation2";
}

//...............start dark mode.............

function butdark() {
    document.getElementById('butdark').className = "but-of";
    document.getElementById('butwhite').className = "but-on";
    document.getElementById("header2").className = "header-dark";
    document.getElementById("shop").className = "cards-dark";
    document.getElementById("contact").className = "cards-contact-dark";
    document.getElementById('main-btn').className = "main-btn-dark";
    document.getElementById('logo1').className = "but-of";
    document.getElementById('logo2').className = "logo2";
}

function butwhite() {
    document.getElementById('butdark').className = "but-on"
    document.getElementById('butwhite').className = "but-of"
    document.getElementById("header2").className = "header";
    document.getElementById("shop").className = "cards";
    document.getElementById("contact").className = "cards-contact";
    document.getElementById('main-btn').className = "main-btn";
    document.getElementById('logo1').className = "logo1";
    document.getElementById('logo2').className = "but-of";
}