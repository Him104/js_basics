// const numbers = [1,2,3,4,5,6,7,8,9]
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function sum(numbers) {
// let sum = 0

//   for (let index = 0; index < numbers.length; index++) {
//  sum += numbers[index];
//   }

//   return sum;
// }

// console.log(sum(numbers));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum = numbers.reduce((accumulator, numbers) => accumulator + numbers, 0)

console.log(sum)


// -----------------------------------
// Iteration breakdown
// 1. Intitial value of accumulator is 0 

// 2. First Iteration : accumulator is 0, numbers is 1. the sum = 0 +1 = 1

// 3. Second Iteration : accumulator is 1, numbers is 2. the sum = 1 +2 = 3

// 3. Third Iteration : accumulator is 3, numbers is 3. the sum = 3 +3 = 6