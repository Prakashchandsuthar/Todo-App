/**
 * Created by prakashchands on 1/23/2015.
 */

angular.module("todo")
    .service("TodoService",[function(){
        var service = {};

        service.todos=[];
        service.add=function(item){
            this.todos.push(item);

        };

        service.delete=function(item){
            this.todos.splice(this.todos.indexOf(item),1);

        }

        service.clearCompleted=function(){
            for(var index=this.todos.length-1;index>=0;index--){
                if(this.todos[index].completed===true){
                    this.todos.splice(index,1);
                }
            }

        }

        return service;

    }]);

