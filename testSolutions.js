DEEPAM CHETRY SOLUTIONS



Question: Write a JavaScript program that uses a for loop to print numbers from 1 to 10.
Example:
Input: None
Expected Output: 1 2 3 4 5 6 7 8 9 10
Solution:
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

Question: Write a JavaScript program that uses a while loop to calculate the sum of numbers from 1 to 10.
Example:
Input: None
Expected Output: 55
Solution:
let sum = 0;
let i = 1;

while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum);
Question: Write a JavaScript program that uses a for loop to iterate over the characters in a string and counts the number of vowels.
Example:
Input: "Hello, World!"
Expected Output: 3
Solution:
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();

    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

const input = "Hello, World!";
const vowelCount = countVowels(input);
console.log(vowelCount);

Question: Write a JavaScript program that uses a while loop to reverse a given number.
Example:
Input: 12345
Expected Output: 54321
Solution:
function reverseNumber(number) {
  let reversed = 0;

  while (number !== 0) {
    reversed = (reversed * 10) + (number % 10);
    number = Math.floor(number / 10);
  }

  return reversed;
}

const input = 12345;
const reversedNumber = reverseNumber(input);
console.log(reversedNumber);

Question: Write a JavaScript program that checks if a given string is a palindrome.
Example:
Input: "racecar"
Expected Output: true
Solution:
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

const input = "racecar";
const isPalindromic = isPalindrome(input);
console.log(isPalindromic);



Question: Write a Node.js program that creates an HTTP server using the built-in 'http' module and responds with "Hello World!" when accessed.
Solution:
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

Question: Modify the previous program to include an HTTP header with the content type 'text/html' in the server response.



Solution:
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello World!</h1>');
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

Question:
Write a Node.js program that creates a server using the built-in 'http' module. Include a custom module called "myDateTime" that returns the current date and time. The server should respond to incoming requests by displaying the current date and time.

Solution:
server.js

const http = require('http');
const myDateTime = require('./myDateTime');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Current date and time: ${myDateTime.getDateTime()}`);
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

myDateTime.js
exports.getDateTime = () => {
  const currentDate = new Date();
  return currentDate.toUTCString();
};
Question: Write a Node.js program that reads the contents of an HTML file and returns the content as the response when accessed via an HTTP server.
Solution:
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

Question: Create a Node.js program that appends the text "Hello content!" to a file called "mynewfile1.txt" using the fs.appendFile() method.
Solution:

const fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', (err) => {
  if (err) {
    console.log('An error occurred:', err);
  } else {
    console.log('Text appended to the file successfully!');
  }
});

Question: Modify the previous program to create a new file called "mynewfile2.txt" using the fs.open() method with the "w" flag.
Solution:
const fs = require('fs');

fs.open('mynewfile2.txt', 'w', (err, file) => {
  if (err) {
    console.log('An error occurred:', err);
  } else {
    console.log('File created successfully!');
  }
});

Question: Write a Node.js program that replaces the content of a file called "mynewfile3.txt" with the text "Hello content!" using the fs.writeFile() method.



Solution:
const fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', (err) => {
  if (err) {
    console.log('An error occurred:', err);
  } else {
    console.log('File content replaced successfully!');
  }
});

Question: Implement a Node.js program that appends the text " This is my text." to the end of the file "mynewfile1.txt" using the fs.appendFile() method.

Solution:
const fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is my text.', (err) => {
  if (err) {
    console.log('An error occurred:', err);
  } else {
    console.log('Text appended to the file successfully!');
  }
});

Question: Develop a Node.js program that deletes a file called "mynewfile2.txt" using fthe s.unlink() method.


Solution:
const fs = require('fs');


fs.unlink('mynewfile2.txt', (err) => {
  if (err) {
    console.log('An error occurred:', err);
  } else {
    console.log('File deleted successfully!');
  }
});


Question: Create a Node.js program that renames a file called "mynewfile1.txt" to "myrenamedfile.txt" using the fs.rename() method.
Solution:
const fs = require('fs');


fs.rename('mynewfile1.txt', 'myrenamedfile.txt', (err) => {
  if (err) {
    console.log('An error occurred:', err);
  } else {
    console.log('File renamed successfully!');
  }
});


Question: Write a JavaScript function multiplyByTwo that takes a number as an argument and multiplies it by two. Implement a callback function callback that receives the result of the multiplication and displays it on the console.
Example Input: multiplyByTwo(5, callback);


Expected Output:Result: 10
Solution:
function multiplyByTwo(number, callback) {
  const result = number * 2;
  callback(result);
}


function callback(result) {
  console.log('Result:', result);
}


multiplyByTwo(5, callback);


Question: Implement a JavaScript function calculateSum that takes an array of numbers as an argument and calculates their sum. The function should accept a callback function callback that receives the calculated sum. Invoke the callback function with the sum of the array elements.
Example Input:calculateSum([2, 4, 6, 8], callback);


Expected Output:Sum: 20
Solution:
function calculateSum(numbers, callback) {
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  callback(sum);
}


function callback(sum) {
  console.log('Sum:', sum);
}


calculateSum([2, 4, 6, 8], callback);


Question: Create a JavaScript function getUserData that simulates fetching user data from a server asynchronously. The function takes a callback function callback as an argument. Inside the getUserData function, after a delay of 2 seconds, invoke the callback function with a mock user object containing name, email, and age properties.
Example Input: getUserData(callback);


Expected Output:User Data:
{
  name: 'John Doe',
  email: 'johndoe@example.com',
  age: 25
}


Solution:
function getUserData(callback) {
  setTimeout(() => {
    const user = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      age: 25
    };
    callback(user);
  }, 2000);
}


function callback(user) {
  console.log('User Data:');
  console.log(user);
}


getUserData(callback);


Question: Write a JavaScript function getRandomNumber that generates a random number between 1 and 10. Implement a promise that resolves with the generated random number. The promise should be rejected if the generated number is less than 5.
Example Input:getRandomNumber()
Expected Output:
A promise object that will be resolved with a random number between 1 and 10 if it is greater than or equal to 5. If the generated number is less than 5, the promise should be rejected.
Solution:
function getRandomNumber() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    
    if (randomNumber >= 5) {
      resolve(randomNumber);
    } else {
      reject(new Error('Generated number is less than 5.'));
    }
  });
}


getRandomNumber()
  .then((number) => {
    console.log('Resolved:', number);
  })
  .catch((error) => {
    console.log('Rejected:', error.message);
  });


Question: Write a JavaScript function checkFileExists that checks if a file exists asynchronously using promises. The function takes a file path as an argument and returns a promise. Inside the function, after a delay of 1 second, check if the file exists. If the file exists, resolve the promise. If the file does not exist, reject the promise.
Example Input:checkFileExists('/path/to/file.txt')


Expected Output:
A promise object that will be resolved if the file exists after a delay of 1 second. If the file does not exist, the promise should be rejected.
Solution:
function checkFileExists(filePath) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Assuming you're working in a Node.js environment
      const fs = require('fs');


      fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
          reject(new Error('File does not exist.'));
        } else {
          resolve();
        }
      });
    }, 1000);
  });
}


checkFileExists('/path/to/file.txt')
  .then(() => {
    console.log('File exists.');
  })
  .catch((error) => {
    console.log('File does not exist:', error.message);
  });




