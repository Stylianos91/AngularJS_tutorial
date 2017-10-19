/**
 * 
 */
angular.module('tutorialCtrlModule', [])

.controller("TutorialCtrl",["$scope",function($scope){
	
	$scope.tutorialObject={};
	$scope.tutorialObject.title="Main Page";
	$scope.tutorialObject.subtitle="Sub Title";
	
	$scope.tutorialObject.bindOutout=2;
	
	$scope.tutorialObject.firstName="Stelios";
	$scope.tutorialObject.lastName="Manousakis";
	
	$scope.timesTwo = function () {
		$scope.tutorialObject.bindOutout*=2;
	}
	
}])


.controller("TutorialCtrl1",["$scope",function($scope){
	
	$scope.name1="Stelios1";
	
}])
;
	
	



