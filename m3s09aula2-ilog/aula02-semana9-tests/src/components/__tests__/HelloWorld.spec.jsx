import { render, screen } from "@testing-library/react"
import HelloWorld from "../HelloWorld"

describe("<HelloWorld />", () => {
  test("should render the component", () => {
    render(<HelloWorld name={"Bruno"} />)

    // screen.debug()
    expect(screen.getByText("Hello, Bruno!")).toBeInTheDocument()
  })
})