import {useState} from 'react';

export default function Ludo()
{
    //1ST METHOD - MY WAY

    // let [blue, setBlue] = useState(0);
    // let [yellow, setYellow] = useState(0);
    // let [green, setGreen] = useState(0);
    // let [red, setRed] = useState(0);

    // let clickb = () => {
    //     setBlue(blue+1);
    // }
    // let clicky = () => {
    //     setYellow(yellow+1);
    // }
    // let clickg = () => {
    //     setGreen(green+1);
    // }
    // let clickr = () => {
    //     setRed(red+1);
    // }
    // let stylesb = {backgroundColor : 'blue', color : 'black'};
    // let stylesg = {backgroundColor : 'green', color : 'black'};
    // let stylesy = {backgroundColor : 'yellow', color : 'black'};
    // let stylesr = {backgroundColor : 'red', color : 'black'};
    // return (
    //     <div>
    //         <h1>Game Begins!</h1>
    //         <div className="baord">
    //             <h3>Blue moves = {blue}</h3>
    //             <button onClick={clickb} style={stylesb}>+1</button>
    //             <h3>Yellow moves = {yellow}</h3>
    //             <button onClick={clicky} style={stylesy}>+1</button>
    //             <h3>Green moves = {green}</h3>
    //             <button onClick={clickg} style={stylesg}>+1</button>
    //             <h3>Red moves = {red}</h3>
    //             <button onClick={clickr} style={stylesr}>+1</button>
    //         </div>
    //     </div>
    // );

    //2ND METHOD - MAM'S WAY

    let [move, setMove] = useState({blue : 0, yellow : 0, green : 0, red : 0});
    // let [arr, SetArr] = useState(["no moves"]);

        let clickb = () => {
            setMove((prevMove) => {
                return { ...prevMove, blue: prevMove.blue+1 };
            });};

        //     arr.push("blue moves");
        //     SetArr(arr);
        //     console.log(arr);
        // };

        let clicky = () => {
            setMove((prevMove) => {
                return { ...prevMove, yellow: prevMove.yellow+1 };
            });
        };
        let clickg = () => {
            setMove((prevMove) => {
                return { ...prevMove, green: prevMove.green+1 };
            });
        };
        let clickr = () => {
            setMove((prevMove) => {
                return { ...prevMove, red: prevMove.red+1 };
            });
        };

    return (
            <div>
                <h1>Game Begins!</h1>
                <div className="board">
                    <h3>Blue moves = {move.blue}</h3>
                    <button onClick={clickb} style={{backgroundColor : 'blue', color : 'black'}}>+1</button>
                    <h3>Yellow moves = {move.yellow}</h3>
                    <button onClick={clicky} style={{backgroundColor : 'yellow', color : 'black'}}>+1</button>
                    <h3>Green moves = {move.green}</h3>
                    <button onClick={clickg} style={{backgroundColor : 'green', color : 'black'}}>+1</button>
                    <h3>Red moves = {move.red}</h3>
                    <button onClick={clickr} style={{backgroundColor : 'red', color : 'black'}}>+1</button>
                </div>
            </div>
        );
};