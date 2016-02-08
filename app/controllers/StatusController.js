myAppModule.controller('StatusController', function($scope,$http,$location) {

 $scope.project_list = null;
    $http.get('../app/json/project_list.json')
        .success(function(data) {
            $scope.project_list=data;
        })
        .error(function(data,status,error,config){
            $scope.project_list = [{heading:"Error",description:"Could not load json   data"}];
        });
$scope.activity_list = null;
    $http.get('../app/json/activity_list.json')
        .success(function(data) {
            $scope.activity_list=data;
        })
        .error(function(data,status,error,config){
            $scope.activity_list = [{heading:"Error",description:"Could not load json   data"}];
        });

    $scope.hours = [];

    var i =0;
    for(i=0; i<25; i++)
    {
        $scope.hours.push({id: i, value: i});
    }

    $scope.minutes = [];
    i =0;
    for(i=0; i<4; i++)
    {
        $scope.minutes.push({id: i, value: i*15});
    }

    $scope.dates = [];

    var currentDate = new Date(); 
    var first = currentDate.getDate(); 
    var startDate = new Date(currentDate.setDate(first));
    startDate = startDate.getDate()+"-" +(startDate.getMonth() + 1) + "-" + + startDate.getFullYear()  ;

    i = 0;

    for(i=0; i<10;i++)
    {
        var last = first-i;
        var endDate = new Date(currentDate.setDate(last));
        endDate = endDate.getDate()+"-" +(endDate.getMonth() + 1) + "-" +endDate.getFullYear()  ;

        $scope.dates.push({
            id: i,
            title: endDate
        });
    }

$scope.statusHistory = [] ;
$scope.addItem =  function(isValid) {
console.log("isValid :" +isValid)
if(isValid){
            $scope.statusHistory.push(
                {
                    date: $scope.date.title,
                    project: $scope.project.name,
                    activity: $scope.activity.name,
                    time: $scope.hour.value +':' +$scope.minute.value,
                    description: $scope.description
                });
console.log($scope.statusHistory[0]);
$location.path('/home').replace();
}
    };
});
