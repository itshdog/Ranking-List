import React, {useState, useEffect} from 'react'
import ListForm from './ListForm'
import ListWrapper from './ListWrapper'

function List() {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);

    const addItem = item => {
        if(!item.text || /^\s*$/.test(item.text)) {
            console.log("Error: name input is not valid. No changes made");
            return;
        }
        if(item.rank === null || item.rank === '' || item.rank > 10 || item.rank < 0) {
            console.log("Error: rank input is not valid. No changes made");
            return;
        }

        const newItems = [item, ...items]

        // newItems.sort((a, b) => (b.rank - a.rank));

        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems));
        // console.log(item, ...items);
    };

    const removeItem = e => {
        const removeArr = [...items].filter(item => item.id !== e)

        setItems(removeArr);
        localStorage.setItem('items', JSON.stringify(removeArr));
    };

    const editItem = (itemId, newItem) => {
        if(!newItem.text || /^\s*$/.test(newItem.text)) {
            console.log("Error: name input is not valid. No changes made");
            return;
        }
        if(newItem.rank === null || newItem.rank === '') {
            console.log("Error: rank input is not valid. No changes made");
            return;
        }
        // setItems(prev => prev.map(e => (e.id === itemId ? newItem : e)));
        updateItems(itemId, newItem);
    };

    function updateItems(itemId, newItem) {
        const updatedItems = items.map(item => (item.id === itemId ? newItem : item));
        setItems(updatedItems);
        localStorage.setItem('items', JSON.stringify(updatedItems));
    }

    return (
        <div>
            <h1>Ranked List</h1>
            <ListForm onSubmit={addItem} />
            <ListWrapper 
                items={items} 
                removeItem={removeItem} 
                editItem={editItem}
            />
        </div>
    );
}

export default List