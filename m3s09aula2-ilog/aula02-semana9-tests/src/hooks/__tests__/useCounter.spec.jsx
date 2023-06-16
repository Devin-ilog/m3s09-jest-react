import { renderHook } from "@testing-library/react"
import useCounter from "../useCounter"
import { act } from "react-dom/test-utils"

describe("useCounter", () => {
  test("shoul render count 0", () => {
    const { result: {current: {count, increment}} } = renderHook(() => useCounter())

    // expect(result.current.count)
    expect(count).toBe(0)
  })

  test("handle increment function", () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(1)
  })
})