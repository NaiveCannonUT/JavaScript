const btnLeft = document.querySelector(".btn-left"),
btnRigth = document.querySelector(".btn-rigth"),
slider = document.querySelector("#slider"),
sliderSection = document.querySelectorAll(".slider-section");


btnLeft.addEventListener("click", e => moveToLeft())
btnRigth.addEventListener("click", e => moveToRigth())

let operacion = 0;
counter = 0, 
    widthImg = 100 /sliderSection.length;
function moveToRigth() {
    if (counter >= sliderSection.length-1) {
        counter = 0
        operacion = 0
        slider.style.transform = `translate(-${operacion}%)`

        slider.style.transition = "none"    } else {
         counter++
    operacion= operacion + widthImg
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease .5s"
    }
   
}

function moveToLeft() {
    counter--;
    if (counter < 0) {
        counter = sliderSection.length-1
        operacion= widthImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "none"
    } else {
        operacion= operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease .5s"
}
    }