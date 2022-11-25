import { List, ListItem, ListItemAvatar, Avatar } from '@mui/material';
import { Product } from '../../app/models/product';

interface Props {
    products: Product[];
}

export default function ProductList({products}: Props) {
	return (
		<>
			<List>
				{products.map((product) => (
					<ListItem key={product.id}>
						<ListItemAvatar>
							<Avatar src={product.pictureUrl} />
						</ListItemAvatar>
						{product.name} - {product.price}
					</ListItem>
				))}
			</List>
		</>
	);
}
