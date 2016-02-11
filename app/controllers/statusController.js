myAppModule
		.controller(
				'StatusController',
				[
						'$scope',
						'$http',
						'$location',
						'$rootScope',
						'dataService',
						'statusService',
						function($scope, $http, $location, $rootScope,
								dataService, statusService) {

							dataService.getProjects().then(function(data) {
								$scope.project_list = data;
							});
							dataService.getActivities().then(function(data) {
								$scope.activity_list = data;
							});
							dataService.getStatusHistory().then(function(data) {
								$rootScope.statusHistory = data;
							});
							$scope.status = {};
							$scope.formData = {};
							$scope.hours = dataService.getHours();
							$scope.minutes = dataService.getMinutes();
							$scope.dates = dataService.getDates();
							$scope.status.date = $scope.dates[0];
							$scope.status.hour = $scope.hours[8];
							$scope.status.minute = $scope.minutes[0];
							$scope.addItem = function(status) {
								var success = statusService.saveStatus(status);
								if (success) {
									clearfields();
									formData = statusService.setDetails(status,
											$scope.dates);
									if (formData.dateIncrement == 1
											&& formData.dateFieldId != 0) {
										$scope.status.date = $scope.dates[formData.dateFieldId - 1];
									} else if (formData.dateIncrement == 1
											&& formData.dateFieldId == 0) {
										$scope.status.date = $scope.dates[0];
									}

									$scope.status.hour = $scope.hours[formData.hourValue];
									$scope.status.minute = $scope.minutes[formData.minuteValue / 15];
								}

							};

							var clearfields = function() {
								$scope.status.project = '';
								$scope.status.activity = '';
								$scope.status.description = '';
							};
						} ]);
