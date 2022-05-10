var elButton = document.querySelector(".burger-btn");
var elMenu = document.querySelector(".navbar");
var elButton2 = document.querySelector(".burger-btn-2");

elButton.addEventListener("click", function () {
    elMenu.classList.add("navbar--open");
    elButton2.classList.add("burger-btn-2--open");
});

elButtonX.addEventListener("click", function () {
    elMenu.classList.remove("navbar--open");
    elButton2.classList.remove("burger-btn-2--open");
})