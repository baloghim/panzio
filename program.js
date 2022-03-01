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

    // Ellátás 

    var Ellatas=0;

    if(document.getElementById("reggeli").checked==true)
    {
        Ellatas=900;
    }

    if(document.getElementById("felpanzio").checked==true)
    {
        Ellatas=2900;
    }

    if(document.getElementById("teljespanzio").checked==true)
    {
        Ellatas=4900;
    }

        // Fürdő szolgáltatások

        var furdo=0;

        if(document.getElementById("belteri").checked==true)
        {
            furdo+=800;
        }
    
        if(document.getElementById("kulteri").checked==true)
        {
            furdo+=800;
        }
    
        if(document.getElementById("szauna").checked==true)
        {
            furdo+=800;
        }

        if(document.getElementById("teljes").checked==true)
        {
            furdo+=2000;
        }

        // Egyéb


    alert(furdo);


}