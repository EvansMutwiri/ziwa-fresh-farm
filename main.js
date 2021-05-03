var produce = [
    {
        shed : "Shed A",
        quantity : 500,
    },
    {
        shed : "Shed B",
        quantity : 308,
    },
    {
        shed : "Shed C",
        quantity : 486,
    },
    {
        shed : "Shed D",
        quantity : 572,
    }
];

// production in litres per shed.

for (let i = 0; i < produce.length; i++) {
    console.log(`Your production in` + ` ` + produce[i].shed + ` `+ `is` + ` ` + `${produce[i].quantity}` + `litres per day`)
}
// total production per day all sheds.

var dailyProduction = produce.map(function(total) {
    return total.quantity;
})

var dailyTotal = dailyProduction.reduce(function(a, b){
    return a + b;
}, 0);

console.log(`The total production is` + ` ` + `${dailyTotal}`+ ` ` + `litres per day`)

// income over time

var multiply = (num1, num2, num3) => {
    return num1 * num2 * num3;
  };
  let incomeOverTime = multiply(dailyTotal, 7, 45);
  console.log(`Your weekly income is Ksh ` + incomeOverTime);

  let incomeOverYear = multiply(dailyTotal, 366, 45)
  console.log(`Your yearly income is Ksh ` + incomeOverYear);

//   income per month

var months = {January: 31, February: 29, March: 31, April: 30, May: 31, June: 30, July: 31, August: 31, September: 30, October: 31, November: 30, December: 31}

  for (var key in months) {
      monthlyIncome = multiply(dailyTotal, months[key], 45)
      console.log(`Your Income for ` + key + ` is  Ksh` + monthlyIncome.toString());
  }

// array of the monthly income

var incomePM = ["Your Income for January is 2603070", "Your Income for February is 2435130", "Your Income for March is 2603070", "Your Income for April is 2519100", "Your Income for May is 2603070", "Your Income for June is 2519100", "Your Income for July is 2603070", "Your Income for August is 2603070", "Your Income for September is 2519100", "Your Income for October is 2603070", "Your Income for November is 2519100", "Your Income for December is 2603070"]

