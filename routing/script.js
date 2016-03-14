v app = angular.module('routingApp',['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider

	.when("/", {
		templateUrl: 'pages/home.html',
		controller: 'homecontroller'
	})
	.when("/about", {
		templateUrl: 'pages/about.html',
		controller: 'aboutcontroller'
	})
	.when("/contact", {
		templateUrl: 'pages/contact.html',
		controller: 'contactcontroller'
	})
	.when("/comment", {
		templateUrl: 'pages/comment.html',
		controller: 'commentcontroller'
	});
});

app.controller('homecontroller', function($scope) {
	$scope.message = "Welcome to home page";
});

app.controller('aboutcontroller', function($scope) {
	$scope.message = "About Us";
});

app.controller('contactcontroller', function($scope) {
	$scope.message = "Contact Us";
});

app.controller('commentcontroller', function($scope) {
	$scope.message = "Comments";
	$scope.comments = [];
	$scope.comment = {name: '', comment: ''};
	$scope.postComment = function() {
		$scope.comments.push($scope.comment);
		$scope.comment = {name: '', comment: ''};
		console.log($scope.comments);
	};

});
app.directive('message', function() {
	return {
		restrict: 'E',
		templateUrl: 'header.html',
		replace: true
	}

});
