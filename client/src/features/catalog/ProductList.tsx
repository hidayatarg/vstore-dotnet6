import { Grid } from '@mui/material';
import { Product } from '../../app/models/product';
import ProductCard from './ProductCard';

interface Props {
    products: Product[];
}

export default function ProductList({products}: Props) {
	console.log('products: ', products);
	return (
		<>
			<Grid container spacing={4} sx={{mb: 2}}>
				{products.map((product) => (
					<Grid key={product.id} item xs={6} md={4}>
						<ProductCard product={product}/>
					</Grid>
				))}
			</Grid>
		</>
	);
}
