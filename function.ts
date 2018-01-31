let myArray:Array<string>= [];
function addTask(task:string):number{
    myArray.push(task);
    console.log("Item added " + task)
    return myArray.length;
}
function listAllTasks()
{
    //for (leti =0 ; i=myArray.length;i++)
    for(let item of myArray)
    {
        console.log(item)
    }
}

function deleteTask(task:string):number{
    let index :number = myArray.indexOf(task);
    if (index > -1)
    {
        myArray.splice(index,1);
        console.log("Item deleted " + task)
    }
    
    return myArray.length;
}
addTask("WELCOME HOME " + "WAHEED")
addTask("BUDDY.... ")
listAllTasks()
deleteTask("HOME")
listAllTasks()