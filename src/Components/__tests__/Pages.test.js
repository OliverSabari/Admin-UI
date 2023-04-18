import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Body from "../Body"
import { Provider } from "react-redux"
import store from "../../Utils/store"
import { MEMBERS_DATA } from "../../Utils/mockData"
import '@testing-library/jest-dom'


//Mocking the fetch function to resolve the promise
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MEMBERS_DATA)
    })
})

test("Each page should contain 10 rows", async () => {

    const body = render(
        <Provider store={store}>
            <Body />
        </Provider>
    )

    await (waitFor(() => expect(screen.getByTestId("searchBar"))))

    const tableRows = body.getAllByRole("row")

    expect(tableRows.length).toBe(11) //Ten Rows of record + 1 row of table heading


})

test("Buttons at the bottom allow you to jump to any page", async () => {

    const body = render(
        <Provider store={store}>
            <Body />
        </Provider>
    )

    await (waitFor(() => expect(screen.getByTestId("searchBar"))))

    const pageButton = body.getByTestId("pageButton2")

    const memberData = body.getByTestId("name1")

    fireEvent.click(pageButton)  // Once user clicked page2 the first ten records should not be present

    expect(memberData).not.toBeInTheDocument()

})

test("last page should be loaded when user clicks the special last page button", async () => {

    const body = render(
        <Provider store={store}>
            <Body />
        </Provider>
    )

    await (waitFor(() => expect(screen.getByTestId("searchBar"))))

    const lastPageButton = body.getByTestId("lastpage")

    fireEvent.click(lastPageButton)

    const tableRows = body.getAllByRole("row")

    expect(tableRows.length).toBe(7) //Last six Rows of record + 1 row of table heading

    const pageButton = body.getByTestId("pageButton5")

    expect(pageButton.classList.contains("activePage")).toBe(true)   //This makes sure that it has reached last page based on user action
})


test(" If there are 25 records for example that match a search query, then pagination buttons should only go till 3", async () => {

    const body = render(
        <Provider store={store}>
            <Body />
        </Provider>
    )

    await (waitFor(() => expect(screen.getByTestId("searchBar"))))

    const searchButton = body.getByTestId("searchBar")

    fireEvent.change(searchButton, {
        target: {
            value: "s"
        }
    })

    const listOfButtons = body.getByTestId("listOfButtons")

    // After user searches for "s" then 3 pages will be present + 4 special buttons (prev,next,first,last) = 7

    expect(listOfButtons.children.length).toBe(7)

})