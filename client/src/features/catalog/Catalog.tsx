

export default function catalog(props: any) {
    return (
        <>
            <h3>Products</h3>
            <ul>
                {props.products.map((product: any) =>
                    <li key={product.id} >{product.name} - {product.price} </li>)
                }
            </ul>
            <button onClick={props.addProduct}>Add Product</button>


        </>

    )
}
