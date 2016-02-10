myAppModule.controller('StatusController',['$scope','$http','$location','$rootScope','UtilService',function($scope,$http,$location,$rootScope,UtilService) {

 $scope.project_list = null;
$scope.activity_list = null;
$rootScope.statusHistory = [];

UtilService.getProjects().then(function(data) {
        $scope.project_list = data;
    });
UtilService.getActivities().then(function(data) {
        $scope.activity_list = data;
    });
UtilService.getStatusHistory().then(function(data) {
        $rootScope.statusHistory = data;
    });


$scope.hours=UtilService.getHours();
$scope.minutes=UtilService.getMinutes();
$scope.dates =UtilService.getDates();
$scope.date= $scope.dates[0];
$scope.hour= $scope.hours[8];
$scope.minute= $scope.minutes[0];
$scope.addItem =  function() {
            $rootScope.statusHistory.push(
                {
                    date: $scope.date.title,
                    project: $scope.project.title,
                    activity: $scope.activity.title,
                    time: $scope.hour.value +':' +$scope.minute.value ,
                    description: $scope.description
                });
    };


}]);
