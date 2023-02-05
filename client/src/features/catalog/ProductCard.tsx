import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Link } from 'react-router-dom';
import { Product } from '../../app/models/product';
import { currencyFormat } from '../../app/util/util';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { addBasketItemAync } from '../basket/basketSlice';

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const {status} = useAppSelector(state => state.basket);
  const dispatch = useAppDispatch();
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar>
            {product.name.charAt(0).toLocaleUpperCase()}
          </Avatar>
        }
        title={product.name}
      // title properties
      // titleTypographyProps={{
      //   sx: {fontWeight: 'bold', fontSize: '10px'}
      // }}
      />
      <CardMedia
        sx={{ height: 140, backgroundSize: 'contain' }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5">
          {currencyFormat(product.price)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <LoadingButton 
          loading={status.includes('pendingAddItem' + product.id)} 
          onClick={() => dispatch(addBasketItemAync({productId: product.id}))} 
          size="small">
            Add to Cart
        </LoadingButton>
        <Button component={Link} to={`/catalog/${product.id}`}>View</Button>
      </CardActions>
    </Card>
  );
}
