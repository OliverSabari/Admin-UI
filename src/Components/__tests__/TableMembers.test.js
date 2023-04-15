import TableForMembers from "../TableForMembers"
import { render, waitFor, screen, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../Utils/store"
import '@testing-library/jest-dom'
import { MEMBERS_DATA } from "../../Utils/mockData"
import Body from "../Body"

test("Column titles must stand out from the entries" , () => {

    const tableForMembers = render(
        <Provider store={store}>
            <TableForMembers membersData={MEMBERS_DATA}/>
        </Provider>
    )

    const tableHeadingRow = tableForMembers.getAllByRole("columnheader")

    //ColumHeader has default style of font weight bold, so this would make sure that Column titles stands out from the entries
    
    expect(tableHeadingRow.length).toBe(5)

})


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MEMBERS_DATA)
    })
})


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

test("User should be able to delete rows in place",async () => {

    const body = render(
        <Provider store={store}>
            <Body />
        </Provider>
    )

    await (waitFor(() => expect(screen.getByTestId("delete1"))))

    const deleteName = body.getByTestId("delete1")

    const memberName = body.getByTestId("name1")

    fireEvent.click(deleteName)

    expect(memberName).not.toBeInTheDocument()

})
