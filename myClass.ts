import {myQueue}from "./interface";

class myclass implements myQueue
{
    myArray:Array<string>= [];
    addTask(task:string):number{
    this.myArray.push(task);
    console.log("Item added " + task)
    return this.myArray.length;
}
    listAllTasks()
{
    //for (leti =0 ; i=myArray.length;i++)
    for(let item of this.myArray)
    {
        console.log(item)
    }
}

     deleteTask(task:string):number{
    let index :number = this.myArray.indexOf(task);
    if (index > -1)
    {
        this.myArray.splice(index,1);
        console.log("Item deleted " + task)
    }
    
    return this.myArray.length;
    }
}

let newclass = new myclass();
newclass.addTask("WELCOME");
newclass.listAllTasks();
newclass.deleteTask("WELCOME");