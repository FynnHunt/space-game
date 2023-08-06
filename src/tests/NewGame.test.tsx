import { it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import GameMain from "../components/GameMain";

it("renders", async () => {
  // Arrange
  render(<GameMain />);

  // Test to see if error message is displayed when a user doesn't enter a call sign.

  // TODO: Write more tests

  fireEvent.click(screen.getByText("Begin your journey"));

  const items = await screen.findAllByText("You must enter a call sign");
  expect(items).toHaveLength(1);
});
