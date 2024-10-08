function Click() {
    const handleClick = () => {
        
        console.log("Button clicked");
    };
    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Click;