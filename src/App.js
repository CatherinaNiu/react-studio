import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import singleBakeryItem from "./components/BakeryItem.js"
import cartItem from "./components/CartItem.js"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cartState, setCartState] = useState({items:[], totalPrice:Number(0)})

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div id="items">
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        //<p>{item.name}</p>
        <div class="singleBakeryItem">
          {singleBakeryItem(item)}
          <button onClick={() =>
          {
            setCartState(
              /*prevState => {
                const newstate = {...prevState};
                newstate["items"] = prevState["items"] + item["name"];
                newstate["totalPrice"] = prevState["Total Price"] + item["price"];
                return {newstate}
              }
              */
                  
              prevState => {
                if (!prevState.items.some(obj => item.name === obj.name)) {
                  return {
                    items: prevState.items.concat({
                      name: item.name,
                      itemcount: Number(1)
                    }),
                    totalPrice: Number(prevState.totalPrice) + Number(item.price)
                  }
                } else{
                console.log(prevState);
                var tochange = prevState.items.findIndex(obj => obj.name === item.name);
                var cpy = prevState.items;
                cpy[tochange].itemcount = cpy[tochange].itemcount + 1;
                return {
                  items: cpy,
                  totalPrice: Number(prevState.totalPrice) + Number(item.price)
                }}
            })
          }
          }>
            Add to Cart
          </button>
        </div>
      ))}
      </div>
      
      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <h3>Items</h3>
        <div>
          {cartState.items.map((obj) => (
            //<div>{obj.itemcount} x {obj.name}</div>)
            cartItem(obj)
            ))
          }  
        </div>
        <h3>Total Price: {cartState.totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default App;
