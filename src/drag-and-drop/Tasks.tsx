import { useState } from "react"
import type { DataModel } from "./DataModel"
import { taskData } from "./TaskData"


export default function Tasks() {
    const [tasks,setTasks]=useState<DataModel[]>(taskData);
    // console.log(tasks)
  return (
    <div>
    <h1 className="text-3xl my-6 font-bold ">Tasks...</h1>
    <ul>
      {tasks.map((task, index) => (
        <li key={task.id} draggable className="my-4">
          {index + 1}. {task.title}
        </li>
      ))}
    </ul>

    </div>
  )
}
