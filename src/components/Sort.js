import React from "react";
import { Form } from "react-bootstrap";
import { CartState } from "../context/context";

const Sort = () => {
  const {
    filterState: { sort },
    filterDispatch,
  } = CartState();
  return (
    <div className="filters sort">
      <span className="title">Sort Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
    </div>
  );
};

export default Sort;
