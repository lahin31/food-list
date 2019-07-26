import React from 'react';
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import App from "./App";

afterEach(cleanup);

it("makes a snapshot and tests", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it("tests the className for wallpaper", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('wallpaper')).toHaveClass('cover_pic');
});