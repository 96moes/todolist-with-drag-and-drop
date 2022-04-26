import React from 'react';
import './App.css';
import { DragDropContext ,DropResult} from 'react-beautiful-dnd';
import { useState } from 'react';
import {Todo} from "./models/models";
import InputForm from "./components/inputForm";
import ShowItem from "./components/showItem";
function App() {
  const [todo, setTodo] = useState<string>("");
  const [unStartedTodoState, setUnStartedTodoState] = useState<Array<Todo>>([]);
  const [startedTodoState, setStartedTodoState] = useState<Array<Todo>>([]);
  const [finishedTodoState, setFinishedTodoState] = useState<Array<Todo>>([]);
  const onDragEnd = (result: DropResult)=>{
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    if ( destination.droppableId === source.droppableId ){
      if(destination.index === source.index)
        {
      return;
      }
      else {
        if(source.droppableId === "unStartedColumn"){
          let copyarr = unStartedTodoState;
          let changeElement = copyarr[source.index];
          copyarr.splice(source.index,1);
          copyarr.splice(destination.index,0,changeElement);
          setUnStartedTodoState(copyarr);
        }
        else if(source.droppableId === "startedColumn"){
          let copyarr = startedTodoState;
          let changeElement = copyarr[source.index];
          copyarr.splice(source.index,1);
          copyarr.splice(destination.index,0,changeElement);
          setStartedTodoState(copyarr);
        }
        else if(source.droppableId === "finishedColumn"){
          let copyarr = finishedTodoState;
          let changeElement = copyarr[source.index];
          copyarr.splice(source.index,1);
          copyarr.splice(destination.index,0,changeElement);
          setFinishedTodoState(copyarr);
        }
      }
    }
    if (source.droppableId === "unStartedColumn"){
      if (destination.droppableId === "startedColumn"){
        let copyarr = unStartedTodoState;
        let changeElement = copyarr[source.index];
        copyarr.splice(source.index,1);
        setUnStartedTodoState(copyarr);
        changeElement.status = "started";
        let copyarr2 = startedTodoState;
        copyarr2.splice(destination.index,0,changeElement);
        setStartedTodoState(copyarr2);
      }
      else if (destination.droppableId === "finishedColumn"){
        let copyarr = unStartedTodoState;
        let changeElement = copyarr[source.index];
        copyarr.splice(source.index,1);
        setUnStartedTodoState(copyarr);
        changeElement.status = "Finished";
        let copyarr2 = finishedTodoState;
        copyarr2.splice(destination.index,0,changeElement);
        setFinishedTodoState(copyarr2);
      }
      }
    else if (source.droppableId === "startedColumn"){
      if (destination.droppableId === "unStartedColumn"){
        let copyarr = startedTodoState;
        let changeElement = copyarr[source.index];
        copyarr.splice(source.index,1);
        setStartedTodoState(copyarr);
        changeElement.status = "Unstarted";
        let copyarr2 = unStartedTodoState;
        copyarr2.splice(destination.index,0,changeElement);
        setUnStartedTodoState(copyarr2);
      }
      else if (destination.droppableId === "finishedColumn"){
        let copyarr = startedTodoState;
        let changeElement = copyarr[source.index];
        copyarr.splice(source.index,1);
        setStartedTodoState(copyarr);
        changeElement.status = "Finished";
        let copyarr2 = finishedTodoState;
        copyarr2.splice(destination.index,0,changeElement);
        setFinishedTodoState(copyarr2);
      }
      }
    else if (source.droppableId === "finishedColumn"){
      if (destination.droppableId === "unStartedColumn"){
        let copyarr = finishedTodoState;
        let changeElement = copyarr[source.index];
        copyarr.splice(source.index,1);
        setFinishedTodoState(copyarr);
        changeElement.status = "Unstarted";
        let copyarr2 = unStartedTodoState;
        copyarr2.splice(destination.index,0,changeElement);
        setUnStartedTodoState(copyarr2);
      }
      else if (destination.droppableId === "startedColumn"){
        let copyarr = finishedTodoState;
        let changeElement = copyarr[source.index];
        copyarr.splice(source.index,1);
        setFinishedTodoState(copyarr);
        changeElement.status = "Unstarted";
        let copyarr2 = startedTodoState;
        copyarr2.splice(destination.index,0,changeElement);
        setStartedTodoState(copyarr2);
      }
    }
  }
  
  return (
    <div className="App">
      <InputForm
        todo={todo}
        setTodo={setTodo}
        unStartedTodoState={unStartedTodoState}
        setUnStartedTodoState={setUnStartedTodoState}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <ShowItem
          unStartedTodoState={unStartedTodoState}
          setUnStartedTodoState={setUnStartedTodoState}
          startedTodoState={startedTodoState}
          setStartedTodoState={setStartedTodoState}
          finishedTodoState={finishedTodoState}
          setFinishedTodoState={setFinishedTodoState}
        />
        </DragDropContext>
      
    </div>
  );
}

export default App;
