import React from "react";
import { render } from "@testing-library/react";
import Application from "components/Application";

it("renders without crashing", () => {
  render(<Application />);
});

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });

  afterEach(cleanup);

  describe("Form", () => {
    const interviewers = [
      {
        id: 1,
        student: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      },
    ];

    it("renders without student name if not provided", () => {
      expect(getByPlaceholderText("Enter Student Name")).toHaveValue("");
    });

    it("renders with initial student name", () => {
      expect(getByTestId("student-name-input")).toHaveValue(
        "Lydia Miller-Jones"
      );
    });
  });
});
