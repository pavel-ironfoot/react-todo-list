import Task from '../Task/Task';
import styles from './Main.module.css';
import React from 'react';

const Main = ({tasksArray,setTasksArray,setEditTextTask,editTextTask}) => {
    const changeStyleP = (dateCreation) => {
        setTasksArray([...tasksArray.map((elem)=>{
            if(elem.dateCreation === dateCreation){
                elem.checked = !elem.checked;
                return elem;
            }else{
                return elem;
            }
        })]);
    }
    const deleteElement = (dateCreation)=>{
        setTasksArray([...tasksArray.filter((elem)=>elem.dateCreation!==dateCreation)]);
        console.log();
    }
    const editElement = (dateCreation)=>{
        setTasksArray([...tasksArray.map((elem)=>{
            if(elem.dateCreation === dateCreation){
                elem.edit = !elem.edit;
                return elem;
            }else{
                return elem;
            }
        })]);
    }
    const editInputTask= (e)=>{
        setEditTextTask(e.target.value);
    }
    const editInputTaskDone =(dateCreation)=>{   
            setTasksArray([...tasksArray.map((elem)=>{
                if(elem.dateCreation === dateCreation){
                    elem.task = editTextTask;
                    elem.edit = !elem.edit;
                    return elem;
                }else{
                    return elem;
                }
            })]);
    }
    let myTasks = tasksArray.map((elem,index) =>{
        return (
            <Task changeStyleP={changeStyleP} checked={elem.checked} editInputTaskDone={editInputTaskDone} editInputTask={editInputTask} edit={elem.edit} editElement={editElement} deleteElement={deleteElement} key={elem.dateCreation} tasksArray={tasksArray} setTasksArray={setTasksArray} id={index} task = {elem.task} dateCreation={elem.dateCreation}/>
        )
    });
    return (
        <main>
            <h1>My Tasks: {tasksArray.length}</h1>
            <hr />
            {myTasks}
        </main>
);
}
export default Main;