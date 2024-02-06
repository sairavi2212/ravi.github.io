function toggle() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".icons");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function myFunction() {
    document.body.classList.toggle("full-body");
    var elements = document.querySelectorAll('.text');
    elements.forEach(function (element) {
        element.classList.toggle('change');
    });
    var elements=document.querySelectorAll('.line-initial');
    elements.forEach(function(element){
        element.classList.toggle('line-final');
    });
    var elements=document.querySelectorAll('.icons');
    elements.forEach(function(element){
        element.classList.toggle('dark');
    });
    var elements=document.querySelectorAll('.menu-links');
    elements.forEach(function(element){
        element.classList.toggle('dark_menu');
    });
    var elements=document.querySelectorAll('.text_color');
    elements.forEach(function(element){
        element.classList.toggle('text_color_dark');
    });
}

let isLiked = false;
let likeCount = 0;

function toggleLike() {
    isLiked = !isLiked;
    if(isLiked) likeCount+=1;
    else likeCount-=1;

    update();
}

function update() {
    const likeButton = document.getElementById('likeButton');
    const likeCountSpan = document.getElementById('likeCount');
    if(isLiked) likeButton.textContent='Unlike';
    else likeButton.textContent='Like';
    likeCountSpan.textContent = likeCount;
}


