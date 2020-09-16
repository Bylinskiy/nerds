var contactsButton = document.querySelector(".contacts__button");
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup__modal-close");

var userName = popup.querySelector("[name=user-name]");


contactsButton.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.add("popup--show");
	userName.focus();
});

close.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.remove("popup--show");
});

window.addEventListener("keydown", function(evt) {
    if(evt.keyCode === 27) {
        if (popup.classList.contains("popup--show")) {
            evt.preventDefault();
            popup.classList.remove("popup--show");
        }
    }
});