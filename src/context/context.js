import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { CartReducer, FilterReducer } from "./reducers";

const Cart = createContext();
faker.seed(99);
const Context = ({ children }) => {
  const productsArray = [...Array(20)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    department: faker.commerce.department(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
  //   console.log(productsArray);
  const [state, dispatch] = useReducer(CartReducer, {
    products: productsArray,
  });
  const [filterState, filterDispatch] = useReducer(FilterReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
    byDepartment: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, filterState, filterDispatch }}>
      {children}
    </Cart.Provider>
  );
};
export default Context;
export const CartState = () => {
  return useContext(Cart);
};
