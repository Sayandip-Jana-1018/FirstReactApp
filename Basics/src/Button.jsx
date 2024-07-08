function printHello(event)
{
    console.log("Hello!");
    console.log(event);
}

function printBye()
{
    console.log("Bye!");
}
function handleDbClick()
{
    console.log("You double clicked");
}

export default function Button()
{
    return (
        <div>
            <button onClick={printHello}>Click Me!</button>
            <p onMouseOver={printBye}>Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Dicta fugiat totam,
                animi quidem dolorum, accusantium delectus
                odit obcaecati reprehenderit magni nam
                necessitatibus, fugit a quia exercitationem
                tempore dignissimos deleniti iusto!</p>
                <button onDoubleClick={handleDbClick}>Double Click!</button>
        </div>
    )
}