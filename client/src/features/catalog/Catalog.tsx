import { Product } from "../../app/models/product"
import ProductList from "./ProductList";
import { useEffect, useState } from 'react';
import agent from "../../app/api/agent";
import Loading from "../../app/layout/Loading";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

  useEffect(()=> {
   agent.Catalog.list()
    .then(products => setProducts(products))
    .then(error => console.log(error))
    .finally(() => setLoading(false))
    
  }, [])

    if (loading) return <Loading  message="Loading products..."/>

    return (
        <>
            <ProductList products={products}/>
        </>
    )
}
