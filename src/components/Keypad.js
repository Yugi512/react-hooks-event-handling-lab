// Code Keypad Component Here

function Keypad (){
    function changeEvent(event){
        console.log("Entering password...")
    }

    return (
        <div>
            <input type="password" onChange={changeEvent} ></input>
        </div>
    )
}

export default Keypad;