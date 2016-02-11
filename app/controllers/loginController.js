myAppModule.controller('LoginController', function($scope, $location) {
	$scope.user = {};
	$scope.submitForm = function(isValid) {
		if (isValid) {
			if ($scope.user.email == "jinsy@qburst.com"
					&& $scope.user.password == "jinsy") {
				$location.path('/home').replace();
			} else {
				$('#show_error').html('Enter correct details..');
				$('#email').val("");
				$('#password').val("");
			}
		}
	};
});
