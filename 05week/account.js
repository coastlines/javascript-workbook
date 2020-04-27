//
//
// create 2 classes:

// Account Class
// attributes / fields:
// - account number // this is passed in to the constructor
// - owner //this is passed in to the constructor
// - a list of transactions  // starts of empty
// methods:
// - balance(): loop through all the transactions, 
//   and return the current balance
//-  addTransaction(payee, amount); // checks to see if the amount is valid (ie cannot debit more than the balance)
//
//-  instead of addTransaction():
//   deposit(amt);
//   charge(payee, amount) 
//


// Transaction Class
// - amount (can be either positive or negative) // passed in to constructor
// - payee // passed in to constructor
// - date  // auto set in the constructor
// 



// Create a SavingsAccount that extends Account
// - interestRate 
// - accrueInterest(): this method, should get the balance, 
//   and add a new transaction to the list of transactions
//   for the interest accrued on the account


let accountA = new account("123-456-789", "John Doe");
accountA.addTransaction("Deposit", 1000);
accountA.addTransaction("Target", -45);
accountA.addTransaction("FreeBirds", -7.35);
console.log(accountA.balance()); // should print 942.65
accountA.addTransaction("Fraud!!", -1000);  // this should not go through
console.log(accountA.balance()); // should print 942.65

// if you create the 2 different methods of adding transactions
let accountA = new account("123-456-789", "John Doe");
accountA.deposit(1000);
accountA.debit(45);
accountA.debit(7.35);
console.log(accountA.balance()); // should print 942.65
accountA.debit(1000);  // this should not go through
console.log(accountA.balance()); // should print 942.65
