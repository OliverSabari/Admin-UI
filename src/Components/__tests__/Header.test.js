import { getByTestId, render } from "@testing-library/react"
import Header from "../Header"


test("Heading should be present on rendering header" , () => {
    
    const header = render(<Header/>)
    
    const heading = header.getByTestId("heading")

    expect(heading.innerHTML).toBe("Admin UI")
})