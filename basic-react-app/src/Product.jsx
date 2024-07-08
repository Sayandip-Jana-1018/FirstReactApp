import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
    {//let styles = {backgroundColor : price>=20000 ? "blueviolet" : "blue"};
    //1ST METHOD(BEST)

    // return (
    //     <div className="Product" style={styles}>
    //         <h3>Name: {title}</h3>
    //         <h5>Price: {price}</h5>
    //         {/* <p>{features}</p> */}
    //         <p>
    //             {features.map((feature) => (
    //              <li>{feature}</li>
    //             ))}
    //         </p>
    //         {/* <p>{list}</p> */}
    //         {features2 && <p>{features2}</p>}
    //         {/* {price > 30000 ? <p>"Discountof 5%"</p> : null}  */}
    //         {/* {price > 30000 ? <p>"Discountof 5%"</p> : <a href="/">Get Discount</a>} */}
    //         {price >= 20000 && <a href="/">Get Discount</a>}
    //     </div>
    // ); // generates no null paragraph as before..


    //2ND METHOD

    // let isDiscount = price > 30000 ? "5%" : "";
    // return (
    //     <div className="Product">
    //         <h3>Name: {title}</h3>
    //         <h5>Price: {price}</h5>
    //         {/* <p>{features}</p> */}
    //         <p>
    //             {features.map((feature) => (
    //              <li>{feature}</li>
    //             ))}
    //         </p>
    //         {/* <p>{list}</p> */}
    //         {features2 && <p>{features2}</p>}
    //         <p>{isDiscount}</p>
    //     </div>
    // );

    //3RD METHOD

    // const list = features.map((feature) => <li>{feature}</li>)
    // if(price>20000)
    // {
    //     return (
    //         <div className="Product">
    //             <h3>Name: {title}</h3>
    //             <h5>Price: {price}</h5>
    //             {/* <p>{features}</p> */}
    //             <p>
    //                 {features.map((feature) => (
    //                  <li>{feature}</li>
    //                 ))}
    //             </p>
    //             {/* <p>{list}</p> */}
    //             {features2 && <p>{features2}</p>}
    //             <p>Discount of 5%</p>
    //         </div>
    //     );
    // } else {
    //     return (
    //         <div className="Product">
    //             <h3>Name: {title}</h3>
    //             <h5>Price: {price}</h5>
    //             {/* <p>{features}</p> */}
    //             <p>
    //                 {features.map((feature) => (
    //                  <li>{feature}</li>
    //                 ))}
    //             </p>
    //             {/* <p>{list}</p> */}
    //             {features2 && <p>{features2}</p>}
    //         </div>
    //     );
    // }
    }
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let description = [
                       ["\"8,000 DPI\"", "\"5 Programmable Buttons\""], 
                       ["\"Intuitive Surface\"", "\"Designed for Ipad Pro\""],
                       ["\"Designed for Ipad Pro\"", "\"Intuitive Surface\""],
                       ["\"Wireless Extravagancy\"", "\"Hi Sayandip\""],
                      ];
    return (
        <div className="Product">
            <h2>{title}</h2>
            <h3>{description[idx][0]}</h3>
            <h3>{description[idx][1]}</h3>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    )
    
}

export default Product;