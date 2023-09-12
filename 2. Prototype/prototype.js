// bank account using constructor

function BankAccount(customerName, balance = 0) {
  //properties
  this.customerName = customerName; // passed as parameter
  this.accountNumber = Date.now();
  this.balance = balance;

  //methods
  // this.deposit = function (amount) {
  //   this.balance += amount;
  // };

  // this.withdraw = (amount) => {
  //   this.balance -= amount;
  // };
}

const abhishekAccount = new BankAccount('Abhishek Thakur')

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

abhishekAccount.deposit(3000)

console.log(abhishekAccount);

// Sample Usage Example
