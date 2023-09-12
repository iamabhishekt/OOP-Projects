// bank account using constructor

class BankAccount {
  //properties
  customerName;
  accountNumber;
  balance;

  //constructor
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }
  
  //methods
  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  };
}

const abhishekAccount = new BankAccount("Abhishek T", 1000);

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

abhishekAccount.deposit(3000);

console.log(abhishekAccount);

// Sample Usage Example
