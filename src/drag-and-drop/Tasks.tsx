import { useEffect, useState } from "react"
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
    const handleDragOver =(e:React.DragEvent<HTMLLIElement>)=>{
        // console.log("drag over")
        e.preventDefault();
    }
    //swap data
    const handleDragSwapData=(index:number)=>{
        if(dragIndex===-1) return ;
        const tempData=[...tasks];
        // console.log(tempData)
        const [curr]= tempData.splice(dragIndex,1);
        // console.log(curr)
        tempData.splice(index,0,curr);
        setTasks(tempData)
        setDragIndex(-1)
    }
  return (
    <div>
    <h1 className="text-3xl my-6 font-bold ">Tasks...</h1>
    <ul>
      {tasks.map((task, index) => (
        <li onDragStart={(e)=>handleDragStart(e,index)} onDragOver={(e)=>handleDragOver(e)} 
        onDrop={(e)=>handleDragSwapData(index)}
        key={task.id} draggable className="my-4">
          {index + 1}. {task.title}
        </li>
      ))}
    </ul>

    </div>
  )
}
