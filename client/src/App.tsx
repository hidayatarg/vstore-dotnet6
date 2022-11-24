import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([
    { name: "product 1", price: 100.00 },
    { name: "product 2", price: 100.00 }
  ]);
  function addProduct() {
    setProducts([...products, {name:"product 3", price: 300} ])
  }
  return (
    <div>
      <h1>React vStore App</h1>
      <h3>Products</h3>
      <ul>
        { products.map((product) => 
          <li key={product.name} >{product.name} - {product.price} </li>) 
        }
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;


