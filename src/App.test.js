import { render, screen } from "@testing-library/react";
import Bookingpage from "./Bookingpage";

test("Renders the Bookingpage ", () => {
  render(<Bookingpage />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
