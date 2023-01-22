import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { CounterState } from "../checkout/counterReducer";

export default function ContactPage() {
  const {data, title} = useSelector((state: CounterState) => state);
  return (
    <>
      <Typography variant="h2">
          {title}
      </Typography>

      <Typography variant="h5">
          The data:  {data}
      </Typography>
    </>
  )
}
