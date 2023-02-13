import React, { useState } from 'react'

const initialTodos=[{id:1,text:"hi"},{id:2,text:"hello"}];

export default function Todos() {
 const [text, settext] = useState("")
  return (
    <>
        <input type="text" onChange={(e)=>{
settext(e.target.value);
}}/>
        <button onClick={()=>{
            text?initialTodos.push({id:Math.random(),text:text}):console.log("hi");
            settext("");
        }}>Add</button>
        {initialTodos.map((item)=>{
           return <h1>{item.id}, {item.text} , <button id={item.id} onClick={(e)=>{
            // e.preventDefault();
            initialTodos.filter((todo)=>{if(e.target.id!==todo.id){
return todo
}});
           }}>remove</button></h1>
        })}
    </>
  )
}
