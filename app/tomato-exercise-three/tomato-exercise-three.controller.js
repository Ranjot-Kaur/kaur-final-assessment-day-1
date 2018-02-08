(function() {
    'use strict';

    angular
        .module('app')
        .controller('TomatoExerciseThreeController', TomatoExerciseThreeController);
    
    TomatoExerciseThreeController.$inject = [
        '$scope', 'restService', '$q'
    ];

    function TomatoExerciseThreeController($scope, restService, $q) {
        var vm = this;

        activate();

        function activate() {
            $q.all([
                getExerciseThreeData()
            ]).then(activateComplete);

            function activateComplete(results) {
                vm.data = results[0];
                console.log(vm.data); 
                var result2 = calculateTotalTomatoes();
                var result1 = createFirstFormat(vm.data);
                console.log(result1);
                console.log(result2);
            }
        }

        function getExerciseThreeData() {
            return restService.getExerciseThreeData().then(function(response) {
                return response;
            });
        }

        //Add your code below.

        function calculateTotalTomatoes(){
            var secondObj={};
            _.each(vm.data[0].countries,function(ctry){
                var obj= _.chain(vm.data[3].orders).filter(function(ord){
                   return ord.Countries.ID==ctry.ID
                }).sumBy('Qty').value();
                secondObj['\"'+ctry.Title+'\"']=obj;                
            });
            return secondObj;           
        }

        
        function createFirstFormat(data) {
            var resultData = _(data[3].orders).groupBy('Countries.ID').map(function(item, itemId) {
                var obj = [];
                var countryName = _(data[0].countries).filter({ID: parseInt(itemId)}).value()[0].Title;
                _.forEach(item, function(element) {
                    element['Countries'] = _(data[0].countries).filter({ID: parseInt(itemId)}).value();
                    element['Tomato'] = _(data[1].tomatoes).filter({ID: parseInt(element.Tomato.ID)}).value();
                    element['Status'] = _(data[2].statuses).filter({ID: parseInt(element.Status.ID)}).value();
                });
                obj.push(countryName, item);
                return obj;
            }).fromPairs().value();
            return resultData;     
        }

       


    }
})();
