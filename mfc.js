function ear() {
    let firstImage = document.getElementById("earblack");
    let secondImage = document.getElementById("earColor");
   

    if (firstImage.style.display !== "none") {
        firstImage.style.display = "none";
        secondImage.style.display = "block";
    } else {
        firstImage.style.display = "block";
        secondImage.style.display = "none";
    }
}

function watch() {
    let firstImage = document.getElementById("watchblack");
    let secondImage = document.getElementById("watchColor");

    if (firstImage.style.display !== "none") {
        firstImage.style.display = "none";
        secondImage.style.display = "block";
    } else {
        firstImage.style.display = "block";
        secondImage.style.display = "none";
    }
}
function charger() {
    let firstImage = document.getElementById("chargerblack");
    let secondImage = document.getElementById("chargerColor");

    if (firstImage.style.display !== "none") {
        firstImage.style.display = "none";
        secondImage.style.display = "block";
    } else {
        firstImage.style.display = "block";
        secondImage.style.display = "none";
    }
}
