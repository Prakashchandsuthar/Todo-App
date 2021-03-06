/**
 * Created by prakashchandras on 1/27/2015.
 */

angular.module('todo')
    .filter('TodoFilter', [function () {
        var filter = function (array,criteria) {
            var filteredArray=[];
            array.forEach(function(item){
                if(criteria==='All'){
                    filteredArray.push(item);
                }
                else if(criteria==='Active' && item.completed!=true){
                    filteredArray.push(item);
                }
                else if(criteria==='Completed' && item.completed===true){
                    filteredArray.push(item);
                }
            });
            return filteredArray;
        };
        return filter;
    }]);