// const numbers = [1,2,3,4]

// const shubham = numbers.map((a) => a*2)

// console.log(shubham)


const users = [
{id:1, name:'abc'},
{id:2, name:'dce'},
{id:3, name:'xyz'}
]

const names = users.filter( user => user.name === 'abc' ).map(user =>user.name)

console.log(names)