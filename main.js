const din = document.getElementById ("din");
const cactus = document.getElementById ("cactus");
din.filter="blur(10%)"
document.addEventListener("keydown" ,function (event){
    jump();
});
function jump () {
    if (din.classList != "jump") {
        din.classList.add("jump")
    }
    setTimeout (function () {
        din.classList.remove("jump")

    } , 300)
}

let isAlive = setInterval(function() {
    let dinTop = parseInt (window.getComputedStyle(din).getPropertyValue("top"));
    let cactusLeft = parseInt (window.getComputedStyle(cactus).getPropertyValue("left"));
    
    if (cactusLeft < 80 && cactusLeft > 0 && dinTop >= 80) 
        alert ( "GAME OVER!");   
    


    
}, 10)