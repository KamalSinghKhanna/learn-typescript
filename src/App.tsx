
const App = () => {
  interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
  }

  class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
    }

    greet(phrase: string) {
      console.log(`${phrase} ${this.name}`);
    }
  }
  // Creating an Employee object
  const employee = new Employee("John", 30);

  // Accessing properties and calling method
  console.log(employee.name); // Output: John
  console.log(employee.age); // Output: 30
  employee.greet("Hello"); // Output: Hello John
  return <div>App</div>;
}

export default App