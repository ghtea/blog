import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {Button, ButtonProps} from "./Button"

describe("Button", () => {
  let onClick: jest.Mock<any, any>
  beforeEach(()=>{
    onClick = jest.fn()
  })

  it("calls onClick when button is clicked", ()=>{
    render(<Button onClick={onClick}>{"Button"}</Button>)
    const button = screen.getByText("Button")
    userEvent.click(button)
    expect(onClick).toBeCalled()
  })

  it("should not calls onClick when button is clicked if it's disabled", ()=>{
    render(<Button onClick={onClick} disabled>{"Button"}</Button>)
    const button = screen.getByText("Button")
    userEvent.click(button)
    expect(onClick).not.toBeCalled()
  })
})