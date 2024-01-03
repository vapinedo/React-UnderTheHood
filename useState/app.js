const rootNode = document.getElementById("app");
const root = ReactDOM.createRoot(rootNode);
let counterName = "One";
root.render(<App />)

function App() {
    return (
        <>
            <h1>Counters</h1>
            <section>
                <Counter name="One" />
                <Counter name="Two" />
            </section>
        </>
    );
}

function Counter(props) {

    const [numberOfClicks, setNumberOfClicks] = React.useState(0); 

    function handleClickWrong() {
        setNumberOfClicks(numberOfClicks + 1);
        setNumberOfClicks(numberOfClicks + 1);
        setNumberOfClicks(numberOfClicks + 1);
    }

    function handleClick() {
        setNumberOfClicks(currentState => currentState + 1);
        setNumberOfClicks(currentState => currentState + 1);
        setNumberOfClicks(currentState => currentState + 1);
    }
    
    return (
        <article>
            <h2>Counter {props.name}</h2>
            <p>You clicked {numberOfClicks} times</p>
            <button className="button" onClick={handleClick}>Click me</button>
        </article>
    );
}