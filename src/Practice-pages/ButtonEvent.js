export default function Event() {
    function Apple() {
        alert("function calls ");
    }
    return (
        <div >
            <h1>This Is Button Event </h1>
            <button onClick={Apple}>Click Me</button><br></br>
            <button onClick={() => alert("Check the CekBox ")}>Click Me</button>

        </div>
    )
}

