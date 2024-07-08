function handleFormSubmit(event)
{
    event.preventDefault();
    console.log("Form was submitted");
}

export default function Form() {
    return (
    <form> 
        <input placeholder="Write Anything"/><br /><br />
        <button onClick={handleFormSubmit}>Submit</button>
    </form>
    );
} //also we can write within form element onSubmit={handleFormSubmit}