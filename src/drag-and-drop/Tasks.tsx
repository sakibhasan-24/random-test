import { useState } from "react"
import type { DataModel } from "./DataModel"
import { taskData } from "./TaskData"
/* 
    how can i work on drag and drop functionality in react
       1.i need drag starting point and ending point
       2.if no starting or ending point or if starting point and ending point is same 
       then i need to show error/ just return
       3.if starting point and ending point is different then i need to swap the data
       4.if i swap the data then i need to update the state
       5.if i update the state then i need to re-render the component
       6.if i re-render the component then i need to show the updated data
       7.for this i need to grab each list by unique way,here it is index

*/

export default function Tasks() {
    const [tasks,setTasks]=useState<DataModel[]>(taskData);
    // console.log(tasks)
    const [dragIndex,setDragIndex]=useState<number>(-1);

    const handleDragStart=(e:React.DragEvent<HTMLLIElement>,index:number)=>{
        console.log(index)
        setDragIndex(index)
    }
    
  return (
    <div>
    <h1 className="text-3xl my-6 font-bold ">Tasks...</h1>
    <ul>
      {tasks.map((task, index) => (
        <li onDragStart={(e)=>handleDragStart(e,index)} key={task.id} draggable className="my-4">
          {index + 1}. {task.title}
        </li>
      ))}
    </ul>

    </div>
  )
}
