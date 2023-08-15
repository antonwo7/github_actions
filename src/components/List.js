import React, {useContext, useState} from 'react'
import {Context} from '../context'
import {Item} from "./Item";

export const List = () => {

    const context = useContext(Context);

    if(!context.state.length){
        return <h3>Empty!</h3>
    }

    return (
        <>
            <ul>
                {context.state.map( (item) => <Item key={item.id} item={item} /> )}
            </ul>
        </>
    )
}