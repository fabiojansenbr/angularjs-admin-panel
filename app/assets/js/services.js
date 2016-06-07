var adminServices = angular.module('adminServices', []);

adminServices.factory('AuthenticationService', function(){
	var auth = {
		isLogged: false
	}
	return auth;
});