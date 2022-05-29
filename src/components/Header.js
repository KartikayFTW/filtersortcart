import React from "react";
import { Container, FormControl, Navbar } from "react-bootstrap";

import { CartState } from "../context/context";

const Header = () => {
  const { filterDispatch } = CartState();
  const mystyle = {
    height: 80,
  };
  return (
    <Navbar bg="primary" variant="dark" style={mystyle}>
      <Container>
        <Navbar.Brand>Shopping Cart</Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 400 }}
            placeholder="Search a product"
            className="m-auto"
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
            }
          />
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;
