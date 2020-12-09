console.log("Lab 04 Mini Project #1");
function CalculateCommission()
{
var topCommission = 0;
var topSalesPerson =  "Nobody yet";

var salePerson = ['Brad', 'Nila', 'Joseph', 'Kesh', 'Lydia', 'Devon', 'Miller'];
var decemberSale =[1500, 15000, 30000, 12000, 45000,25000, 8000];
var jauarySale =[10000, 25000, 20000, 14000, 30000,16000, 30000];
var februarySale =[8000, 7500, 45000, 10000, 38000,22000, 15000]; 

var total = 0;
var _commission = 0;

console.log('Seleperson    Commission       Average Commission');
console.log('--------------------------------------------------');

for (i=0; i< 7; i++){
//total sale for each person
total=  decemberSale[i] + jauarySale[i] + februarySale[i];

//calculate commision and average commision
if (total>=30001){
   _commission = total*0.08;
   var avg = _commission/3;
   console.log( salePerson[i] +'          '+_commission +'              '+ avg); 
}
   else if ( 15001 <=total && total<= 30000)
   {_commission = total*0.05;
      var avg = _commission/3;
   console.log( salePerson[i] +'             '+_commission +'             '+ avg);  
}
  else if ( 10001 <= total && total <= 15000)
  { _commission = total*0.03;
   var avg = _commission/3; 
    console.log( salePerson[i] +'           '+_commission +'              '+ avg); 
}
   else if ( 5001 <=total && total<= 10000)
   {_commission = total*0.02;
      var avg = _commission/3;  
    console.log( salePerson[i] +'           '+_commission +'               '+ avg); 
}
   else if( 0 <total && total <= 5000)
   {_commission = total*0.01;
      var avg = _commission/3;
    console.log( salePerson[i] +'            '+_commission +'              '+ avg); 
}
   else{
   console.log( salePerson[i] +'              '+_commission +'              '+ avg); 
};
      if(_commission > topCommission) {
      topCommission = _commission;
      topSalesPerson = salePerson[i];}
}

alert("Top salesperson and their commissin:  "+ topSalesPerson +' $'+ topCommission );
console.log('--------------------------------------------------');
console.log('**************************************************');
console.log("Top salesperson and their commissin: "+ topSalesPerson +' $'+ topCommission );
console.log('**************************************************');

}
