import { Button, ButtonGroup, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CounterState, DECREMENT_COUNTER, INCREMENT_COUNTER } from "../checkout/counterReducer";

export default function ContactPage() {
  const dispatch = useDispatch();
  const {data, title} = useSelector((state: CounterState) => state);
  return (
    <>
      <Typography variant="h2">
          {title}
      </Typography>

      <Typography variant="h5">
          The data:  {data}
      </Typography>
      <ButtonGroup>
        <Button onClick={() => dispatch({type: DECREMENT_COUNTER})} variant="contained" color="error">Decrement</Button><Button onClick={() => dispatch({type: INCREMENT_COUNTER})} variant="contained" color="primary">Decrement</Button>
      </ButtonGroup>
    </>
  )
}
