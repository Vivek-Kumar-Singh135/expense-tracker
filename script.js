let loadBalance = () => {
    let expense = 0;
    let income = 0;
    console.log("length " + localStorage.length)
    for (let index = 0; index < localStorage.length; index++) {
        let data = JSON.parse(localStorage.getItem(index + 1));
        console.log("data" + data);
        if (data.amount[0] == '-') {
            let val = parseInt(data.amount.substr(1, data.amount.length - 1));
            console.log(val);
            expense += val;
        } else {
            let val = parseInt(data.amount);
            console.log(val);
            income += val;
        }
    }
    document.getElementById("money-minus").innerText = "INR " + expense;
    document.getElementById("money-plus").innerText = "INR " + income;
    let bal = income - expense;
    document.getElementById("balance").innerText = "INR " + bal;
}

let transactionList = () => {
    for (let index = 0; index < localStorage.length; index++) {
        let data = JSON.parse(localStorage.getItem(index + 1));
        if (data.amount[0] == '-') {
            let txt = data.text;
            let amt = data.amount;
            let transact = document.createElement('li');
            transact.setAttribute("class", "minus");
            let div1 = document.createElement('div');
            div1.innerText = txt;
            let div2 = document.createElement('div');
            div2.innerText = amt;
            transact.appendChild(div1);
            transact.appendChild(div2);
            document.getElementById("list").appendChild(transact);
        } else {
            let txt = data.text;
            let amt = data.amount;
            let transact = document.createElement('li');
            transact.setAttribute("class", "plus");
            let div1 = document.createElement('div');
            div1.innerText = txt;
            let div2 = document.createElement('div');
            div2.innerText = "+" + amt;
            transact.appendChild(div1);
            transact.appendChild(div2);
            document.getElementById("list").appendChild(transact);
        }

    }
}

loadBalance();
transactionList();

let obj = {
    amount: 0,
    id: 0,
    text: ""
};

let updateBalance = (amt) => {
    if (amt[0] == '-') {
        let val = parseInt(amt.substr(1, amt.length - 1));
        console.log(val);
        let expense = document.getElementById("money-minus").innerText;
        expense = parseInt(expense.substr(4, expense.length - 1));
        console.log(expense);
        expense += val;
        document.getElementById("money-minus").innerText = "INR " + expense;
        let bal = document.getElementById("balance").innerText;
        bal = parseInt(bal.substr(4, bal.length - 1));
        bal -= val;
        document.getElementById("balance").innerText = "INR " + bal;
    } else {
        console.log("amt" + amt)
        let val = parseInt(amt.substr(0, amt.length));
        console.log(val);
        let income = document.getElementById("money-plus").innerText;
        income = parseInt(income.substr(4, income.length - 1));
        console.log(income);
        income += val;
        document.getElementById("money-plus").innerText = "INR " + income;
        let bal = document.getElementById("balance").innerText;
        bal = parseInt(bal.substr(4, bal.length - 1));
        bal += val;
        document.getElementById("balance").innerText = "INR " + bal;
    }
}

let key = localStorage.length + 1;

let storeData = () => {
    let amt = document.getElementById("amount").value
    let txt = document.getElementById("txt").value
    let id = Math.floor(Math.random() * 1000000);
    document.getElementById("txt").value = "";
    document.getElementById("amount").value = "";

    obj.amount = amt;
    obj.id = id;
    obj.text = txt;

    localStorage.setItem(key, JSON.stringify(obj));
    key = localStorage.length + 1;

    updateBalance(amt);
}