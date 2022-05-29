import { Form } from "react-bootstrap";
import { CartState } from "../context/context";

import Rating from "./Rating";

const Filters = () => {
  const {
    state: { products },
    filterDispatch,
    filterState: { byStock, byFastDelivery, byDepartment, byRating },
  } = CartState();
  console.log(byDepartment);

  // make state for rating

  return (
    <div className="filters">
      <span className="title">Filter Products</span>

      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            filterDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            filterDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <div className="form">
        <Form.Select
          aria-label="Default select example"
          onChange={(e) =>
            filterDispatch({
              type: "FILTER_BY_DEPARTMENT",
              payload: e.target.value === "Category" ? "" : e.target.value,
            })
          }
        >
          <option>Category</option>
          {products.map((prod) => {
            return (
              <option key={prod.id} value={prod.department}>
                {prod.department}
              </option>
            );
          })}
        </Form.Select>
      </div>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            filterDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
    </div>
  );
};

export default Filters;
