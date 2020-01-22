'use strict';

// HW#1

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpension() {
    for (let i = 0; i < 2; i++) {
        let expenseItem = prompt("Введите обязательную статью расходов в этом месяце", ''),
            cost = +prompt("Во сколько обойдется?", '');
    
        if ((typeof(expenseItem)) === 'string' && (typeof(expenseItem)) != null && (typeof(cost)) != null && expenseItem != '' && cost != '' && expenseItem.length < 50) {
            console.log("done");
            appData.expenses[expenseItem] = cost;
        } else {
            i = i - 1;
        }
    }
};
chooseExpension();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert( "Ежедневный бюджет: " + appData.moneyPerDay );
};
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка!")
    }
};
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ''),
            percent = +prompt("Под какой процент?", '');

        appData.monthIncome = save / 100 / 12 * percent;
        alert( "Доход в месяц с Вашего депозита: " + appData.monthIncome );
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let optEx = prompt("Статья необязательных расходов", '');
        appData.optionalExpenses[i] = optEx;
        console.log(appData.optionalExpenses);
    }
};
