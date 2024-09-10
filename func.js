function counter(name) {
  return `Hello, ${name}`;
}

function secondFunction(callback) {
  const name = "Naman";
  return callback(name);
}

const res = secondFunction(counter);

console.log(res);
