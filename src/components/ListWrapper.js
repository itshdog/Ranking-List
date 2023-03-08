import React, {useState} from 'react'
import ListForm from './ListForm'
import { TiEdit, TiDelete } from 'react-icons/ti'

const ListWrapper = ({items, editItem, removeItem}) => {
    const [edit, setEdit] = useState({
        id: null,
        text: '',
        rank: 0
    })

    const submitEdit = newItem => {
        editItem(edit.id, newItem)
        setEdit({
            id: null,
            text: '',
            rank: 0
        })
    }

    if (edit.id) {
        return <ListForm edit={edit} onSubmit={submitEdit} />
    }

    return items.sort((a, b) => (b.rank - a.rank)).map((item, index) => (
        <div className={'item-row'} key={index}>
            <div key={item.id} className="item-text">
                {item.text}
            </div>
            <div className="item-info">
                <div className="rank">
                    {item.rank.replace(/^0+/, '')}/10
                </div>
                <div className="icons">
                    <TiEdit 
                    onClick={() => setEdit({id: item.id, name: item.text, rank: item.rank})}
                    className = 'edit-icon'
                    />
                    <TiDelete 
                    onClick={() => removeItem(item.id)}
                    className = 'delete-icon'
                    />
                </div>
            </div>
        </div>
    ))
}

export default ListWrapper