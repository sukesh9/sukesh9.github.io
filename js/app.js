
var app = angular.module("myApp", ["ngRoute","ngResource"]);
app.config(function($routeProvider, $resourceProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/Wea", {
        templateUrl : "weather.html",
        controller : "weatherCtrl"
    })
    .when("/Mov", {
        templateUrl : "main/movies.html",
        controller : "movieCtrl"
    });
});


app.controller('movieCtrl', function($scope, $resource){
	$scope.year='';
	$scope.film='';
	

	$scope.myFunc= function(){
	  
	  var User = $resource('https://www.omdbapi.com/?t=:filmname&y=&plot=short&r=json',{filmname:'@$sc.film'});
      User.get({filmname:$scope.film})
    .$promise.then(function(response) {
      $scope.myMovie = response;
      console.log(response);
    });

		
	};

});		

app.controller('weatherCtrl', function($scope, $http) {
$scope.city='';
 $scope.myFunc= function(){
 $http.get('https://api.openweathermap.org/data/2.5/weather?q='+$scope.city+'&appid=9bc857c11a75b8c18e106f9af85af3c4')
	  .then(function(response) {
	      $scope.myWelcome = response.data;
	  });
	};
  	$scope.countries = {
                    'India': {
                        'Maharashtra': ['Pune', 'Mumbai', 'Nagpur', 'Akola'],
                        'Madhya Pradesh': ['Indore', 'Bhopal', 'Jabalpur'],
                        'Rajasthan': ['Jaipur', 'Ajmer', 'Jodhpur']
                    },
                    
                    'USA': {
                        'Alabama': ['Montgomery', 'Birmingham'],
                        'California': ['Sacramento', 'Fremont', 'losangeles'],
                        'Illinois': ['Springfield', 'Chicago'],
                        'texas': ['dallas','Austin', 'houston']
                    },

                    'Australia': {
                        'New South Wales': ['Sydney'],
                        'Victoria': ['Melbourne']
                    }
                };
 
});