"use strict";
var myArray = [];
function addTask(task) {
    myArray.push(task);
    console.log("Item added " + task);
    return myArray.length;
}
function listAllTasks() {
    //for (leti =0 ; i=myArray.length;i++)
    for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
        var item = myArray_1[_i];
        console.log(item);
    }
}
function deleteTask(task) {
    var index = myArray.indexOf(task);
    if (index > -1) {
        myArray.splice(index, 1);
        console.log("Item deleted " + task);
    }
    return myArray.length;
}
addTask("WELCOME HOME " + "WAHEED");
addTask("BUDDY.... ");
listAllTasks();
deleteTask("HOME");
listAllTasks();
