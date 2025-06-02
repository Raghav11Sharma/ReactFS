import { useDispatch, useSelector } from "react-redux";
import type { CounterState } from "./CounterReducer";
import { Typography } from "@mui/material";


function Register()
{
    const datar = useSelector ((state:CounterState) => state.data);

    const temparr = [{Name : 'Raghav', Age : 28, Salary :50000} ]

    const funcreturn = () => { console.log('rgv return valeu is', temparr)};
temparr.forEach(element => {
    console.log( 'rgv value is' , `The temp js object value is :: ${element.Name}`);
});
    return(
<>
<div>
Register Component 
<Typography variant="body2">


</Typography>


<Typography variant="body2">
    The data using Redux is since it is storing state is :: {datar}
    The temp js object value is :: 
</Typography></div>


</>
)












} 


export default Register;