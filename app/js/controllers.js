'use strict';

/* Controllers */

var baggageSSharingApp = angular.module('baggageSSharingApp', []);

baggageSSharingApp.controller('BSController', ['$scope', '$http', function($scope, $http) {
  $http.get('phones/flights.json').success(function(data) {
    $scope.flights = data;
  });
  $scope.curElement = {

  	email: '',
  	user_name:'',
  	profile_pic:'',
  	message:'',
  	destination:'',
  	departure:'',
  	flightNumber:'',
  	Date:''



  };

  $scope.FlighimageUrl ='img/BS_Logo2.png';
  $scope.orderProp = 'age';
   $scope.setForm = function(index) {
            this.curElement.email = $scope.flights[index].email;
            this.curElement.user_name = $scope.flights[index].User_name;
			this.curElement.profile_pic = $scope.flights[index].imageUrl;
			this.curElement.message = $scope.flights[index].Message_Text;
			this.curElement.destination = $scope.flights[index].Destination;
			this.curElement.departure = $scope.flights[index].Departure + " to";
			this.curElement.flightNumber = $scope.flights[index].Flight_Number + " on ";
			this.curElement.Date = $scope.flights[index].Date;
			
        }
 
 
}]);
