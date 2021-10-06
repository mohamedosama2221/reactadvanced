import React from "react";
import Counter from "./../Counter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("Header renders with correct text", () => {
  const { getByTestId } = render(<Counter />);
  const headerEl = getByTestId("header");
  expect(headerEl.textContent).toBe("My Counter");
});

it("initial value for the counter is zero", () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
});

it("initial value for the input is one", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");
  expect(inputEl.value).toBe("1");
});

it("inner text for the decrement button", () => {
  const { getByTestId } = render(<Counter />);
  const removeBtn = getByTestId("remove-btn");
  expect(removeBtn.textContent).toBe("-");
});

it("inner text for the increase button", () => {
  const { getByTestId } = render(<Counter />);
  const increaseBtn = getByTestId("increase-btn");
  expect(increaseBtn.textContent).toBe("+");
});

it("changing value of input work correctly", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");
  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  expect(inputEl.value).toBe("5");
});

it("increase value works", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");
  const removeBtn = getByTestId("remove-btn");
  const increaseBtn = getByTestId("increase-btn");
  const counterEl = getByTestId("counter");

  fireEvent.click(increaseBtn);
  fireEvent.click(increaseBtn);
  fireEvent.click(removeBtn);

  expect(counterEl.textContent).toBe("1");

  fireEvent.change(inputEl, {
    target: {
      value: 10,
    },
  });

  fireEvent.click(increaseBtn);
  fireEvent.click(increaseBtn);
  fireEvent.click(increaseBtn);
  fireEvent.click(removeBtn);

  expect(counterEl.textContent).toBe("21");
});

it("color changes", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");
  const removeBtn = getByTestId("remove-btn");
  const increaseBtn = getByTestId("increase-btn");
  const counterEl = getByTestId("counter");

  fireEvent.click(increaseBtn);
  fireEvent.click(increaseBtn);
  fireEvent.click(removeBtn);

  expect(counterEl.textContent).toBe("1");
  expect(counterEl.classList.contains("text-danger")).toBeFalsy();
  expect(counterEl.classList.contains("text-success")).toBeFalsy();

  fireEvent.change(inputEl, {
    target: {
      value: 100,
    },
  });

  fireEvent.click(increaseBtn);
  fireEvent.click(increaseBtn);

  expect(counterEl.textContent).toBe("201");
  expect(counterEl.classList.contains("text-success")).toBeTruthy();
  expect(counterEl.classList.contains("text-danger")).toBeFalsy();

  fireEvent.click(removeBtn);
  fireEvent.click(removeBtn);
  fireEvent.click(removeBtn);
  fireEvent.click(removeBtn);

  expect(counterEl.classList.contains("text-danger")).toBeTruthy();
  expect(counterEl.classList.contains("text-success")).toBeFalsy();
});
