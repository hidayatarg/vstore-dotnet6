import { Add, Delete, Remove } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useState } from 'react';
import agent from '../../app/api/agent';
import { useStoreContext } from '../../app/context/StoreContext';

export default function BasketPage() {
  const { basket, setBasket, removeItem } = useStoreContext();
  const [loading, setLoading] = useState(false);

  function handleAddItem(productId: number) {
    setLoading(true);
    agent.Basket.addItem(productId)
      .then(basket => setBasket(basket))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }

  function handleRemoveItem(productId: number, quantity: number = 1) {
    setLoading(true);
    agent.Basket.removeItem(productId, quantity)
      .then(() => removeItem(productId, quantity))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }

  if (!basket) return <Typography variant='h3'>Your basket is empty</Typography>


  return (
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
              <TableCell align="right">
                <LoadingButton loading={loading} onClick={() => handleRemoveItem(row.productId)} color='error'>
                  <Remove />
                </LoadingButton>
                {row.quantity}
                <LoadingButton loading={loading} onClick={() => handleAddItem(row.productId)} color='secondary'>
                  <Add />
                </LoadingButton>
              </TableCell>
              <TableCell align="right">$ {(row.quantity * (row.price / 100)).toFixed(2)}</TableCell>
              <TableCell align="right">
                <LoadingButton loading={loading} onClick={() => handleRemoveItem(row.productId, row.quantity)} color='error'>
                  <Delete />
                </LoadingButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
