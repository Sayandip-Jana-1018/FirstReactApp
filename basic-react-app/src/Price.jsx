export default function Price({oldPrice, newPrice}){
    let oldStyles = {
        textDecorationLine : "line-through",
    }
    let newStyles = {
        fontWeight: "bold",
    }
    let styles = {
        backgroundColor: "blueviolet",
        height: "30px",
        borderRadius: "2rem",
    }
    
    return(
        <div style={styles}>
            <span style={oldStyles}>&#x20B9;{oldPrice}</span>
            &nbsp;&nbsp;
            <span style={newStyles}>&#x20B9;{newPrice}</span>
        </div>
    );
}
