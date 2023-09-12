// bank account using constructor

//Perent BankAccount constructor without class
function BankAccount(customerName, balance = 0) {
  //properties
  this.customerName = customerName; // passed as parameter
  this.accountNumber = Date.now();
  this.balance = balance;
}

//methods from prototype
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

const abhishekBankAccount = new BankAccount("Abhishek T", 500);
abhishekBankAccount.deposit(500);
abhishekBankAccount.withdraw(100);
console.log(abhishekBankAccount);

// copied BankAccount cosntructor and use it as a CurrentAccount constructor
function CurrentAccount(customerName, balance = 0) {
  //calling properties from BankAccount(Parent Cosntructor) to CurrentAccount(Child Constructor)
  BankAccount.call(this, customerName, balance); //constructor linking

  //additional property for Current Account
  this.transactionLimit = 50000;
}

//for making object from parent to child
CurrentAccount.prototype = Object.create(BankAccount.prototype);

CurrentAccount.prototype.takeBusinessLoan = function (amount) {
  console.log("Taking business loan: " + amount);
};

const abhishekCurrentAccount = new CurrentAccount("Abhishek T", 2000);
abhishekCurrentAccount.deposit(500);
abhishekCurrentAccount.withdraw(100);
abhishekCurrentAccount.takeBusinessLoan(90000);
console.log(abhishekCurrentAccount);


// copied BankAccount cosntructor and use it as a SavingAccount constructor
function SavingAccount(customerName, balance = 0) {
  //calling properties from BankAccount(Parent Cosntructor) to SavingAccount(Child Constructor)
  BankAccount.call(this, customerName, balance); //constructor linking

  //additional property for Saving Account
  this.transactionLimit = 10000;
}

//for making object from parent to child
SavingAccount.prototype = Object.create(BankAccount.prototype);

SavingAccount.prototype.takePersonalLoan = function (amount) {
  console.log("Taking personal loan: " + amount);
};

const abhishekSavingAccount = new SavingAccount("Abhishek T", 400);
abhishekSavingAccount.deposit(500);
abhishekSavingAccount.withdraw(100);
abhishekSavingAccount.takePersonalLoan(40000);
console.log(abhishekSavingAccount);
