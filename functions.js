

const learn = document.querySelector("learn-more");
const Overlay = document.querySelector(".content-overlay");
const close = document.querySelector('close-btn');

learn.addEventListener('click',function(){
    Overlay.classList.add("open-content");
});
close.addEventListener('click',function(){
    Overlay.classList.remove("open-content");
});