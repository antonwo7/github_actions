import React, {useEffect, useState, useReducer, createContext} from 'react'
import {List} from "./components/List";
import {Form} from "./components/Form";

import Reducer from "./reducer"
import {Context} from './context'

function App() {

    const [state, dispatch] = useReducer(Reducer, [])

    const getList = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
        const list = await response.json()
        return list
    }

    useEffect( () => {

        (async function(){
            const list = await getList()
            dispatch({
                type: 'init',
                payload: list
            })
        })()

    }, [])

  return (
      <Context.Provider value={{state: state, dispatch: dispatch}}>
          <section>
              <h1>Hello</h1>
              <Form />
              <List />
          </section>
      </Context.Provider>
  );
}

export default App;
