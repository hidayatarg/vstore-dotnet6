import { Typography } from '@mui/material';
import { useState, useEffect } from 'react'
import agent from '../../app/api/agent';
import Loading from '../../app/layout/Loading';
import { Basket } from '../../app/models/basket';

export default function BasketPage() {
  const [loading, setLoading] = useState(true);
  const [basket, setBasket] = useState<Basket | null>(null)


  // initailly
  useEffect(() => {
    agent.Basket.get()
      .then(basket => setBasket(basket))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <Loading  message="Loading basket..."/>

  if (!basket) return <Typography variant='h3'>Your basket is empty</Typography>

  return (
    <h3>BuyerId = {basket.buyerId}</h3>
  )
}
