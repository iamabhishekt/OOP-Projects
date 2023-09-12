class BankAccount {
  customerName;
  accountNumber;
  balance = 0;

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
  }
}

class CurrentAccount extends BankAccount {
  transactionLimit = 50000;

  constructor(customerName, balance = 0 {
    super(customerName, balance);
  }

  takeBusinessLoan(amount) {
    console.log('Taking business loan: ' + amount);
  }
}

class SavingAccount extends BankAccount {
  transactionLimit = 10000;

  constructor(customerName, balance = 0 {
    super(customerName, balance);
  }

  takePersonalLoan(amount) {
    console.log('Taking personal loan: ' + amount);
  }
}