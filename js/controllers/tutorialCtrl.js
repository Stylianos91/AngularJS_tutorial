/**
 * 
 */
angular.module('tutorialCtrlModule', [])

.controller("TutorialCtrl",["$scope","Calculations",function($scope, Calculations){
	
	$scope.tutorialObject={};
	$scope.tutorialObject.title="Main Page";
	$scope.tutorialObject.subtitle="Sub Title";
	
	$scope.tutorialObject.bindOutout=2;
	
	$scope.tutorialObject.firstName="Stelios";
	$scope.tutorialObject.lastName="Manousakis";
	
	$scope.timesTwo = function () {
		$scope.tutorialObject.bindOutout = Calculations.times2($scope.tutorialObject.bindOutout);
	}
	Calculations.pythagorio()
}])
.directive("welcomeMessage", function () {
	return {
		restrict: "E",
		template: "<div> Kalos tous<div/>"
	}
	
})

.controller("TutorialCtrl2",["$scope",function($scope){
	
	$scope.secondTutorial="This is the second tutorial";
	
}])


/*.factory("Calculations", function() {
	var calculations={};
	calculations.times2= function (a) {
		return a*2;
		
	};
	
	
	calculations.pythagorio= function(a,b) {
		return (a*a)+(b*b);
		
	}
	
	return calculations
	
})*/
;
	
	



