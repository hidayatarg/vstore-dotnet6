import { Product } from "../../app/models/product"

interface Props {
    products: Product[];
    addProduct: () => void; 
}

export default function catalog(props: Props) {
    return (
        <>
            <h3>Products</h3>
            <ul>
                {props.products.map(product =>
                    <li key={product.id} >{product.name} - {product.price} </li>)
                }
            </ul>
            <button onClick={props.addProduct}>Add Product</button>


        </>

    )
}
