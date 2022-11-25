import { ListItem, ListItemAvatar, Avatar } from '@mui/material';
import { Product } from '../../app/models/product';

interface Props {
    product: Product
}

export default function ProductCard({product}: Props) {
	return (
		<ListItem key={product.id}>
			<ListItemAvatar>
				<Avatar src={product.pictureUrl} />
			</ListItemAvatar>
			{product.name} - {product.price}
		</ListItem>
	);
}
