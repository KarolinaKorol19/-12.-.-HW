// Завдання 1
const user = {
  name: "Karolina",
  age: 16,
  hobby: "Java Script",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);

for (const key of keys) {
  console.log(`${key}: 4{user[key]}`);
}

// Завдання 2
function countProps(obj) {
  return Object.keys(obj).length;
}

console.log(countProps({ name: "Ariel", age: 17 }));
console.log(
  count({ name: "karolinakorol421@gmail.com", isOnline: true, score: 500 })
);

// Завдання 3

function findBestEmployee(employees) {
  let bestEmployee = "";
  let maxTasks = 0;

  for (const name in employees) {
    if (employees[name] > maxTasks) {
      maxTasks = employees[name];
      bestEmployee = name;
    }
  }

  return bestEmployee;
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

// Завдання 4

function countTotalSalary(employees) {
  let total = 0;

  for (const key in employees) {
    total += employees[key];
  }

  return total;
}

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
);

// Завдання 5

function getAllPropValues(arr, prop) {
  const values = [];

  for (const obj of arr) {
    if (prop in obj) {
      values.push(obj[prop]);
    }
  }

  return values;
}

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "quantity"));

// Завдання 6

function calculateTotalPrice(allProducts, productName) {
  for (const product of allProducts) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return 0;
}

console.log(calculateTotalPrice(products, "Radar"));
console.log(calculateTotalPrice(products, "Droid"));
