import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Card from "./index";

describe("Card Component", () => {
  test("renders card with title and value", () => {
    const title = "Test Title";
    const value = "100";

    const { getByText } = render(<Card title={title} value={value} />);

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(value.toString())).toBeInTheDocument();
  });

  test("renders card with a numeric value", () => {
    const title = "Numeric Value";
    const value = 42;

    const { getByText } = render(<Card title={title} value={value} />);

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(value.toString())).toBeInTheDocument();
  });

  test("renders card with a string value", () => {
    const title = "String Value";
    const value = "Hello World";

    const { getByText } = render(<Card title={title} value={value} />);

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(value)).toBeInTheDocument();
  });
});
