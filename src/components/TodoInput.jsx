// eslint-disable-next-line no-unused-vars
import { useState } from "react"

export default function TodoInput(props){
    // eslint-disable-next-line react/prop-types
    const {handleAddTodos, todoValue, setTodoValue} = props
    return(
        <header>
            <input value={todoValue} 
            onChange={(e)=>{
                setTodoValue(e.target.value)
            }}
            placeholder="Enter todo..."/>
            <button onClick={()=>{
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}