// Add your code here, create additional directives if needed.
(function() {
    'use strict';
 
    angular
        .module('app')
        .directive('tomatoAnnouncementsFeed', tomatoAnnouncementsFeed);
 
    function tomatoAnnouncementsFeed() {
        var directive = {
            scope: {
                announcements: '<',
                owners: '<'
            },            
            restrict: 'E',
            controller: tomatoAnnouncementsController,
            bindToController: true,
            controllerAs: 'vm',           
            templateUrl: './app/shared-components/tomato-announcements-feed/tomato-announcements-feed.directive.html'
        };
 
        return directive;
    }
 
    tomatoAnnouncementsController.$inject = ['tomatoAnnouncementsFeedService'];
 
    function tomatoAnnouncementsController(tomatoAnnouncementsFeedService) {        
        var vm = this; 

        //fetchData();
        getOwnerNames();

        function fetchData(){
            console.log(vm.announcements);
            console.log(vm.owners);  
        } 

        function getOwnerNames(){
            vm.announcements = tomatoAnnouncementsFeedService.announcementsData(vm.announcements,vm.owners);
        }

        
    }
 })();