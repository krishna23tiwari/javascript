

function greet(name = "Guest") {
    return `Hello, ${name}`;
}

console.log(greet(undefined));
console.log(greet("John"));
