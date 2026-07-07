 

const greet = "Hello, welcome to our application!";
const time = new Date().toLocaleTimeString();


const Greeting = () => {
    return (
        <div>
            <h1>{greet}</h1>
            <p>{time}</p>
        </div>
    )
}

export default Greeting