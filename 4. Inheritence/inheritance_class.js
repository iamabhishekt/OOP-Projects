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

class CurrentAccount extends BankAccount { // for inherit extends is used
  transactionLimit = 50000;

  constructor(customerName, balance = 0) {
    super(customerName, balance); //while inheriting call super constructor which in inside BankAccount.
  }

  takeBusinessLoan(amount) {
    console.log('Taking business loan: ' + amount);
  }
}

class SavingAccount extends BankAccount {
  transactionLimit = 10000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  takePersonalLoan(amount) {
    console.log('Taking personal loan: ' + amount);
  }
}

const abhishekBankAccount = new BankAccount("Abhishek T", 3000);
abhishekBankAccount.deposit(500);
abhishekBankAccount.withdraw(100);
console.log(abhishekBankAccount);

const abhishekCurrentAccount = new CurrentAccount("Abhishek T", 90000);
abhishekCurrentAccount.deposit(10000);
abhishekCurrentAccount.withdraw(20000);
abhishekCurrentAccount.takeBusinessLoan(50000);
console.log(abhishekCurrentAccount);

const abhishekSavingAccount = new SavingAccount("Abhishek T", 500);
abhishekSavingAccount.deposit(10000);
abhishekSavingAccount.withdraw(600);
abhishekSavingAccount.takePersonalLoan(1000);
console.log(abhishekSavingAccount);