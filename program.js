function kalkulacio() {
    
    // Foglalt napok száma

var Erk = document.getElementById("Erkezes").value;
var Tav = document.getElementById("Tavozas").value;

var ErkDatum = new Date(Erk);
var TavDatum = new Date(Tav);

var Elteltido =TavDatum.getTime()-ErkDatum.getTime();

var NapokSzama = Elteltido /( 1000 * 3600 * 24 );








}