let counter = { name: "Counter" };
let counterValue = 1;

function pureFunction(counter, value) {
    return `${counter.name} ${value}`;
}

console.log(pureFunction(counter, counterValue));
console.log(pureFunction(counter, counterValue + 1));
console.log(pureFunction(counter, counterValue));

function noPureFunction(counter, value) {
    counter.name = counter.name + " Valp";
    counterValue += 1;
    return `${counter.name} ${value}`;
}

console.log(("------------------"));
console.log(noPureFunction(counter, counterValue));
console.log(noPureFunction(counter, counterValue + 1));
console.log(noPureFunction(counter, counterValue));
console.log(counter);