import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../../app/models/product';

export default function ProductDetails() {
  const { id } = useParams<{id: string}>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios.get(`http://localhost:5161/api/product/${id}`)
      .then((response) => setProduct(response.data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
   
  }, [id])
  
  if (loading) return <h3>Loading...</h3>

  if (!product) return <h3>Product not found</h3>

  return (
    <h2>{product.name}</h2>
  )
}
