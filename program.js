function kalkulacio()
{
 var Erk = document.getElementById("Erkezes").value;
 var Tav = document.getElementById("Tavozas").value;

 var ErkDatum = new Date(Erk);
 var TavDatum = new Date(Tav);

 var ElteltIdo = TavDatum.getTime() - ErkDatum.getTime();

 var NapokSzama = ElteltIdo / ( 1000 * 3600 * 24 );

 alert(NapokSzama);
}