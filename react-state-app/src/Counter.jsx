import {useState} from 'react';

function init () {
    return Math.random();
}

export default function Counter()
{
    let [count, setCount] = useState(init);

    let incCount = () => {
        setCount((counter) => {
            return counter + 1;
        });

        // setCount((counter) => {
        //     return counter + 1;
        // });
        
        // setCount((counter) => {
        //     return counter + 1;
        // });

        // let incCount = () => {
        //     setCount(count+1);
        // };
}
    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Me</button>
        </div>
    )
}