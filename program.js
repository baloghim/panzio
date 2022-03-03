function betolteskor()
{
    document.getElementById("ajanlat").style.display = "none";
}


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
    var SzobaTipus = "";

    if(document.getElementById("EgyAgy").checked==true)
    {
        SzobarAr=9000;
        SzobaTipus = "Egyágyas";
    }

    if(document.getElementById("KetAgy").checked==true)
    {
        SzobarAr=15000;
        SzobaTipus = "Kétágyas";
    }

    if(document.getElementById("KetAgy1p").checked==true)
    {
        SzobarAr=18000;
        SzobaTipus = "Kétágyas 1 pótággyal";
    }

    if(document.getElementById("KetAgy2p").checked==true)
    {
        SzobarAr=21000;
        SzobaTipus = "Kétágyas 2 pótággyal";
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
    var EllatasTipus = "";

    if(document.getElementById("reggeli").checked==true)
    {
        Ellatas=900;
        EllatasTipus = "Reggeli";
    }

    if(document.getElementById("felpanzio").checked==true)
    {
        Ellatas=2900;
        EllatasTipus = "Félpanzió";
    }

    if(document.getElementById("teljespanzio").checked==true)
    {
        Ellatas=4900;
        EllatasTipus = "Teljespanzió";
    }

        // Fürdő szolgáltatások

        var furdo=0;
        var furdoTipus = "";

        if(document.getElementById("belteri").checked==true)
        {
            furdo+=800;
            furdoTipus += "Beltéri, ";
        }
    
        if(document.getElementById("kulteri").checked==true)
        {
            furdo+=800;
            furdoTipus += "Kültéri, ";
        }
    
        if(document.getElementById("szauna").checked==true)
        {
            furdo+=800;
            furdoTipus += "Szauna, ";
        }

        if(document.getElementById("teljes").checked==true)
        {
            furdo=2000;
            furdoTipus = "Teljes";
        }

        // Egyéb

        var egyebek = document.getElementById("egyeb").value;
        
    

        // AJÁNLAT KÉSZÍTÉSE

        document.body.style.backgroundColor="white";

        document.getElementById("ajanlat").style.display = "block";


        //szobaár

        document.getElementById("szobaar").innerHTML = SzobarAr * NapokSzama + " Ft";
        document.getElementById("szobatipus").innerHTML = SzobaTipus;
        document.getElementById("szobaarosszesen").innerHTML = SzobarAr * NapokSzama + " Ft";
        document.getElementById("vendegekszama").innerHTML = VendegekSzama + " fő";
        document.getElementById("ellatastipus").innerHTML = EllatasTipus;
        document.getElementById("ellatasegyfore").innerHTML = Ellatas + " Ft";
        document.getElementById("ellatasosszesen").innerHTML = Ellatas * VendegekSzama * NapokSzama + " Ft";
        document.getElementById("furdotipus").innerHTML = furdoTipus;
        document.getElementById("furdoegyfore").innerHTML = furdo + " Ft";
        document.getElementById("furdoosszesen").innerHTML = furdo * VendegekSzama * NapokSzama + " Ft";

        document.getElementById("lathatosag").style.display = "none";

    }