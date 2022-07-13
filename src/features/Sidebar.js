import { useDispatch, useSelector } from "react-redux"
import Spinner from "../components/Spinner"
import { selectAllLists } from "./allListsSlice"
import { setCurrentList } from "./currentListSlice"



export default function Sidebar(props) {

    const dispatch = useDispatch()
    const allLists = useSelector(selectAllLists)
    const status = useSelector(state => state.allLists.status)


    const setCurrentListHandler = newCurrentList => {
        dispatch(setCurrentList(newCurrentList))
    }

    if (status === 'loading') {
        return <Spinner />
    }

    return (
        <nav className='sidebar'>
            <ul>
                {
                    allLists.map(list => {
                        const { title, color, _id } = list
                        return <ListTitleTile
                            key={_id}
                            _id={_id}
                            color={color}
                            title={title}
                            onClickHandler={
                                () => { setCurrentListHandler(list) }
                            } />
                    })
                }
            </ul>
        </nav>
    )
}

function ListTitleTile(props) {
    const { _id, color, onClickHandler, title } = props

    return <a onClick={e => {e.preventDefault(); onClickHandler()}} href=''>
        <li id={_id} style={{ background: color }}>{title}</li>
    </a>
}