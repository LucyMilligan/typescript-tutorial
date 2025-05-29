//Basics
let age: number = 20;
if (age < 50) {
  age += 10;
}
console.log(age);

let numbers: number[] = [];

let user: [number, string] = [1, "Lucy"];
user.push(1);
console.log(user);

//enum
const enum Size {
  Small = 3,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

//Functions
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

//Type Aliases
type Employee = {
  readonly id: number;
  name: string;
  email?: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Lucy",
  retire: (date: Date) => console.log(date),
};

//Union types
function kgToLbs(weight: number | string): number {
  //narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));

//Intersection types
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//Literal Types
type Quantity = 50 | 100;
let quantity: Quantity = 50;

//Nullable Types
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet(undefined);

//Optional Chaining
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
console.log(customer?.birthday);
console.log(customer?.birthday?.getFullYear());
