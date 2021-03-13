var sheds = [
    {
        name: "Shed A",
        totaCows: 40,
        averageProd: 25
    },
    {
        name: "Shed B",
        totalCows: 21,
        averageProd: 16
    },
    {
        name: "Shed C",
        totalCows: 27,
        averageProd: 18

    },
    {
        name: "Shed D",
        totalCows: 52,
        averageProd: 28
    }
];
var totalSheds = sheds.length;
var months = {January: 31, February:29, March:31, April:30, May:31, June:30, July:31, August:31, September:30, October:31, November:30, December:31};
function totalProduction(verbose){
total_production = 0;
index = 0;
while(index < totalSheds){
    total_production += sheds[index].totalCows * sheds[index].averageProd;
    shed_production = sheds[index].totalCows * sheds[index].averageProd;
    if (verbose === true){
       /* alert("Your production in " + sheds[index].name + " " + shed_production.toString() + " litres per day") ;*/
    }
    index += 1;
}
if(verbose === true){
    /*alert("The total production is " + total_production.toString() + " litres per day" );*/
}
return total_production;
}
totalProduction(verbose = true);

function incomeOverTime(selling_price, time, verbose){

dailyIncome = totalProduction() * selling_price;
return dailyIncome * time;
}
/*alert(" ");
alert("Your weekly income will be Ksh " + incomeOverTime(45,7));
alert("Your yearly income will be Ksh " + incomeOverTime(45,365));

        alert( " ");*/

for (var key in months){
        monthly_income = incomeOverTime(45, months[key]);
        ("Your income for " + key + " is " + monthly_income.toString());
}
