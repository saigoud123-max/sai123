let b1 = document.getElementById("b1");
let cat = document.getElementById("cat");
let k = document.getElementById("status");
let off = document.getElementById("off");
let on = document.getElementById("on");
function switchOff(){
    off.style.backgroundColor="blue";
    on.style.backgroundColor ="red";
    k.textContent="switched Off"
    
    cat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    b1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";

}

function switchOn(){
    off.style.backgroundColor="red";
    on.style.backgroundColor ="blue";
    k.textContent="switched On";
    cat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    b1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";

}