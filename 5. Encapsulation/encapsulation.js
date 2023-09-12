class BankAccount {
  customerName;
  accountNumber;
  #balance = 0; // _balance is old convention for private fields in JS now #balance

  //constructor
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.#balance = balance;
  }

  //methods
  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  //public method for changing balance field (private)
  set balance(amount) {
    //setters(old) setBalance()
    //validation for number only
    if (isNaN(amount)) {
      throw new Error("Amount is not a valid input!");
    }
    this.#balance = amount;
  }

  //
  get balance() {
    //getters(old) getBalance()
    return this.#balance;
  }
}

class CurrentAccount extends BankAccount {
  // for inherit extends is used
  transactionLimit = 50000;

  constructor(customerName, balance = 0) {
    super(customerName, balance); //while inheriting call super constructor which in inside BankAccount.
  }

  //private method
  #calculateInterest(amount) {
    console.log("Calculating interest for Business loan");
  }

  takeBusinessLoan(amount) {
    this.#calculateInterest(amount);
    console.log("Taking business loan: " + amount);
  }
}

class SavingAccount extends BankAccount {
  transactionLimit = 10000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  //private method
  #calculateInterest(amount) {
    console.log("Calculating interest for Personal loan");
  }

  takePersonalLoan(amount) {
    this.#calculateInterest(amount);
    console.log("Taking personal loan: " + amount);
  }
}

const abhishekBankAccount = new BankAccount("Abhishek T", 3000);
abhishekBankAccount.deposit(500);
abhishekBankAccount.withdraw(100);
// console.log(abhishekBankAccount);

const abhishekCurrentAccount = new CurrentAccount("Abhishek T", 90000);

// abhishekCurrentAccount.balance = 'Hello'; // because of encapsulation this will not happen as here it's a string and we can edit it outside of the class. it

// abhishekCurrentAccount.#balance = 'Hello';
//#balance is used to show that it is a private field and must be change within class

//changing balance using public method
// abhishekCurrentAccount.balance(400);
// console.log(abhishekCurrentAccount.balance());

//getter get balance
console.log(abhishekCurrentAccount.balance);

//setter set balance
abhishekCurrentAccount.balance = 400;

console.log(abhishekCurrentAccount.balance);

abhishekCurrentAccount.takeBusinessLoan(40000);

console.log(abhishekCurrentAccount);

// abhishekCurrentAccount.deposit(10000);
// abhishekCurrentAccount.withdraw(20000);
// abhishekCurrentAccount.takeBusinessLoan(50000);
console.log(abhishekCurrentAccount);



const abhishekSavingAccount = new SavingAccount("Abhishek T", 500);
abhishekSavingAccount.deposit(10000);
abhishekSavingAccount.withdraw(600);
// abhishekSavingAccount.takePersonalLoan(1000);
// console.log(abhishekSavingAccount);

abhishekSavingAccount.takePersonalLoan(30000);

console.log(abhishekSavingAccount);
