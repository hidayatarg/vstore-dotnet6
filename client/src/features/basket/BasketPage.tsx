import { Delete } from '@mui/icons-material';
import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useStoreContext } from '../../app/context/StoreContext';

export default function BasketPage() {
  const { basket } = useStoreContext();
  if (!basket) return <Typography variant='h3'>Your basket is empty</Typography>

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Products</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
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
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">$ {(row.quantity * (row.price / 100)).toFixed(2)}</TableCell>
              <TableCell align="right">
                <IconButton color='error'>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
