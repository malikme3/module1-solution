( function() {
  'use strict';
angular.module('mpApp',[])
.controller('myController', myController);
myController.injector = ['$scope'];

function myController($scope){
$scope.menuCount="0";
$scope.lunchMessage="";

$scope.menuList="";
//alert($scope.menuList);

$scope.checkManu = function (menuList){
  console.log(menuList);
    alert(menuList);
    console.log("menuList= "+menuList);
  if(menuList != null){
    alert("not null")
    $scope.lunchMessage="Menu is Empty";

  $scope.menuCount="1";
} else {
  alert('Hello');
  $scope.menuCount="Menu is Empty";
}
}

};


})();
