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



	$scope.tutorialObject.sgCount = 0;
	
	$scope.timesTwo = function () {
		$scope.tutorialObject.bindOutout = Calculations.times2($scope.tutorialObject.bindOutout);
	};

	$scope.reset_0 = function () {
    $scope.tutorialObject.bindOutout=2;

  };

	$scope.showAlert = function () {
 // alert("reset occurred!!");
		$scope.sleep(500);
		$scope.tutorialObject.sgCount =	$scope.tutorialObject.sgCount +1;	
};


  /////////////////////////////////////////////
  var isItDouble = false;
  var timeStart = 0;
  const timespan = 400;
  var upRow = 0;
  var elementCompare= 0;
  var firstDown = 0;

  $scope.mouseReleased = function ($event, row) {
    upRow = row;
    console.log("Mouse Up!!!");
    isItDouble = true;
    timeStart = new Date().getTime();
    elementCompare = $event.currentTarget;
    console.log("MouseUp element "+ elementCompare);
    $scope.sleep(200);
    console.log(upRow);
  };

  $scope.mousePressed = function ($event, row) {
    var timeStop = new Date().getTime();
    console.log("MouseDown element "+ $event.currentTarget);
    var firstTime = 0;
    if (isItDouble === false) {
      firstTime = row;
      console.log("first press "+ firstTime);
    }


    if (isItDouble === true && (timeStop-timeStart) < timespan && (row === upRow)){
      //  row.e
      // console.log("Time Stert "+ timeStart);
      // console.log("Time Stop " + timeStop);
      console.log("Double Click!!!");
      //  gridApi.selection.on.rowSelectionChanged($scope, $scope.selectionHandler);
      $scope.openReport(row.entity);
      isItDouble = false;
    }
  };
// + 'ng-dblclick="grid.appScope.onDblClickRow(row)" '


  /////////////////////////////////////////////////
  $scope.sleep = function (milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  };
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

//   + 'ng-mouseup="grid.appScope.mouseReleased($event, row)"
//   + 'ng-mousedown="grid.appScope.mousePressed($event, row)" '
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
	
	



