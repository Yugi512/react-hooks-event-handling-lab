import Keypad from "./Keypad";

function EyesOnMe(props){

    function blurEvent(event){
        console.log('Hey! Eyes on me!')
    }
    function focusEvent(event){
        console.log("Good!")
    }


    return <>
        <button onBlur={blurEvent} onFocus={focusEvent}>Eyes on me</button>
    </>
}
export default EyesOnMe