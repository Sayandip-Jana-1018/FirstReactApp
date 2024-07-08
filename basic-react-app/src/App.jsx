{// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Title from "./Title.jsx";
// import Product from "./Product.jsx";
// import MsgBox from './MsgBox.jsx';
}


import './App.css'
import ProductTab from './ProductTab.jsx'; 

// function Description() {
//   return <h2>O my God! What a description!</h2>
// }

function App() {
  return (
    <>
      {/* <MsgBox userName="Sayandip" textColor="pink"/>
      <MsgBox userName="Ankit" textColor="white"/>
      <MsgBox userName="LPU" textColor="green"/> */}
      <h1>&hearts;...Blockbuster Deals | Shop Now...&hearts;</h1>
      <ProductTab />
    </>
  );

  // const [count, setCount] = useState(0)

  // return <button>Hello World!</button>

    // return (
    //   <> 
    //     <Title />
    //     <Description />
    //     <Title />
    //     <Description />
    //     <Title />
    //   </> 
    // );
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>


}

export default App;
