const FormButton = () => {

    function onButtonClick() {
        console.log('You have submited your contacts successful');
    }

    return(
        <button onClick={onButtonClick}>Click to Submit</button>
    )
} 
export default FormButton;