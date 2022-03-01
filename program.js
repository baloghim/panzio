function kalkulacio()
{

    // Foglalt napok száma

 var Erk = document.getElementById("Erkezes").value;
 var Tav = document.getElementById("Tavozas").value;

 var ErkDatum = new Date(Erk);
 var TavDatum = new Date(Tav);

 var ElteltIdo = TavDatum.getTime() - ErkDatum.getTime();

 var NapokSzama = ElteltIdo / ( 1000 * 3600 * 24 );

 // alert(NapokSzama);


    // Szoba típusa


    var szobaAr=0;

    if(document.getElementById("egyAgy").checked==true)
    {
        szobaAr=9000;
    }


    if(document.getElementById("ketAgy").checked==true)
    {
        szobaAr=15000;
    }


    if(document.getElementById("ketAgy1p").checked==true)
    {
        szobaAr=18000;
    }


    if(document.getElementById("ketAgy2p").checked==true)
    {
        szobaAr=21000;
    }


  // Vendégek száma


  var VendegekSzama =0;

  VendegekSzama=document.getElementById("vendegszam").value;



 // Vendégek életkora

  var Eletkorok = [];

    for(var i=1; i<5; i++)
    {       
        if(isNaN("e"+i))
        {
            Eletkorok.push(document.getElementById("e"+i).value);
        }    
              
    }
    
    
    // alert(Eletkorok);


}