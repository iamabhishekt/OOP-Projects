// bank account using constructor

function BankAccount(customerName, balance = 0) {
  //properties
  this.customerName = customerName; // passed as parameter
  this.accountNumber = Date.now();
  this.balance = balance;

  //methods
  this.deposit = function (amount) {
    this.balance += amount;
  };

  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}

// Sample Usage Example

// const abhishekAccount = new BankAccount("Abhishek T", 1000); //object from cosntructor function BankAccount
// const rahulAccount = new BankAccount("Rahul V"); //object from cosntructor function BankAccount

// console.log(abhishekAccount);

// console.log(`${abhishekAccount.customerName} with ${abhishekAccount.accountNumber} has opening balance of ${abhishekAccount.balance} USD.`);

// abhishekAccount.deposit(5000);

// console.log(`After deposit, ${abhishekAccount.customerName} has balance of ${abhishekAccount.balance} USD.`);

// console.log(rahulAccount);

// console.log(`${rahulAccount.customerName} with ${rahulAccount.accountNumber} has opening balance of ${rahulAccount.balance} USD.`);

// rahulAccount.deposit(1000);

// console.log(`After deposit, ${rahulAccount.customerName} has balance of ${rahulAccount.balance} USD.`);

// rahulAccount.withdraw(500);

// console.log(`After withdrawal, ${rahulAccount.customerName} has balance of ${rahulAccount.balance} USD.`);

//====================================

const accounts = [];

const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");

accountForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const account = new BankAccount(customerName.value, +balance.value);
  accounts.push(account);

  console.log(accounts);
  console.log(`${customerName.value} has balance of ${balance.value}.`);
});

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const account = accounts.find(
    (account) => account.accountNumber === +accountNumber.value
  );

  account.deposit(+amount.value);

  console.log(accounts)
});
