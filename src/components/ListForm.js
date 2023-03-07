import React, {useState, useEffect, useRef} from 'react'

function ListForm(props) {
    const [name, setName] = useState(props.edit ? props.edit.name : '')
    const [rank, setRank] = useState(props.edit ? props.edit.rank : '')

    const nameChange = e => {
        setName(e.target.value);
    }

    const rankChange = e => {
        setRank(e.target.value);
    }

    const submit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: name,
            rank: rank
        })

        setName('')
        setRank(0)
    }

    return (
        <form className='list-form' onSubmit={submit}>
            {props.edit ? 
            (<>
                <input
                    type='text'
                    placeholder="Drink"
                    value={name}
                    name="text"
                    className="drink-input edit"
                    onChange={nameChange} 
                />
                <div className="range-slider edit">
                    <input
                        type='number'
                        placeholder="1-10"
                        value={rank}
                        className="drink-rank"
                        onChange={rankChange}
                        min="0"
                        step="0.25"
                        max="10" 
                    />
                    <span className="range-slider-value">/10</span>
                </div>
                <button onClick={submit} className="list-button edit">Update</button></>
            ) : (<>
                <input
                    type='text'
                    placeholder="Drink"
                    value={name}
                    name="text"
                    className="drink-input"
                    onChange={nameChange} 
                />
                <div className="range-slider">
                    <input
                        type='number'
                        placeholder="1-10"
                        value={rank}
                        className="drink-rank"
                        onChange={rankChange}
                        min="0"
                        step="0.25"
                        max="10" 
                    />
                    <span className="range-slider-value">/10</span>
                </div>
                <button onClick={submit} className="list-button">Add</button></>
            )}
        </form>
    )
}

export default ListForm