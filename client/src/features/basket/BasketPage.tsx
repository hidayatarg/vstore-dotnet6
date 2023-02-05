import { Add, Delete, Remove } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import agent from '../../app/api/agent';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { addBasketItemAync, removeBasketItemAync, setBasket } from './basketSlice';
import BasketSummary from './BasketSummary';

export default function BasketPage() {
  // basket from redux state
  const { basket, status } = useAppSelector(state => state.basket);
  const dispatch = useAppDispatch();

  if (!basket) return <Typography variant='h3'>Your basket is empty</Typography>


  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Products</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="right">Subtotal</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basket.items.map((row) => (
              <TableRow
                key={row.productId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box display='flex' alignItems='center'>
                    <img src={row.pictureUrl} alt={row.name} style={{height: 50, marginRight: 20}} />
                    <span>{row.name}</span>
                  </Box>
                </TableCell>
                <TableCell align="right">$ {(row.price / 100).toFixed(2)}</TableCell>
                <TableCell align="center">
                  <LoadingButton 
                    loading={status === 'pendingRemoveItem' + row.productId + 'rem'}
                    onClick={() => dispatch(removeBasketItemAync({productId: row.productId, quantity: 1, name: 'rem'}))}
                    color='error'
                  >
                      <Remove />
                  </LoadingButton>
                  {row.quantity}
                  <LoadingButton 
                    loading={status === 'pendingAddItem' + row.productId} 
                    onClick={() => dispatch(addBasketItemAync({productId: row.productId}))} 
                    color='secondary'
                  >
                    <Add />
                  </LoadingButton>
                </TableCell>
                <TableCell align="right">$ {(row.quantity * (row.price / 100)).toFixed(2)}</TableCell>
                <TableCell align="right">
                  <LoadingButton 
                    loading={status ==='pendingRemoveItem' + row.productId + 'del'}
                    onClick={() => dispatch(removeBasketItemAync({
                      productId: row.productId, quantity: row.quantity, name: 'del'
                    }))}
                    color='error'
                  >
                    <Delete />
                  </LoadingButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container>
          <Grid item xs={6} />
          <Grid item xs={6}>
            <BasketSummary />
            <Button 
              component={Link} 
              to={`/checkout`}
              variant='contained'
              size='large'
              fullWidth
            >
              Checkout
            </Button>
          </Grid>
      </Grid>
    </>
  )
}
