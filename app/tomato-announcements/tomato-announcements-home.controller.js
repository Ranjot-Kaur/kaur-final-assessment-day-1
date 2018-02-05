// Add your code here
(function() {
    'use strict';
    angular
    .module('app')
    .controller('TomatoAnnouncementController', TomatoAnnouncementController);

    TomatoAnnouncementController.$inject = [
    '$scope', 'restService', '$q'
];

function TomatoAnnouncementController($scope, restService, $q) {

    var vm = this;
    initializeData();
    vm.loading = false;

    
    $q.all([
        getAllAnnouncements(),
        getAllAnnouncementOwners()
    ]).then( initializeData);

    function initializeData(){   
        vm.loading = true;
    }

    function getAllAnnouncements() {
        return restService.getAllAnnouncements().then(function(announcements) {
            vm.announcements = announcements;
        });
    }

    function getAllAnnouncementOwners() {
        return restService.getAllAnnouncementOwners().then(function(owners) {
            vm.owners = owners;
        });
    }

}

})();