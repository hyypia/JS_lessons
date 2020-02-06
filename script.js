'use strict';

// HW#1

let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpension: function() {
        for (let i = 0; i < 2; i++) {
            let expenseItem = prompt("Введите обязательную статью расходов в этом месяце", ''),
                cost = +prompt("Во сколько обойдется?", '');
        
            if ((typeof(expenseItem)) === 'string' && (typeof(expenseItem)) != null && (typeof(cost)) != null 
            && expenseItem != '' && cost != '' && expenseItem.length < 50) {
                console.log("done");
                appData.expenses[expenseItem] = cost;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();

        alert( "Ежедневный бюджет: " + appData.moneyPerDay );
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка!")
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ''),
                percent = +prompt("Под какой процент?", '');
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert( "Доход в месяц с Вашего депозита: " + appData.monthIncome );
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let optEx = prompt("Статья необязательных расходов", '');
            appData.optionalExpenses[i] = optEx;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function() {
        let item = prompt("Что принесет дополнительный подход? (Перечислете через запятую)", '');

        if (typeof(item) != string || item == '' || typeof(item) == null) {
            console.log("Пользователь указал некорректные данные");
        } else {
        appData.income = item.split(',');
        appData.income.push(prompt("Может что-то еще?", ''));
        appData.income.sort();
        }

        appData.income.forEach (function (itemmassive, i) {
            alert("Способы заработка: " + (i+1) + "-" + inermassive);
        });
    }
};

for (let key in appData) {
    console.log("Программа включает в себя следующие данные: " + key + "-" + appData[key])
};
