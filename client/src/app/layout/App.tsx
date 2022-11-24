import { useEffect, useState } from 'react';
import Catalog from '../../features/catalog/Catalog';
import { product } from '../models/product';

function App() {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(()=> {
    fetch('http://localhost:5161/api/Product')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])


  function addProduct() {
    setProducts(prevState => [...prevState, {
      id: prevState.length + 101,
      name: 'product' + (prevState.length + 1),
      price: (prevState.length * 100) + 100,
      brand: 'some',
      description: 'some',
      pictureUrl: 'http://picsum.photos/200'
    }]);
  }
  return (
    <div>
      <h1>React vStore App</h1>
      <Catalog products={products}/>
      
    </div>
  );
}

export default App;


