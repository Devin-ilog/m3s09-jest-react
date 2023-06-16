import { fireEvent, render, screen } from "@testing-library/react"
import App from "../App"

describe("<App />", () => {
  it("should show React Logo", () => {
    render(<App />)

    const logoReact = screen.queryByTitle("React logo")

    expect(logoReact).toBeInTheDocument()
  })

  test("should show button counter", () => {
    render(<App />)

    const button = screen.getByRole("button", {name: /count is 0/i})

    expect(button).toBeInTheDocument()
  })

  test("should increment on count", () => {
    render(<App />)

    const button = screen.getByRole("button", {name: /count is 0/i})
    
    fireEvent.click(button)
    expect(button).toHaveTextContent(/count is 1/i)
  })

  test("should get input Nome", () => {
    render(<App />)

    const input = screen.getByPlaceholderText("Nome")
    expect(input).toBeInTheDocument()
  })

  test("should call a function", () => {
    const ImparPar = (num) => {
      if(num % 2 == 0){
        return "PAR"
      } else {
        return "ÍMPAR"
      }
    }

    const result = ImparPar(10)

    expect(result).toBe("PAR")
  })
})
