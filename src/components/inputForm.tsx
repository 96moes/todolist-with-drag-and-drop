import React from 'react';
import {Todo} from '../models/models';
import {v4 as uuidv4} from 'uuid';
interface InputProp{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    unStartedTodoState:Todo[];
    setUnStartedTodoState:React.Dispatch<React.SetStateAction<Todo[]>>;
}
function InputForm({todo, setTodo, unStartedTodoState, setUnStartedTodoState}:InputProp){
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) : void => {
        setTodo(e.target.value);
    }
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) : void => {
        e.preventDefault();
        let newId = uuidv4();
        let newTodo : Todo = {
            id: newId,
            todo: todo,
            status: "Unstarted",
        }
        setUnStartedTodoState(
            [...unStartedTodoState, newTodo]
        )
    }
    return(
        <div className='p-5'>
            <input 
                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="your todo"
                onChange={handleChange}
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleClick}
            >Add Todo</button>
        </div>
    )
}
export default InputForm;