import { useEffect, useState } from "react";
import axios from 'axios';
import type { Product } from "../Models/Product";
import ProductDetails from "./ProductDetails";
// function HouseList()
// {
// const [products,setProducts]= useState<Product[]>([]);

// useEffect(() =>{
//     fetch('https://fakestoreapi.com/products').
//     then(response => response.json()).then
//     (data => setProducts(data))
// }, [])


// const addProduct =() =>{
//     setProducts(prevState => [...prevState,
//         {
//             id : prevState.Id,
//         }
//     ])
// }


// const houses = [
//     {
//         id: 1,
//         address: "House16,Navakot,Amritsar",
//         country: "India",
//         Price: 500000

//     },
//     {
//         id: 2,
//         address: "House16,Navakot,Amritsar",
//         country: "India",
//         Price: 500000

//     },
//     {
//         id: 3,
//         address: "House16,Navakot,Amritsar",
//         country: "India",
//         Price: 500000

//     },
//      {
//         id: 4,
//         address: "House16,Navakot,Amritsar",
//         country: "India",
//         Price: 183000

//     },
// ];



// const HouseList = () => {
//     return (
//         <>
//             <div className="row mb-3">
//                 <h5 className="themeFontColor text-center">
//                     Houses Currently on the Market
//                 </h5>
//             </div>
//             <table className="table table-hover">
//                 <thead>
//                     <tr>
//                         <th> Address</th>
//                         <th> Country</th>
//                         <th>Asking Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {houses.map(h => (
//                         <tr key={h.id}>
//                             <td> {h.address}</td>
//                             <td> {h.country}</td>
//                             <td> {h.Price}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//         </> 
//     );
// };


// }

const HouseList = () => {
    const [apiresponse, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            try { 
                const response = await axios.get('https://fakestoreapi.com/products'); // Replace with your API URL
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Handling loading and error states
    if (loading) return <div>Loading...</div>;

    // Render the fetched data
    return (
        <>
        <ProductDetails apiresponse = {apiresponse}></ProductDetails>
        </>
    );
};

export default HouseList;