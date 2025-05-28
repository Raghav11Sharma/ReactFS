import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../components/LoginPage";
import HouseList from "../components/HouseList";
import ProductDetailsById from "../components/ProductDetailsById";
import About from "../components/About";
import Register from "../components/Register";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <App></App>,
        children: [
            
               { path:'',element:<LoginPage></LoginPage>},
            { path:'loginpage',element:<LoginPage></LoginPage>},
               { path:'/HouseList',element:<HouseList></HouseList>},
               { path:'/ProductList/:id',element:<ProductDetailsById></ProductDetailsById>},
               { path:'/About',element:<About></About>},
               { path:'/register',element:<Register></Register>}
        ]
    }
])