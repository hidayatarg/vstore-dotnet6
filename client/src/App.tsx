const products = [
  { name: "product 1", price: 100.00 },
  { name: "product 2", price: 100.00 }
]

function App() {
  return (
    <div>
      <h1>React vStore App</h1>
      <h3>Products</h3>
      <ul>
        { products.map((product,i) => 
          <li key={i} >{product.name} - {product.price} </li>) 
        }
      </ul>
    </div>
  );
}

export default App;
