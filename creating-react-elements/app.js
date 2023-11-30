const rootNode = document.getElementById("app");
console.log(rootNode);
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

function App() {
    return (
        React.createElement("article", null,
            React.createElement("h2", null, "Counter"),
            React.createElement("p", null, "You clicked 1 times"),
            React.createElement("button", null, "Click me"))
    );
}

console.log(App());

// this is standard JavaScript code, and runs it before any React code.
let articleElements = document.getElementsByTagName("article");
let articleElement = document.getElementsByTagName("article")[0];
console.log(articleElements);
console.log(articleElement);

// This will run after React does its work
setTimeout(function () {
    let articleElements = document.getElementsByTagName("article");
    let articleElement = document.getElementsByTagName("article")[0];
    console.log("");
    console.log(articleElements);
    console.log(articleElement);
}, 1000);