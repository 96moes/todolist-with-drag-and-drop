import React from 'react';
import {Todo} from '../models/models';
import { Droppable } from 'react-beautiful-dnd';
import Card from "./card";
// import './showItem.css';
interface InputProp{
    unStartedTodoState:Todo[];
    setUnStartedTodoState:React.Dispatch<React.SetStateAction<Todo[]>>;
    startedTodoState:Todo[];
    setStartedTodoState:React.Dispatch<React.SetStateAction<Todo[]>>;
    finishedTodoState:Todo[];
    setFinishedTodoState:React.Dispatch<React.SetStateAction<Todo[]>>;



}
export default function ShowItem({unStartedTodoState, setUnStartedTodoState, startedTodoState, setStartedTodoState, finishedTodoState, setFinishedTodoState}:InputProp){
    
    
;    return(
        <div className="grid grid-cols-3 gap-1 justify-evenly">
            <div className="bg-green-600 h-8 pt-1 rounded ml-1">Unstarted</div> 
            <div className="bg-green-500 h-8 pt-1 rounded">Srarted</div> 
            <div className="bg-green-400 h-8 pt-1 rounded mr-1">Finished</div> 
            <Droppable droppableId="unStartedColumn" >
                {(provided, snapshot) => {
                    return(
                        <div 
                        id="un"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                            {unStartedTodoState.map((todo, index) => (
                                <Card todo={todo} index={index} key={todo.id}/>
                            ))}
                        {provided.placeholder}
                        </div>
                    )
                }}
            </Droppable>
            <Droppable droppableId="startedColumn">
            {(provided, snapshot) => {
                    return(
                        <div
                        id="st"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                            {startedTodoState.map((todo, index) => (
                                <Card todo={todo} index={index} key={todo.id}/>
                            ))}
                        {provided.placeholder}
                        </div>
                    )
                }}
            </Droppable>
            <Droppable droppableId="finishedColumn">
            {(provided, snapshot) => {
                    return(
                        <div
                        id="do"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                            {finishedTodoState.map((todo, index) => (
                                <Card todo={todo} index={index} key={todo.id}/>
                            ))}
                        {provided.placeholder}
                        </div>
                    )
                }}
            </Droppable>
        </div>
    )
}