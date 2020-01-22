'use strict';

// HW#1

// let money = +prompt("Ваш бюджет на месяц?"),
//     time = prompt("Введите дату в формате YYYY-MM-DD");

// let appData = {
//     budget : money,
//     timeData : time,
//     expenses : {},
//     otionalExpenses : {},
//     income : [],
//     savings: false
// }

// let expenseItem1 = prompt("Введите обязательную статью расходов в этом месяце"),
//     cost1 = +prompt("Во сколько обойдется?"),
//     expenseItem2 = prompt("Введите обязательную статью расходов в этом месяце"),
//     cost2 = +prompt("Во сколько обойдется?");

// let expenses = {};
// expenses[expenseItem1] = cost1;
// expenses[expenseItem2] = cost2;

// let dailyBudget = (money - cost1 - cost2)/30;
// alert( dailyBudget );

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}

let i = 1;
while (i < 8) {
    console.log(i);
    i++;    
    if (i == 6) {
       continue;
    }
}

do {
    console.log(i);
    i++;    
    if (i == 6) {
       continue;
    }
}
while (i < 8);