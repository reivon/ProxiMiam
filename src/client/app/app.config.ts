(function() {
    'use strict'

    angular.module('app').controller('HomeController', HomeController);

    function HomeController($scope, $http) {
		$http.get('content/bouffe.json')
			.success(function(data, status) {
				$scope.restaux = data;
			})
			.error(function(data, status) {
				alert("doh !");
			});
    }
    HomeController.$inject = ['$scope', '$http'];

})();