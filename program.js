function kalkulacio() {
    
    // Foglalt napok száma

var Erk = document.getElementById("Erkezes").value;
var Tav = document.getElementById("Tavozas").value;

var ErkDatum = new Date(Erk);
var TavDatum = new Date(Tav);

var Elteltido =TavDatum.getTime()-ErkDatum.getTime();

var NapokSzama = Elteltido /( 1000 * 3600 * 24 );

    // Szoba típusa

    var SzobarAr=0;

    if(document.getElementById("EgyAgy").checked==true)
    {
        SzobarAr=9000;
    }

    if(document.getElementById("KetAgy").checked==true)
    {
        SzobarAr=15000;
    }

    if(document.getElementById("KetAgy1p").checked==true)
    {
        SzobarAr=18000;
    }

    if(document.getElementById("KetAgy2p").checked==true)
    {
        SzobarAr=21000;
    }

    // Vendégek száma

    var VendegekSzama=0;

    VendegekSzama=document.getElementById("vendegszam").value;

    // Életkorok

    var Eletkorok = [];

    for(var i=1; i<5; i++)
    {
        if(document.getElementById("e"+i).value!="")
        {
            Eletkorok.push(document.getElementById("e"+i).value);
        }
    }

    // 



    alert(Eletkorok);


}