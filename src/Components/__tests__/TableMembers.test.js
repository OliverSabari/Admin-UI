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

test("Checkbox on the top left should be the shortcut to select or deselect all displayed rows" ,async () => {

    const body = render(
        <Provider store={store}>
            <Body />
        </Provider>
    )

    await (waitFor(() => expect(screen.getByTestId("searchBar"))))

    const selectAllcheck1 = body.getByTestId("selectAllcheck1")

    fireEvent.click(selectAllcheck1)

    const allChecks = body.getAllByRole("checkbox")

    for(let i=0;i<allChecks.length;i++){
       
        expect(allChecks[i].checked).toBe(true)
    }

})

test("Checkbox on the top left should only apply to the ten rows displayed in the current page, and not all 50 rows" , async () => {

    const body = render(
        <Provider store={store}>
            <Body />
        </Provider>
    )

    await (waitFor(() => expect(screen.getByTestId("searchBar"))))

    const selectAllcheck1 = body.getByTestId("selectAllcheck1")

    fireEvent.click(selectAllcheck1)

    const pageButton = body.getByTestId("pageButton2")

    fireEvent.click(pageButton)

    const allChecks = body.getAllByRole("checkbox")

    for(let i=0;i<allChecks.length;i++){
    
        expect(allChecks[i].checked).toBe(false)
    }

})