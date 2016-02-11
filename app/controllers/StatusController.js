myAppModule
		.controller(
				'StatusController',
				[
						'$scope',
						'$http',
						'$location',
						'$rootScope',
						'UtilService',
						'MyService',
						function($scope, $http, $location, $rootScope,
								UtilService, MyService) {

							UtilService.getProjects().then(function(data) {
								$scope.project_list = data;
							});
							UtilService.getActivities().then(function(data) {
								$scope.activity_list = data;
							});
							UtilService.getStatusHistory().then(function(data) {
								$rootScope.statusHistory = data;
							});
							$scope.status = {};
							$scope.fillItems = {};
							$scope.hours = UtilService.getHours();
							$scope.minutes = UtilService.getMinutes();
							$rootScope.dates = UtilService.getDates();

							$scope.status.date = $rootScope.dates[0];
							$scope.status.hour = $scope.hours[8];
							$scope.status.minute = $scope.minutes[0];
							$scope.addItem = function(status) {
								var flag = MyService.saveStatus(status);
								if (flag) {

									fillItems = MyService.setDetails(status);
									console.log(fillItems.date);
									if (fillItems.date == 1) {
										$scope.status.date = $rootScope.dates[fillItems.dateId + 1];
									}
									$scope.status.hour = $scope.hours[fillItems.hours];
									$scope.status.minute = $scope.minutes[fillItems.mints/15];
								}

							};
						} ]);
