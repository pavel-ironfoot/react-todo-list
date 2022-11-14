import styles from './Task.module.css';

const Task = ({dragStartFunction,dragOverFunction,dropFunction,changeStyleP,checked,dateCreation,task,id,deleteElement,editElement,edit,editInputTaskDone,editInputTask}) => {



    return (
        <div draggable={true} onDragStart={()=>dragStartFunction(dateCreation)} onDragOver={(e)=>dragOverFunction(e,dateCreation)} onDrop={()=>dropFunction(dateCreation)} className={styles.Task} key={dateCreation}>
            <p>{id+1}</p>
            <p>{dateCreation}</p>
            {edit?<input type="text" onChange={editInputTask} placeholder={task}/>:<p onClick={()=>changeStyleP(dateCreation)} className={checked?styles.normP:styles.checkedP}>{task}</p>}
            {edit?<button onClick={()=>editInputTaskDone(dateCreation)}>done</button>:<div>
                    <div><button onClick={()=>deleteElement(dateCreation)}>delete</button></div>
                    <div><button onClick={()=>editElement(dateCreation)}>edit</button></div>
                </div>}
        </div>
    );
}
export default Task;