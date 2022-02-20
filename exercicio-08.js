const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(transaction) {
    user.transactions.push(transaction);

    if (transaction.type === "credit") {
        user.balance += transaction.value;
    } else {
        user.balance -= transaction.value;
    }
}

function getHigherTransactionByType(type) {
    let higherTransaction;
    let higherValue = 0;

    for (transaction of user.transactions) {

        if ((higherValue < transaction.value) && (transaction.type === type)) {
            higherValue = transaction.value;
            higherTransaction = transaction;
        }

    }

    return higherTransaction;
}

function getAverageTransactionValue() {
    let sum = 0;

    for (transaction of user.transactions) {
        sum += transaction.value;
    }

    const averageTransaction = sum / user.transactions.length;

    return averageTransaction;
}

function getTransactionCount() {
    let count = {
        credit: 0,
        debit: 0
    };

    for (transaction of user.transactions) {
        if (transaction.type === "credit") {
            count.credit++;
        } else {
            count.debit++;
        }
    }

    return count;
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance);

console.log(getHigherTransactionByType("credit"));
console.log(getHigherTransactionByType("debit"));

console.log(getAverageTransactionValue());

console.log(getTransactionCount());
