import { createBrowserRouter } from "react-router-dom";
import Main from "../Mainlayout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SetProfileDetails from "../pages/SetProfileDetails";
import UserDetails from "../pages/UserDetails";
const routes = createBrowserRouter([
    {
       path:"/",
       element: <Main/>,
       children: [
        {
            path:"/",
            element:<Home/>
        },
        {
            path:'/register',
            element:<Register/>
    },
    {
              path: '/login',
              element: <Login/>
     },
     {
        path:'/setProfile',
        element:<SetProfileDetails/>
     },
     {
        path:'/userDetails/:id',
        loader: ({params})=>{
            return fetch(`http://localhost:5000/users/${params.id}`)
        } ,
        element: <UserDetails/>
     }
      
       ]
    },   
      
    
    
])


export default routes;