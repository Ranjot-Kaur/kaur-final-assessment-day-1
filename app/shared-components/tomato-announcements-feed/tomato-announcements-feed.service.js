//Add your code here.
(function() {
    'use strict';

    angular
        .module('app')
        .factory('tomatoAnnouncementsFeedService', tomatoAnnouncementsFeedService);

        tomatoAnnouncementsFeedService.$inject = [];

    function tomatoAnnouncementsFeedService() {
        var service = {
            announcementsData: announcementsData
        };

        return service; 

        function announcementsData(announcements,owners) {
            console.log(announcements);
            var annArray = announcements;
            var ownerArray = owners;
            for(var i=0;i<annArray.length;i++){
                var j=0;
                for(j=0;j<ownerArray.length;j++){
                    if(annArray[i].OwnerID == ownerArray[j].ID){
                        annArray[i].ownerName = (ownerArray[j].Title);
                    }
                }
            }
            return annArray;
        }
    }
})();