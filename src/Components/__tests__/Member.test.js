import { render, waitFor, screen, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../Utils/store"
import '@testing-library/jest-dom'
import { MEMBERS_DATA } from "../../Utils/mockData"
import Body from "../Body"


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MEMBERS_DATA)
    })
})


test("User should be able to select one or more rows",async () => {

    const body = render(
        <Provider store={store}>
            <Body />
        </Provider>
    )

    await (waitFor(() => expect(screen.getByTestId("check1"))))

    const checkButton1 = body.getByTestId("check1")

    const checkButton2 = body.getByTestId("check2")

    //firing event on 2 checkbuttons and checking whether both checked attribute is true or not. 
    //This confirms whether user should be able to select one or more rows.

    fireEvent.click(checkButton1)

    fireEvent.click(checkButton2)

    expect(checkButton1.checked).toBe(true)

    expect(checkButton2.checked).toBe(true)

})

test("A selected row must be highlighted with a grayish background color",async () => {

    const body = render(
        <Provider store={store}>
            <Body />
        </Provider>
    )

    await (waitFor(() => expect(screen.getByTestId("check1"))))

    const checkButton1 = body.getByTestId("check1")

    const row1 = body.getByTestId("row1")

    expect(row1.classList.contains("noDataBackground")).toBe(true)

    fireEvent.click(checkButton1)

    expect(row1.classList.contains("dataBackground")).toBe(true)
})

// global.fetch = jest.fn(() => {
//     return Promise.resolve({
//         json: () => Promise.resolve(MEMBERS_DATA)
//     })
// })


test("User should be able to edit rows in place",async () => {

    const body = render(
        <Provider store={store}>
            <Body />
        </Provider>
    )

    await (waitFor(() => expect(screen.getByTestId("edit1"))))

    const editName = body.getByTestId("edit1")

    fireEvent.click(editName)

    const memberName = body.getByTestId("name1")

    fireEvent.change(memberName,{
        target: {
            value: "sabari"
        }
    } )

    const okayButton = body.getByTestId("okayButton1")

    fireEvent.click(okayButton)

    expect(memberName.value).toBe("sabari")

})

window.confirm = jest.fn(() => true)

test("Multiple selected rows can be deleted at once using the 'Delete Selected' button at the bottom left",async () => {

    const body = render(
        <Provider store={store}>
            <Body />
        </Provider>
    )

    await (waitFor(() => expect(screen.getByTestId("row1"))))

    const checkButton1 = body.getByTestId("check1")

    const checkButton2 = body.getByTestId("check2")

    fireEvent.click(checkButton1)

    fireEvent.click(checkButton2)

    expect(checkButton1).toBeInTheDocument()

    expect(checkButton2).toBeInTheDocument()

    const multipleDeleteButton = body.getByTestId("multipleDelete")

    fireEvent.click(multipleDeleteButton)

    expect(checkButton1).not.toBeInTheDocument()

    expect(checkButton2).not.toBeInTheDocument()

}) 

