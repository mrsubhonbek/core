import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/dom";

import { CourseItem } from "./course-item";

describe("course item", () => {
  it("should call delete callback", async () => {
    const onDelete = jest.fn();
    render(
      <CourseItem
        course={{ name: "asd", description: "abc", id: "qwe" }}
        onDelete={onDelete}
      />,
    );

    await userEvent.click(screen.getByText("Delete"));
    expect(onDelete).toHaveBeenCalled();
  });
});
