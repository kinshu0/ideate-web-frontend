import { useState } from "react"
import { EditableH2 } from "../components/EditableTextfields"
import { ListItem } from "../components/ListItem"
import ListContainer from "./ListContainer"



export function MainBody(props) {
    return (
        <div className='main-body'>
            <ListContainer />
        </div>
    )
}
