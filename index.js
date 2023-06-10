//question 1

function sumPositiveNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }

  return sum;
}

const input = [1, -4, 12, 0, -3, 29, -150];
const result = sumPositiveNumbers(input);
console.log(result); 

//question 2

function squareArrayElements(arr) {
  const squaredArray = [];

  for (let i = 0; i < arr.length; i++) {
    const squaredValue = arr[i] * arr[i];
    squaredArray.push(squaredValue);
  }

  return squaredArray;
}

const input = [1, 2, 3, 4, 5];
const squaredInput = squareArrayElements(input);
console.log(squaredInput); // Output: [1, 4, 9, 16, 25]

//question 3

function calculateMean(arr) {
  const sum = arr.reduce((total, num) => total + num, 0);
  const mean = sum / arr.length;
  return mean;
}

function calculateMedian(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    const median = (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
    return median;
  } else {
    const median = sortedArr[middleIndex];
    return median;
  }
}

const input = [12, 46, 32, 64];
const mean = calculateMean(input);
const median = calculateMedian(input);

console.log(mean);   
console.log(median); 

//question 4
function findAgeDifference(arr) {
  let minAge = Infinity;
  let maxAge = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const age = arr[i].age;
    if (age < minAge) {
      minAge = age;
    }
    if (age > maxAge) {
      maxAge = age;
    }
  }

  const ageDifference = maxAge - minAge;
  const youngestMember = arr.find((member) => member.age === minAge);
  const oldestMember = arr.find((member) => member.age === maxAge);

  return {
    youngest: youngestMember,
    oldest: oldestMember,
    ageDifference: ageDifference,
  };
}

const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

const result = findAgeDifference(input);
console.log(result);

//question 5

function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}

const input = 5;
const factorial = calculateFactorial(input);
console.log(factorial); 

//question 6
function findCategoriesWithAveragePriceAbove50(products) {
  const categoryData = {};

  // Step 1: Calculate total price and count for each category
  for (let i = 0; i < products.length; i++) {
    const { price, category } = products[i];

    if (!categoryData[category]) {
      categoryData[category] = {
        totalPrice: 0,
        count: 0,
      };
    }

    categoryData[category].totalPrice += price;
    categoryData[category].count++;
  }

  // Step 2: Calculate average price for each category
  const filteredCategories = [];
  for (const category in categoryData) {
    const { totalPrice, count } = categoryData[category];
    const averagePrice = totalPrice / count;

    if (averagePrice > 50) {
      filteredCategories.push({
        category: category,
        averagePrice: averagePrice,
      });
    }
  }

  return filteredCategories;
}

const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];

const result = findCategoriesWithAveragePriceAbove50(products);
console.log(result);
