import React from "react";
import { getByTestId, render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on redering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getByTestId("logo");

  expect(logo.src).toBe("http://localhost/dummyLogo");
});

test("Cart should have 0 items on first rendering", () => {
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  
    const cartItem = header.getByTestId('cart-items')
    
    expect(cartItem.innerHTML).toBe("Cart - 0")
  });
