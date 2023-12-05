class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static ageComparison(user1, user2) {
    if (user1.age === user2.age) {
      return (
        user1.firstName + " " + user1.lastName + " e " + user2.firstName + " " + user2.lastName + " hanno la stessa età"
      );
    }

    return user1.age > user2.age
      ? user1.firstName + " " + user1.lastName + " è più grande di " + user2.firstName + " " + user2.lastName
      : user2.firstName + " " + user2.lastName + " è più grande di " + user1.firstName + " " + user1.lastName;
  }
}

const alfonso = new User("Alfonso", "Cecere", 25, "Marcianise");
const giovanni = new User("Giovanni", "Prato", 69, "Caltanissetta");

console.log(User.ageComparison(alfonso, giovanni));
