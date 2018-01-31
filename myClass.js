"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myclass = /** @class */ (function () {
    function myclass() {
        this.myArray = [];
    }
    myclass.prototype.addTask = function (task) {
        this.myArray.push(task);
        console.log("Item added " + task);
        return this.myArray.length;
    };
    myclass.prototype.listAllTasks = function () {
        //for (leti =0 ; i=myArray.length;i++)
        for (var _i = 0, _a = this.myArray; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item);
        }
    };
    myclass.prototype.deleteTask = function (task) {
        var index = this.myArray.indexOf(task);
        if (index > -1) {
            this.myArray.splice(index, 1);
            console.log("Item deleted " + task);
        }
        return this.myArray.length;
    };
    return myclass;
}());
var newclass = new myclass();
newclass.addTask("WELCOME");
newclass.listAllTasks();
newclass.deleteTask("WELCOME");
