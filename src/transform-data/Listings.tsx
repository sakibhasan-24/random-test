
import { useState } from "react";
import { dataTransform } from "./data"
import { groupData } from "./helper-group-data";

export default function Listings() {
    const data=dataTransform;
    // console.log(data)
    const items=groupData(data);
    console.log(items)
    const [isOpen,setIsOpen]=useState<{[key:string]:boolean}>({});
    const handleToggle=(key:string)=>{
        setIsOpen((prev)=> ({...prev,[key]:!prev[key]}))
    }

   
  return (
    <div>
        <h1>Products</h1>
        {
            items.map((item,index)=>{
                return(
                    <div key={index}>
                        <h2 className="cursor-pointer" 
                        onClick={()=>handleToggle(item.category)}>{item.category}</h2>
                        <ul className={isOpen[item.category] ? "visible" : "hidden"}>
                            {
                                item.items.map((item:any,index:any)=>{
                                    return(
                                        <li className="m-4" key={index}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            })
        }
    </div>
  )
}
