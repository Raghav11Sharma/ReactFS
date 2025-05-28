import { useEffect, useState } from "react";
import axios from 'axios';
import ProductDetails from "./ProductDetails";


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