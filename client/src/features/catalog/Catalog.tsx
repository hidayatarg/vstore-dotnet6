import { Avatar, Button, List, ListItem, ListItemAvatar } from "@mui/material";
import { Product } from "../../app/models/product"

interface Props {
    products: Product[];
    addProduct: () => void; 
}

export default function catalog({products, addProduct}: Props) {
    return (
        <>
            <h3>Products</h3>
            <List>
                {products.map(product =>
                    <ListItem key={product.id}>
                        <ListItemAvatar>
                            <Avatar src={product.pictureUrl} />
                        </ListItemAvatar>
                        {product.name} - {product.price} 
                        </ListItem>)
                }
            </List>
            <Button variant="contained" onClick={addProduct}>Add Product</Button>


        </>

    )
}
