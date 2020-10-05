//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/

console.log("Lab 04 startup code");//log in developer tools
function CalculateCommission()
{
    var topCommission = 0;
    var topSalesPerson = "Nobody yet";

var salePerson = ['Brad', 'Nila', 'Joseph', 'Kesh', 'Lydia', 'Devon', 'Miller'];
var decemberSale =[1500, 15000, 30000, 12000, 45000,25000, 8000];
var jauarySale =[10000, 25000, 20000, 14000, 30000,16000, 30000];
var februarySale =[8000, 7500, 45000, 10000, 38000,22000, 15000]; 
//december commission:
for (i=0; i<salePerson.length; i++){
var sumCommission;
var avgCommission;
var commissionDec;
var commissionJan;
var commissionFeb;
//var totalCommission = 0;
console.log('commission for December');
//for ( i=0; i<decemberSale.length; i++) {
    
if (decemberSale[i]>=300001){
   commissionDec = decemberSale[i]*0.08;
   console.log(commissionDec);
}
   else if ( 15001 <=decemberSale[i] && decemberSale[i] <= 30000)
   {commissionDec = decemberSale[i]*0.05;
    console.log(commissionDec);
}
  else if ( 10001 <= decemberSale[i] && decemberSale[i] <= 15000)
  { commissionDec = decemberSale[i]*0.03;
    console.log(commissionDec);
}
   else if ( 5001 <=decemberSale[i] && decemberSale[i]<= 10000)
   {commissionDec = decemberSale[i]*0.02;
    console.log(commissionDec);
}
   else if ( 0 <decemberSale [i] && decemberSale[i] <= 5000)
   {commissionDec = decemberSale[i]*0.01;
    console.log(commissionDec);
}
    else {console.log(commissionDec); }
//}

console.log('commission for Jan');
//commissionJanuary
var commissionJan;
//var totalCommission = 0;
//for ( i=0; i<jauarySale.length; i++) {
if (jauarySale[i]>=30000){
    commissionJan = jauarySale[i]*0.08;
   console.log(commissionJan);
}
   else if ( 15001 <=jauarySale[i] && jauarySale[i]<= 30000)
   {commissionJan = jauarySale[i]*0.05;
    console.log(commissionJan);
}
  else if ( 10001 <=jauarySale[i] && jauarySale[i] <= 15000)
  { commissionJan = jauarySale[i]*0.03;
    console.log(commissionJan);
}
   else if ( 5001 <=jauarySale[i] && jauarySale[i]<=10000)
   {commissionJan = jauarySale[i]*0.02;
    console.log(commissionJan);
}
   else if ( 0 <jauarySale [i] && jauarySale[i]<= 5000)
   {commissionJan = jauarySale[i]*0.01;
    console.log(commissionJan);
}
else {console.log(commissionJan); }

//commission for February
console.log('commission for February');
//for ( i=0; i<februarySale.length; i++) {
    if (februarySale[i]>=300001){
        commissionFeb = februarySale[i]*0.08;
       console.log(commissionFeb);
    }
       else if ( 15001 <=februarySale[i] && februarySale[i] <= 30000)
       {commissionFeb = februarySale[i]*0.05;
        console.log(commissionFeb);
    }
      else if ( 10001 <= februarySale[i] && februarySale[i] <= 15000)
      { commissionFeb = februarySale[i]*0.03;
        console.log(commissionFeb);
    }
       else if ( 5001 <=februarySale[i] && februarySale[i]<= 10000)
       {commissionFeb = februarySale[i]*0.02;
        console.log(commissionFeb);
    }
       else if ( 0 <februarySale [i] && februarySale[i] <= 5000)
       {commissionFeb = februarySale[i]*0.01;
        console.log(commissionFeb);
    }
        else {console.log(commissionFeb); }

var sumCommission = commissionDec + commissionJan + commissionFeb;

var avgCommission = sumCommission/3;

console.log(salePerson[i] + ":  "+ sumCommission[i] + ", " + avgCommission[i]);  

}
}
