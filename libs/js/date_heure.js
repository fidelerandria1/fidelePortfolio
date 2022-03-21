
const dateNow = document.querySelector('.horloge');

setInterval(function() {

    let date = new Date();



    let annee = date.getFullYear();

    let mois = date.getMonth() + 1;

    let jour = date.getDate();

    let heure = date.getHours();

    let minute = date.getMinutes();

    let seconde = date.getSeconds();



    let now = "DATE: "+ jour + "/" + mois + "/" + annee + "    " + heure + "h " + minute + "mn " + seconde + "s";

    dateNow.textContent = now;

}, 1000)