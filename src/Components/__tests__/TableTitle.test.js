import TableForMembers from "../TableForMembers"
import { render, waitFor, screen, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../Utils/store"
import '@testing-library/jest-dom'
import { MEMBERS_DATA } from "../../Utils/mockData"


test("Column titles must stand out from the entries" , () => {

    const body = render(
        <Provider store={store}>
            <TableForMembers membersData={MEMBERS_DATA}/>
        </Provider>
    )

    console.log(body)

})