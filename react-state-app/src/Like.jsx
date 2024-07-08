import {useState} from 'react';

export default function Like()
{
    let [click, setClick] = useState(false);
    let [count, setCount] = useState(0);
    
    let clicked = () => {
        setClick(!click);
        setCount(count+1);
    };  

    let styles = {color:"red"};

    return (
        <div>
            <h2>..Click me to turn Red..</h2>
            <h2>Count = {count}</h2>
            <h1 onClick={clicked}>
                {
                    click ? <i style={styles} className="fa-solid fa-heart"></i> 
                          : <i className="fa-regular fa-heart"></i>
                }
            </h1>
        </div>
    );
}