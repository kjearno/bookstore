import NotFound from "./404";
import Cart from "./cart";
import Home from "./index";

export default [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/cart",
    exact: true,
    component: Cart,
  },
  {
    path: "*",
    component: NotFound,
  },
];
