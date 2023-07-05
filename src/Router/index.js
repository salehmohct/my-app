import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
export const Paths = {
  home: "/",
  cart: "/cart",
};

export const router = [
  { index: true, element: <Home /> },
  { path: Paths.cart, element: <Cart /> },
];
