
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { CartProvider } from "./Context/CartContext";
import Checkout from "./Pages/Checkout";
import ProductDetails from "./Pages/ProductDetails";
import Products from "./Pages/Products";
import Footer from "./Components/Footer";
import OrderPlaced from "./Pages/OrderPlaced";
import ProfileCard from "./Pages/ProfileCard";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
       {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/profilecard",
        element: <ProfileCard/>
      },
      
      {
        path: "/products/:id",
        element: <ProductDetails  />,
      },
       {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/orderplaced",
        element: <OrderPlaced  />,
      },

    ],
  },
]);

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}

function App() {
  return (
  <CartProvider>
      <RouterProvider router={appRouter} />
    </CartProvider>
  );
}

export default App;
