import type { dataModel } from './data-model';
export const groupData = (data: dataModel[]) => {
    /* 
       [
            {
                category:"fruit",
                items:["apple","banana","mango"]
            }
       ]
    
    */
   let result: any[] = [];
   data.forEach((item) => {
        //find the index 
        let index=result.findIndex((i) => i.category === item.category);
        console.log(index);
        //if not found then add the category and items
        if(index === -1){
            result.push({
                category:item.category,
                items:[item.name]
            })
        }
        //if found then add the item to the items array
        else{
            result[index].items.push(item.name);
        }
   })
   return result;
}