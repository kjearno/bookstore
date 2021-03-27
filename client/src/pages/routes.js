import { HomePage } from "./home";
import { CartPage } from "./cart";
import { NotFoundPage } from "./not-found";

export const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/cart",
    exact: true,
    component: CartPage,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
];
