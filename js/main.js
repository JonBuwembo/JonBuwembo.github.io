

document.getElementById("github").addEventListener("click", function () {
    window.open("https://github.com/JonBuwembo?tab=repositories", "_blank");
})

document.getElementById("linkedin").addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/jonathan-buwembo/", "_blank");
})

//Typing animation
const text = "JONATHAN BUWEMBO";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("name").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 90);
    }
}

typeEffect();

