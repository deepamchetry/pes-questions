DEEPAM’S ASSIGNMENT


Write a JavaScript program that displays the largest integer among two integers.


      ⇒    function findLargestInteger(a, b) {

  if (a > b) {

    return a;

  } else {

    return b;

  }

}


const num1 = 42;

const num2 = 17;

const largest = findLargestInteger(num1, num2);

console.log("The largest integer is: " + largest);


2.Write a JavaScript function to find the sign of the product of three numbers. Display an alert box with the specified sign. Sample numbers : 3, -7, 2Output : The sign is -

⇒ function findProductSign(num1, num2, num3) {

  const product = num1 * num2 * num3;

  let sign;


  if (product > 0) {

    sign = "+";

  } else if (product < 0) {

    sign = "-";

  } else {

    sign = "0";

  }


  alert("The sign is " + sign);

}


const num1 = 3;

const num2 = -7;

const num3 = 2;

findProductSign(num1, num2, num3);


3.Write a JavaScript function to find the largest of five numbers. Display an alert box to show the results. Sample numbers : -5, -2, -6, 0, -1 Output : 0

⇒ function findLargestNumber(num1, num2, num3, num4, num5) {

  const largest = Math.max(num1, num2, num3, num4, num5);

  alert("The largest number is: " + largest);

}


const num1 = -5;

const num2 = -2;

const num3 = -6;

const num4 = 0;

const num5 = -1;

findLargestNumber(num1, num2, num3, num4, num5);


4.Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz"


⇒ for (let i = 1; i <= 100; i++) {

  if (i % 3 === 0 && i % 5 === 0) {

    console.log("FizzBuzz");

  } else if (i % 3 === 0) {

    console.log("Fizz");

  } else if (i % 5 === 0) {

    console.log("Buzz");

  } else {

    console.log(i);

  }

}



5.According to Wikipedia a happy number is defined by the following process : "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)". Write a JavaScript program to find and print the first 5 happy numbers.


⇒ function isHappyNumber(num) {

  const seenNumbers = new Set();


  while (num !== 1 && !seenNumbers.has(num)) {

    seenNumbers.add(num);

    num = calculateSumOfSquares(num);

  }


  return num === 1;

}


function calculateSumOfSquares(num) {

  let sum = 0;

  while (num > 0) {

    const digit = num % 10;

    sum += digit * digit;

    num = Math.floor(num / 10);

  }

  return sum;

}


function findFirstNHappyNumbers(n) {

  const happyNumbers = [];

  let num = 1;


  while (happyNumbers.length < n) {

    if (isHappyNumber(num)) {

      happyNumbers.push(num);

    }

    num++;

  }


  return happyNumbers;

}


const n = 5;

const firstFiveHappyNumbers = findFirstNHappyNumbers(n);

console.log("The first 5 happy numbers are: " + firstFiveHappyNumbers.join(", "));


6.Write a JavaScript program to find the Armstrong numbers of 3 digits. Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.


⇒ function isArmstrongNumber(num) {

  const numString = String(num);

  const numDigits = numString.length;

  let sum = 0;


  for (let i = 0; i < numDigits; i++) {

    const digit = parseInt(numString[i]);

    sum += Math.pow(digit, numDigits);

  }


  return num === sum;

}


function findArmstrongNumbers() {

  const armstrongNumbers = [];


  for (let num = 100; num < 1000; num++) {

    if (isArmstrongNumber(num)) {

      armstrongNumbers.push(num);

    }

  }


  return armstrongNumbers;

}


const armstrongNumbers = findArmstrongNumbers();

console.log("Armstrong numbers of 3 digits: " + armstrongNumbers.join(", "));


7.Write a JavaScript program to sum 3 and 5 multiples under 1000.


⇒function sumMultiplesOfThreeAndFive() {

  let sum = 0;


  for (let i = 1; i < 1000; i++) {

    if (i % 3 === 0 || i % 5 === 0) {

      sum += i;

    }

  }


  return sum;

}


const result = sumMultiplesOfThreeAndFive();

console.log("The sum of multiples of 3 and 5 under 1000 is: " + result);


8.Write a node js script using file system which will - create a new file - add data to a file- append data to a file- read an html file and display it on the browser


⇒const fs = require('fs');

const http = require('http');


// Create a new file and add data to it

fs.writeFile('newfile.txt', 'This is a new file!', (err) => {

  if (err) throw err;

  console.log('New file created and data added.');


  // Append data to the file

  fs.appendFile('newfile.txt', ' Appended data.', (err) => {

    if (err) throw err;

    console.log('Data appended to the file.');


    // Read and display an HTML file on the browser

    http.createServer((req, res) => {

      fs.readFile('index.html', (err, data) => {

        if (err) throw err;

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write(data);

        res.end();

      });

    }).listen(8000, () => {

      console.log('Server running at http://localhost:8000/');

    });

  });

});


9.What is a URL. Break it down into several parts that the url consists of. Use URL module to write a nodejs script to show the breakdown parts of a url as well.


⇒A URL (Uniform Resource Locator) is a string of characters that is used to address or access resources on the web. It consists of several parts that provide information about the resource's location and how to retrieve it. The parts of a URL include:

Protocol: The protocol specifies the communication protocol used to access the resource. Common protocols include "http://" for web pages and "https://" for secure web pages.

Host: The host identifies the domain or IP address where the resource is located. It can be a domain name like "example.com" or an IP address like "192.168.0.1".

Port: The port number is an optional component that specifies the network port to use when making the request. It is usually included for non-standard protocols or when accessing resources on specific ports. For example, the default port for HTTP is 80, and for HTTPS it is 443.

Path: The path represents the specific location of the resource on the server. It is a hierarchical structure that follows the directory structure of the server. For example, "/products/123" indicates a resource located at the "products" directory with the filename "123".

Query Parameters: Query parameters are optional and follow the path. They provide additional information or data to the server. Query parameters are separated from the path by a question mark "?" and multiple parameters are separated by an ampersand "&". For example, "/search?q=keyword&page=1" includes the query parameter "q" with the value "keyword" and the parameter "page" with the value "1".

Fragment Identifier: The fragment identifier is an optional component that specifies a specific section or anchor within the resource. It is identified by a hash symbol "#" followed by the fragment identifier. For example, "/page#section2" points to the section with the identifier "section2" within the "page".





 const url = require('url');


const urlString = 'https://www.example.com:8080/products/123?category=electronics&sort=price#section2';


const parsedUrl = new URL(urlString);


console.log('Protocol:', parsedUrl.protocol);

console.log('Host:', parsedUrl.host);

console.log('Port:', parsedUrl.port);

console.log('Path:', parsedUrl.pathname);

console.log('Query Parameters:', parsedUrl.searchParams.toString());

console.log('Fragment Identifier:', parsedUrl.hash);


10.What is a Promise in JavaScript and how does it work? Explain the states of a Promise. Explain how to chain multiple Promises together and the syntax for doing so.


⇒In JavaScript, a Promise is an object that represents the eventual completion or failure of an asynchronous operation. It provides a way to handle asynchronous operations in a more organized and manageable manner. Promises allow you to write asynchronous code that appears more like traditional synchronous code, making it easier to reason about and avoid callback hell.

A Promise can be in one of three states:

Pending: The initial state of a Promise. It means that the asynchronous operation associated with the Promise is still in progress, and the final outcome is not known yet.

Fulfilled: The state of a Promise when the asynchronous operation completes successfully. It means that the operation finished without any errors, and the Promise is resolved with a value.

Rejected: The state of a Promise when the asynchronous operation encounters an error or fails. It means that the operation encountered an exception or returned an error, and the Promise is rejected with a reason or error object.



The basic syntax of a Promise is as follows:

const myPromise = new Promise((resolve, reject) => {

  // Perform an asynchronous operation

  // If the operation is successful, call resolve(value)

  // If the operation encounters an error, call reject(error)

});


myPromise

  .then((value) => {

    // Handle the fulfilled state (success)

  })

  .catch((error) => {

    // Handle the rejected state (error)

  })

  .finally(() => {

    // Perform cleanup or final tasks (optional)

  });


chaining multiple Promises:

asyncFunction1()

  .then((result1) => {

    // Process result1

    return asyncFunction2(result1);

  })

  .then((result2) => {

    // Process result2

    return asyncFunction3(result2);

  })

  .then((result3) => {

    // Process result3

    console.log('Final result:', result3);

  })

  .catch((error) => {

    // Handle any errors in the chain

    console.error('An error occurred:', error);

  });



