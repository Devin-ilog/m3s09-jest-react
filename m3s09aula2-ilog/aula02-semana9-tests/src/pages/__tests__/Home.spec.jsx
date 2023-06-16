import { fireEvent, render, screen } from "@testing-library/react"
import Home from "../Sobre"
import { BrowserRouter } from "react-router-dom"

describe("<Home />", () => {
  test("should render the component", () => {
    // render(
    //   <BrowserRouter>
    //     <Home />
    //   </BrowserRouter>
    // )

    render(<Home />, {wrapper: BrowserRouter})
  })

  test("shoul call the link href", () => {
    render(<Home />, {wrapper: BrowserRouter})

    const linkSobre = screen.getByRole("link", {name: "Sobre"})

    fireEvent.click(linkSobre)

    expect(window.location.pathname).toBe("/sobre")
  })
})