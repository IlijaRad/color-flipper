let r,g,b, clr;
document.querySelector(".click").onclick = () => changeBackgroundColor();

function generateColor() {
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    clr = `rgb(${r},${g},${b},100)`;
}
function componentToHex(c){
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToText(r,g,b){
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function changeBackgroundColor(){
    generateColor();
    let hex = rgbToText(r,g,b);
    document.body.style.background = clr;
    document.querySelector(".text").innerHTML = 'Background color: ' + hex;
}