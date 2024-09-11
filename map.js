// const numbers = [1,2,3,4]

// const division = numbers.map((a) => a/2)

// console.log(division)


const users = [
{id:1, name:'abc'},
{id:2, name:'dce'},
{id:3, name:'xyz'}
]

const names = users.map( (user) => user.name === 'abc' ? user.name : null)

console.log(names)