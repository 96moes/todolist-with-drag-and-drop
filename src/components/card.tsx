import React from 'react';
import {Todo} from "../models/models";
// import "./card.css";
// import { AiFillEdit, AiFillDelete } from "react-icons/ai";
// import { MdDone } from "react-icons/md";
import {Draggable} from 'react-beautiful-dnd';
interface cardInputProp {
  todo: Todo;  
  index: number;
}
export default function Card ({todo,index}: cardInputProp){
  return(
    <Draggable draggableId={todo.id} index={index}>
      {(provided, snapshot)=>(
        <div 
          className="flex justify-center bg-indigo-400 m-1 rounded" 
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h2 className="p-2 " >{todo.todo}</h2>
        </div>
        )}
      
    </Draggable>
  )}
        