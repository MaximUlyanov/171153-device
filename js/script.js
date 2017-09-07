var letterLink = document.querySelector(".write-us-btn");
var letterPopap = document.querySelector(".write-us");
var exit = letterPopap.querySelector(".close");
var overlay = document.querySelector(".modal-overlay");
var form = letterPopap.querySelector(".write-us-form");
var userName = form.querySelector(".form-name");
var Mail = form.querySelector(".form-email");
var Letter = form.querySelector(".form-letter");
var storage = localStorage.getItem("userName");
var storageMail = localStorage.getItem("Mail");
var mapLink = document.querySelector(".map");
var mappopap = document.querySelector(".modal-map");
var mapClose = mappopap.querySelector(".close");

letterLink.addEventListener("click", function (evt) { 
  evt.preventDefault();
  overlay.classList.add("modal-overlay-on");
  letterPopap.classList.add("popap");
  if (storage) {
    userName.value = storage;
    Mail.focus();
  } else {
    userName.focus();
  }
});

exit.addEventListener("click", function (evt) {
  evt.preventDefault();
  letterPopap.classList.remove("popap");
  overlay.classList.remove("modal-overlay-on");
  letterPopap.classList.remove("modal-form-error");
});

form.addEventListener("submit", function (evt) {
  if(!userName.value || !Mail.value || !Letter.value) {
    evt.preventDefault();
    letterPopap.classList.remove("modal-form-error");
    letterPopap.offsetWidth = letterPopap.offsetWidth;
    letterPopap.classList.add("modal-form-error");
    if(!userName.value) {
      userName.classList.add("modal-form-invalid");
    }
    if(!Mail.value) {
      Mail.classList.add("modal-form-invalid");
    }
    if(!Letter.value) {
      Letter.classList.add("modal-form-invalid");
    }
  } else {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("Mail", Mail.value);
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (letterPopap.classList.contains("popap")) {
        letterPopap.classList.remove("popap");
        letterPopap.classList.remove("modal-form-error");
    }
    if (overlay.classList.contains("modal-overlay-on")) {
        overlay.classList.remove("modal-overlay-on");
    }
  }
});

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.add("modal-overlay-on");
    mappopap.classList.add("popap");
  });

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.remove("modal-overlay-on");
    mappopap.classList.remove("popap");
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mappopap.classList.contains("popap")) {
     mappopap.classList.remove("popap");
      }
    if (overlay.classList.contains("modal-overlay-on")) {
      overlay.classList.remove("modal-overlay-on");
    }
  }
});