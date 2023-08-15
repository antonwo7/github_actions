import React, {useContext, useReducer} from 'react'
import {Context} from '../context'

export const Item = ({ item }) => {

    const context = useContext(Context);

    const item_classes = ['item']
    item.completed && item_classes.push('done')

    return (

        <li className={item_classes.length && item_classes.join(' ')}>
            <span>{item.id}. {item.title}</span>

            <div className="buttons">
                <button onClick={context.dispatch.bind(null, {type: 'done', payload: item.id})}>Done</button>
                <button onClick={context.dispatch.bind(null, {type: 'delete', payload: item.id})}>Delete</button>
            </div>
        </li>
    )
}