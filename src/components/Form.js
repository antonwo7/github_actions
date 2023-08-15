import React, {useContext, useState} from 'react'
import {Context} from '../context'

export const Form = ({addItem}) => {

    const context = useContext(Context);

    const [value, setValue] = useState('')

    const addHandler = () => {
        context.dispatch({
            type: 'add',
            payload: value
        })
        setValue('')
    }

    return (
        <form>
            <input onChange={ (event) => setValue.call(null, event.target.value)} type="text" value={value}/>
            <button onClick={addHandler} type="button" role="add">Add</button>
        </form>
    )
}