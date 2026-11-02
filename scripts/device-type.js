const w = window.innerWidth;
if (w > 450) {  //changes for desktop
    document.getElementById("menu").style.display = "none";
    document.getElementById("hr").style.display = "none";
    document.getElementById("mobile-img").style.display = "none";
} else {  //changes for mobile
    document.getElementById("menu").style.display = "flex";
    const collection = document.getElementsByClassName("main-button");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = "none";
    }
    document.getElementById("mobile-img").style.display = "block";
    document.getElementById("desktop-img").style.display = "none";
}
