import Product from "./Product.jsx";

function ProductTab() {
  // let options = ["hi-tech", "durable", "fast"];
  // let options = [<li>"hi-tech"</li>, <li>"durable"</li>, <li>"fast"</li>];
  // let options2 = { a: "sayandip", b: "sneh", c: "ankit" };
    // return (
      // <>
      //   {/* <Product title="Smartphone" 
      //     price={20000} 
      //     features={options} 
      //     features2={["sayandip ", "ankit"]}/> 
      //   <Product title="Laptop" 
      //     price={30000} 
      //     features={options} 
      //     features2={["sayandip ", "ankit"]}/>
      //   <Product title="Ipad" 
      //     price={1} 
      //     features={options} 
      //     features2={["sayandip ", "ankit"]}/> */}
      // </>

      let styles = {
        display: "flex",
        flexWrap: "Wrap",
        justifyContent: "center",
        gap: "2rem",
      };
      return ( 
        <div style={styles}>
          <Product title="Logitech MX Master" idx={0}/> 
          <Product title="Apple Pencil (2nd Gen)" idx={1}/> 
          <Product title="Zebronics Zeb-Transformer" idx={2}/> 
          <Product title="Portonics Toad 23" idx={3}/>
        </div>
    );
}

export default ProductTab;
