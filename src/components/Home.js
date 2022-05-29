import React from "react";
import { CartState } from "../context/context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import Sort from "./Sort";
import "./styles.css";

const Home = () => {
  const {
    state: { products },
    filterState: {
      byStock,
      byFastDelivery,
      sort,
      byRating,
      byDepartment,
      searchQuery,
    },
  } = CartState();

  const filteredProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings === byRating
      );
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }
    if (byDepartment) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.department.includes(byDepartment)
      );
    }
    return sortedProducts;
  };
  return (
    <div className="home">
      <div className="filter__sort">
        <Filters />
        <Sort />
      </div>
      <div className="productContainer">
        {filteredProducts().map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
