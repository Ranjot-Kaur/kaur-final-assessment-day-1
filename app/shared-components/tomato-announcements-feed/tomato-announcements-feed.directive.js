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
 
    tomatoAnnouncementsController.$inject = ['tomatoAnnouncementsFeedService','$filter'];
 
    function tomatoAnnouncementsController(tomatoAnnouncementsFeedService,$filter) {        
        var vm = this; 
        vm.type = 'All';

        //fetchData();
        getOwnerNames();

        function fetchData(){
            console.log(vm.announcements);
            console.log(vm.owners);  
        } 

        function getOwnerNames(){
            vm.announcements = tomatoAnnouncementsFeedService.announcementsData(vm.announcements,vm.owners);
            vm.announcementsData = angular.copy(vm.announcements);
        }
        var titleArray = _.map(vm.announcements, function(d) { return d.Type.Title});
        vm.types = _.uniq(titleArray);
        vm.types.unshift('All');

        vm.filterOnType = function(){
            var announcementsClone = angular.copy(vm.announcementsData);
            console.log(vm.type);
            if(vm.type!='All'){
                vm.announcements = $filter("filter")(announcementsClone,{Type:{Title:vm.type}});
            }else{
                vm.announcements = angular.copy(vm.announcementsData);
            }            
        }
        
        
    }
 })();