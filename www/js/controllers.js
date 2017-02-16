angular.module('app.controllers', [])


.factory("Batallas", function($firebaseArray) {
  var infosRef = new Firebase("https://finalionic-7dcd1.firebaseio.com/");
  return $firebaseArray(infosRef);
})
  
.controller('homeCtrl', ['$scope', '$stateParams','Batallas', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,Batallas) {
    console.log(Batallas);
    $scope.info =Batallas;
    


}])
   
.controller('cartCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cloudCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
   
.controller('batallaCtrl', ['$scope', '$stateParams','Batallas', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,Batallas) {
  $scope.Batalla = {};
    var monto = $scope.Batalla.monto;
    console.log();
    $scope.botonPrueba = function(){
      console.log($scope.Batalla.monto);
        Batallas.$add({
                        "P1":firebase.auth().currentUser.displayName,
                        "P2":"",
                        "jugador1":[0,0,0,0],
                        "jugador2":[0,0,0,0],
                        "acertoJ1":false,
                        "acertoJ2":false,
                        "monto": $scope.Batalla.monto
                      });      
    }

}])
   
.controller('creditosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('perfilCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 