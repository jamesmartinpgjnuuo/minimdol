// Define an interface to describe the structure of a Person object
interface Person {
  id: number;
  // You can add more properties here
}

// Create an object that conforms to the Person interface
const John: Person = {
  id: 1,
  // Initialize other properties here
};

// Log the id of the John object
console.log(John.id);
