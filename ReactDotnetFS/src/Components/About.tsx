import { useDispatch, useSelector } from "react-redux"
import type { CounterState } from "./CounterReducer"
import { ButtonGroup, Typography } from "@mui/material";

export default function About()
{

const recievedfromRedux = useSelector ((state:CounterState) => state.data);

const updatedstate = useDispatch();

return (
    <>
    <Typography variant="h3">
        About Page
</Typography>
<Typography variant="body2">
    The data using Redux is since it is storing state is :: {recievedfromRedux}
</Typography>
<ButtonGroup>
    <button onClick = {() => updatedstate({type : 'increment'})} color ="error"> Increment</button>
    <button onClick = {() => updatedstate({type : 'decrement'})} color ="secondary"> Decrement</button>

</ButtonGroup>
    </>
)
}