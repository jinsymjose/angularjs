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

//Creating hours

    $scope.hours = [];

    var i =0;
    for(i=0; i<25; i++)
    {
        $scope.hours.push({id: i, value: i});
    }

    //Creating Minutes

    $scope.minutes = [];
    i =0;
    for(i=0; i<4; i++)
    {
        $scope.minutes.push({id: i, value: i*15});
    }

    //Injecting Dates to the date column
    $scope.dates = [];

    var curr = new Date(); // get current date
    var first = curr.getDate(); // First day is the day of the month - the day of the week
    // var last = first + 6; // last day is the first day + 6
    var startDate = new Date(curr.setDate(first));
    startDate = "" + startDate.getFullYear() +"-" +(startDate.getMonth() + 1) + "-" + startDate.getDate() ;

    i = 0;

    for(i=0; i<7;i++)
    {
        var last = first-i;
        var endDate = new Date(curr.setDate(last));
        endDate = endDate.getFullYear() +"-" +(endDate.getMonth() + 1) + "-" + endDate.getDate();

        $scope.dates.push({
            id: i,
            title: endDate
        });
    }
});
