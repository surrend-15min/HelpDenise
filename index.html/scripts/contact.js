document.addEventListener("DOMContentLoaded", function () {
    openPopup(); // Apri il popup automaticamente quando la pagina è caricata
});

function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}