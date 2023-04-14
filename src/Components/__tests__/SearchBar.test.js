import { render, waitFor,screen, fireEvent } from "@testing-library/react"
import Body from "../Body"
import { Provider } from "react-redux"
import store from "../../Utils/store"
import { MEMBERS_DATA } from "../../Utils/mockData"
import '@testing-library/jest-dom'


global.fetch = jest.fn(() => {
return Promise.resolve({
    json : () => Promise.resolve(MEMBERS_DATA)
})
})

test("Search Results in homepage",async () => {

    const body = render(
                            <Provider store={store}>
                                <Body/>
                            </Provider>
                        )

    await (waitFor(() => expect(screen.getByTestId("searchBar"))))

    const searchButton = body.getByTestId("searchBar")

    fireEvent.change(searchButton , {
        target : {
            value : "aaron"
        }
    }) 

    const tableBody = body.getByTestId('tableBody')

    expect(tableBody.children.length).toBe(1)
    
})  



test("Error should be displayed when no records matched the Search in homepage",async () => {

    const body = render(
                            <Provider store={store}>
                                <Body/>
                            </Provider>
                        )

    await (waitFor(() => expect(screen.getByTestId("searchBar"))))

    const searchButton = body.getByTestId("searchBar")

    fireEvent.change(searchButton , {
        target : {
            value : "dfsefcv"
        }
    }) 

    const noRecords = body.getByTestId('noRecords')

    expect(noRecords).toBeInTheDocument()
    
})  