(function() {
	"use strict";

	angular
		.module("app.shared-services")
		.factory("mockRestService", mockRestService);

	mockRestService.$inject = ["$http", "$q"];

	function mockRestService($http, $q) {

		var service = {
            getListItems: getListItems
		};

		return service;

		function getListItems(listTitle, queryParams) {
            var dfd = $q.defer();
            $http.defaults.headers.post['X-HTTP-Method'] = "";
            var restUrl = "../_api/web/lists/getbytitle('" + listTitle + "')/items" + queryParams;
            $http.get(restUrl).success(function(data) {
                dfd.resolve(data.d.results);
            }).error(function(data) {
                dfd.reject("error, cannot get items"); 
            });
            return dfd.promise;
		}

	}
})();


/* ************** PART II EXERCISE**************  */

/*Example Rest Call to get all items from the WorkPlan List*/

/* 
	INSERT FUNCTION HERE:
	function getAllItems() {

		var queryParams = {
			Select: *
		}
		mockRestService.getListItems('WorkPlan', queryParams).then(function(response) {
			return response;
		})
	}

	ANTICIPATED DATA FORMAT: 
	{
		DATA: FORMAT,
		INSERT: HERE
	}
*/

/*************** INSERT ANSWERS BELOW IN THE COMMENTED AREA**************


	 function getRaidData() {
            return mockRestService.getListItems("Risks and Issues", {
                select: "ID,Title,Function/ID,Description,item%20Owner/Title,
                expand: "Function,item%20Owner,
                top: 500,
                filter: "Issue%20Risk%20Category eq 'HighRisk'"
            }).then(getRaidInfo);

            function getRaidInfo(response) {
                return response;
            }
		}
		
		function getWorkPlanData() {
            return mockRestService.getListItems("Work Plan", {
                select: "ID,Task%20Owner,Function/ID,Work%20Plan%20Task%20Type,Work%20Plan%20Task%20Status/Title,Due%20Date,
                expand: "Function,Work%20Plan%20Task%20Status,
                top: 2000,
                orderby:"Due%20Date"
            }).then(getWorkPlanInfo);

            function getWorkPlanInfo(response) {
                return response;
            }
        }











































 */