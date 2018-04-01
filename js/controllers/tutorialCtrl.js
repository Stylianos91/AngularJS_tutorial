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
	};

	$scope.reset_0 = function () {
    $scope.tutorialObject.bindOutout=2;

  };

$scope.showAlert = function () {
  alert("reset occurred!!");
};


//
//   $scope.delayClick = function () {
//     $scope.sleep(500);
//     //  alert("this is the delayed alert");
//   };
//
//   $scope.onDblClickRow = function (row) {
//
//     $scope.openReport(row.entity);
//   };
//
//
//   $scope.sleep = function (milliseconds) {
//     var start = new Date().getTime();
//     for (var i = 0; i < 1e7; i++) {
//       if ((new Date().getTime() - start) > milliseconds){
//         break;
//       }
//     }
//   };
//
// //-----------------------------------------------------------------------------------------
//   rowTemplate: '<div  '
//   + 'ng-dblclick="grid.appScope.onDblClickRow(row)" '
//   + 'ng-click="grid.appScope.delayClick()" '
//   + 'ng-class="{ \'tape\':row.entity.status == \'OFFLINE\' }"> '
//   + '<div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.uid" '
//   + 'class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }" '
//   + ' ui-grid-cell></div>'
//   + '</div>',
// //------------------------------------------------------------------------------------------
//

  //Calculations.pythagorio()
}])
.directive("welcomeMessage", function () {
	return {
		restrict: "E",
		template: "<div> Kalos tous<div/>"
	}
	
})

.controller("TutorialCtrl1",["$scope",function($scope){
	
	$scope.name1="Stelios1";
	
}])


.factory("Calculations", function() {
	var calculations={};

	calculations.times2= function (a) {
		return a*2;
		
	};
	
	
	calculations.pythagorio= function(a,b) {
		return (a*a)+(b*b);
		
	};
	
	return calculations
	
})
;
	
	



