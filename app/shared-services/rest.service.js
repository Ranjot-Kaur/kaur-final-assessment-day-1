(function() {
    'use strict';

    angular
        .module('app')
        .factory('restService', restService);
    
    restService.$inject = ['$http'];

    function restService($http) {
        var service = {
            getTomatoes: getTomatoes,
            getFarms: getFarms,
            getExerciseThreeData: getExerciseThreeData,
            getAllAnnouncements: getAllAnnouncements,
            getAllAnnouncementOwners: getAllAnnouncementOwners

        };

        return service;

        function getTomatoes() {
            return $http({
                method: 'GET', 
                url: 'http://localhost:3000/tomatoes'
            }).then(function(response) {
                return response.data;
            });
        }

        function getFarms() {
            return $http({
                method: 'GET',
                url: 'http://localhost:3000/farms'
            }).then(function(response) {
                return response.data;
            });
        }

        function getExerciseThreeData() {
            return $http({
                method: 'GET',
                url: 'http://localhost:3000/exerciseThreeData'
            }).then(function(response) {
                return response.data;
            });
        }
    
        function getAllAnnouncements() {
            return $http({
                method: 'GET',
                url: 'http://localhost:3000/announcements'
            }).then(function(response) {
                return response.data;
            });
        }

        function getAllAnnouncementOwners() {
            return $http({
                method: 'GET',
                url: 'http://localhost:3000/owners'
            }).then(function(response) {
                return response.data;
            });
        }

    }
})();