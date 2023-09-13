// Increment

// let id = 1; anti-pattern

class User {
  // static property
  static id = 1;

  static cache = {
    1: "some value",
  };

  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
    this.id = User.id++;
    // this.id = id++; anti-pattern
  }

  // checkCache() {
  // }

  static {
    console.log(`Initialize`);
  }

  static hasInCache() {
    console.log(User.cache);
  }

  //static methods
  //   static compareByAge(user1, user2) {
  //     return user1.age - user2.age;
  //   }

  //   static compareByIncome(user1, user2) {
  //     return user1.income - user2.income;
  //   }

  //# static properties
}

const user1 = new User("Abhishek T", 30, 3000);
const user2 = new User("Rahul V", 26, 5000);
const user3 = new User("Prathamesh G", 40, 10000);

const users = [user1, user2, user3];

// users.sort(User.compareByAge);
// users.sort(User.compareByIncome);

// console.log(users);

User.hasInCache();
User.hasInCache();
