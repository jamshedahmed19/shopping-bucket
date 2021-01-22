import React from "react";
import "./App.css";
import { Container, Box } from "@material-ui/core";
import { store } from "./store/index";
import { Provider } from "react-redux";
import { Product } from "./components/Product";
import { Basket } from "./components/Basket";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Container maxWidth="md">
          <Box mt={5} mb={5}>
            <Product />
          </Box>
          <Box mt={5} mb={5}>
            <Basket />
          </Box>
        </Container>
      </Provider>
    </div>
  );
}

export default App;
