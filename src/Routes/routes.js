import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
const routes = createBrowserRouter([
    {
       path:"/",
       element: <Home/>,
    },   
     {
            path:'/register',
            element:<Register/>
    },
    {
              path: '/login',
              element: <Login/>
          }
       
    
    
])


export default routes;