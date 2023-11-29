const rootNode = document.getElementById("app");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

function App() {
    return React.createElement("button", null, "Click me");
}
console.log(React.createElement(App));