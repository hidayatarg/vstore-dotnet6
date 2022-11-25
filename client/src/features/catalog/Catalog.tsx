import { Button } from "@mui/material";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";

interface Props {
    products: Product[];
    addProduct: () => void; 
}

export default function catalog({products, addProduct}: Props) {
    return (
        <>
            <ProductList products={products}/>
            <Button variant="contained" onClick={addProduct}>Add Product</Button>
        </>
    )
}
