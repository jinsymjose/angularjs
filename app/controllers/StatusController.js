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
							$scope.dates = UtilService.getDates();
							$scope.status.date = $scope.dates[0];
							$scope.status.hour = $scope.hours[8];
							$scope.status.minute = $scope.minutes[0];
							$scope.addItem = function(status) {
								var flag = MyService.saveStatus(status);
								if (flag) {
 $scope.status.project = '';
        $scope.status.activity = '';
 $scope.status.description = '';
									fillItems = MyService.setDetails(status,$scope.dates);
									if (fillItems.date == 1 && fillItems.date != 0) {
										$scope.status.date = $scope.dates[fillItems.dateId -1];
									}else if (fillItems.date == 1 && fillItems.date ==0) {
										$scope.status.date = $scope.dates[0];
									}

									$scope.status.hour = $scope.hours[fillItems.hours];
									$scope.status.minute = $scope.minutes[fillItems.mints/15];
								}

							};
						} ]);
