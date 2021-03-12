function parallax(element, distance, speed){
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}

function parallaxInAxisX(element, distance, speed){
    const item = document.querySelector(element);
    item.style.transform = `translateX(${distance * speed}px)`;
}


window.addEventListener("scroll", function(){
    // parallax('header', scrollY, 1);
    parallaxInAxisX('.moon', scrollY, 0.9);
    parallax('.morro1', scrollY, 0.9);
    parallax('.morro2', scrollY, 0.8);
    parallax('.morro3', scrollY, 1.4);
    parallaxInAxisX('.sun', scrollY, -0.22);
    parallaxInAxisX('.good-morning', scrollY, 0);
    // console.log(scrollY)
})