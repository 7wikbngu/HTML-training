
// check email
var x, value = 0;

function redgreen() {
    x = document.getElementById("email").value;
    if((/@/.test(x) === true) && (/.com\b/.test(x) === true)) {
        console.log("GREEN");
        value = 1;
    }

    (value === 1 && x.length > 0) ? document.getElementById("email").style.border = "2px solid green" 
    : document.getElementById("email").style.border = "2px solid red";
}

// for the slideshow of logos
var slides, i = 0;
slides = document.getElementsByClassName("slide");

for(var j=0;j<slides.length;j++){
    slides[j].style.display = "none";
}

carousel();

function carousel(){
    console.log("I: ", i);
    
    if( (i<=3) && (i>0) ){
        slides[i-1].style.display = "none";
    } else{
        slides[i+3].style.display = "none"
    }

    slides[i].style.display = "block";
    (i >= 3) ? i=0 : i++ ;
    setTimeout(carousel, 3000);
    
}

function divHide() {
    document.getElementById("disappear").style.display = "block";
}

