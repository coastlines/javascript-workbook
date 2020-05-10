'use strict'

class Account {
  constructor(accountNumber, owner, transactions) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }
  
  // balance(): loop through all the transactions, and return the current balance
  balance() {
    let balance = this.transactions
            .map(function(t) { return t.amount; })
            .reduce(function(p, c) { return p + c; },0);
    return balance;
  }

  // addTransaction(payee, amount); // checks to see if the amount is valid (ie cannot debit more than the balance)
  addTransaction(payee, amount) {
    let balance = this.balance();
    let newBalance = balance + amount;

    if (amount > 0) {
      this.transactions.push(new Transaction(amount, payee));
    }
    
    if (amount < 0) {
      if (balance > amount && newBalance > 0) {
        this.transactions.push(new Transaction(amount, payee));
      } else {
        console.log('Not enough funds to complete transaction.');
      }
    }

    if (amount === 0) {
      console.log('Nothing to do here.');
    }

  }

}

// Transaction Class
// - amount (can be either positive or negative) // passed in to constructor
// - payee // passed in to constructor
// - date  // auto set in the constructor

class Transaction {
  constructor(amount, payee, date) {
    this.amount = Number(amount);
    this.payee = payee;
    this.date = Date();
  }
}

// Create a SavingsAccount that extends Account
// - interestRate 
// - accrueInterest(): this method, should get the balance, 
//   and add a new transaction to the list of transactions
//   for the interest accrued on the account


let accountA = new account("123-456-789", "John Doe");
accountA.addTransaction("Deposit", 1000);
accountA.addTransaction("Target", -45);
accountA.addTransaction("FreeBirds", -7.35);
console.log(accountA.balance()); // should print 947.65
accountA.addTransaction("Fraud!!", -1000);  // this should not go through
console.log(accountA.balance()); // should print 947.65
