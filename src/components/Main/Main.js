import Task from '../Task/Task';
import styles from './Main.module.css';
import React from 'react';

const Main = ({tasksArray,setTasksArray,setEditTextTask,editTextTask}) => {
    let start = 0;
    let end = 0;
    const dragStartFunction = (dC) =>{
        
        tasksArray.map((elem,ind)=>{
            if(elem.dateCreation === dC){
                start = ind;
            }
        });
        
    }
    const dragOverFunction = (e,dC) =>{
        
        e.preventDefault();
    }
    const dropFunction = (dC)=>{
        
        tasksArray.map((elem,ind)=>{
            if(elem.dateCreation === dC){
                end = ind;
            }
        });

        

        let newTasksArr = [...tasksArray];
        
        for(let i=0;i< newTasksArr.length;i++){
            if(i ===start){
                let h = newTasksArr[i];
                newTasksArr[i] = newTasksArr[end];
                newTasksArr[end] = h;
            }
        }
        setTasksArray([...newTasksArr]);
    }



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
            <Task dragStartFunction={dragStartFunction} dragOverFunction={dragOverFunction} dropFunction={dropFunction} changeStyleP={changeStyleP} checked={elem.checked} editInputTaskDone={editInputTaskDone} editInputTask={editInputTask} edit={elem.edit} editElement={editElement} deleteElement={deleteElement} key={elem.dateCreation} tasksArray={tasksArray} setTasksArray={setTasksArray} id={index} task = {elem.task} dateCreation={elem.dateCreation}/>
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