import { describe, expect, it, vi } from "vitest"
import { render, userEvent } from "@/tests/testing-library"

import { Button, buttonVariants } from "./button"

describe("Button component", () => {
  it("should render without crashing", () => {
    render(<Button label="Test button" />)
  })

  it("should render with provided label", () => {
    const { getByText } = render(<Button label="Test button" />)
    expect(getByText("Test button")).toBeInTheDocument()
  })

  it("should apply the correct variant classes", () => {
    const { container } = render(
      <Button label="Test button" variant="secondary" />
    )
    expect(container.firstChild).toHaveClass(
      buttonVariants({ variant: "secondary" })
    )
  })

  it("should apply the correct size classes", () => {
    const { container } = render(<Button label="Test button" size="lg" />)
    expect(container.firstChild).toHaveClass(buttonVariants({ size: "lg" }))
  })

  it("should apply the correct default classes", () => {
    const { container } = render(<Button label="Test button" />)
    expect(container.firstChild).toHaveClass(
      buttonVariants({ variant: "primary", size: "md" })
    )
  })

  it("should respond to click events", async () => {
    const onClick = vi.fn()
    const { getByText } = render(
      <Button label="Test button" onClick={onClick} />
    )
    await userEvent.click(getByText("Test button"))
    expect(onClick).toHaveBeenCalled()
  })
})
