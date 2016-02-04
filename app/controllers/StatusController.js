myAppModule.controller('StatusController', function($scope,$http) {

 $scope.project_list = null;
    $http.get('../app/json/project_list.json')
        .success(function(data) {
            $scope.project_list=data;
        })
        .error(function(data,status,error,config){
            $scope.project_list = [{heading:"Error",description:"Could not load json   data"}];
        });
console.log(" $scope.projects "+ $scope.projects)
$scope.activity_list = null;
    $http.get('../app/json/activity_list.json')
        .success(function(data) {
            $scope.activity_list=data;
        })
        .error(function(data,status,error,config){
            $scope.activity_list = [{heading:"Error",description:"Could not load json   data"}];
        });
$scope.time_list = null;
    $http.get('../app/json/time_list.json')
        .success(function(data) {
            $scope.time_list=data;
        })
        .error(function(data,status,error,config){
            $scope.time = [{heading:"Error",description:"Could not load json   data"}];
        });
});
