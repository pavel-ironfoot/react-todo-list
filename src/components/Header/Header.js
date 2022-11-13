import styles from './Header.module.css';
import React from 'react';

const Header = ({textTask, setTextTask, tasksArray, setTasksArray}) => {

    const inputTextFunc=(e)=>{
        setTextTask(e.target.value);
    }
    const addTaskFunction = () =>{
        let date = new Date().toLocaleString();
        let newTaskElement = {
            dateCreation:date,
            task:textTask,
            edit:false,
            checked:true,
        };
        setTasksArray([...tasksArray,newTaskElement,]);
        setTextTask('');
    }
    const addBlockTask = (e) =>{
        if(e.key === 'Enter'){
            let date = new Date().toLocaleString();
            let newTaskElement = {
                id:'',
                dateCreation:date,
                task:textTask,
                edit:false,
                checked:true,
            };
            setTasksArray([...tasksArray,newTaskElement,]);
            setTextTask('');
        }
    }
    const abcSortFunction = () =>{
        if(tasksArray[0].task < tasksArray[1].task){
            setTasksArray([...tasksArray.sort((a,b)=>a.task < b.task ? 1 : -1)]); 
        }else{
            setTasksArray([...tasksArray.sort((a,b)=>a.task > b.task ? 1 : -1)]); 
        }
    }
    const dateSortFunction = () =>{
        if(tasksArray[0].dateCreation < tasksArray[1].dateCreation){
        setTasksArray([...tasksArray.sort((a,b)=>a.dateCreation < b.dateCreation ? 1 : -1)]); 
        }else{
            setTasksArray([...tasksArray.sort((a,b)=>a.dateCreation > b.dateCreation ? 1 : -1)]);
        }
    }

    return (
        <div>
            <h1>To Do List (Task List)</h1>
            <hr  />
            <button onClick={abcSortFunction}>Abc Sort</button>
            <button onClick={dateSortFunction}>Date Sort</button>
            <br />
            <input placeholder='enter your task...' onChange={inputTextFunc} onKeyDown={addBlockTask} type="text" value={textTask} className={styles.headerH1} />
            <button onClick={addTaskFunction}>Add Task</button>
        </div>
    );
}
export default Header;