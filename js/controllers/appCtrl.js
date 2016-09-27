angular.module('app').controller('appCtrl', ['$scope','productService', function($scope, productService){
 
    
//$scope.productLists=productService.productLists;
//$scope.productItems=productService.productItems;

    $scope.title = "Cubic Mart";
    $scope.productLists = "";
     
     $scope.$watch(function(){
                                return productService.productLists;
                            },function(newVal,oldVal){
                                                        if(oldVal!=newVal)
                                                                {
                                                                    $scope.productLists=newVal;
                                                                    
                                                                    
                                                                    console.log("This is coming from controller for productlist")
                                                                    console.log($scope.productLists);
                                                                    
                                                                    
                                                                    
                                                                }
        //console.log($scope.productLists);
       // alert($scope.productLists);
    });
    
//productListsIds
    $scope.productItems = "";
    //alert("appctrl");
    //alert(productService.productItems);    
     $scope.$watch(function(){
      return productService.productItemsIds;
                            },function(newVal,oldVal){
                                                        if(oldVal!=newVal)
                                                                {
                                                                    $scope.productItemsIds=newVal;
                                                                    console.log("This is coming from controller for productItemIds")
                                                                    console.log($scope.productItemsIds);
                                                                    
                                                                    
                                                                    
                                                                }
       
    });
    
    //productTypesIds
   $scope.$watch(function(){
      return productService.productListsIds
                            },function(newVal,oldVal){
                                                        if(oldVal!=newVal)
                                                                {
                                                                    $scope.productListsIds=newVal;
                                                                    console.log("This is coming from controller for productListsIds")
                                                                    console.log($scope.productListsIds);
                                                                    
                                                                    
                                                                    
                                                                }
       
    });
    
    $scope.select=function(id, description){
    productService.id=id;
        productService.getProductItemsIds();
        
        
        productService.id=id;
        productService.getProductListsIds();
        
       
        
    
    }
  
//     $scope.chooseSelected=function(itemNumber, itemDes) {
//                    $scope.selectId = itemNumber;
//                    $scope.title = itemDes;
//                    //$scope.productItems=productItems;
//         
//         
//
//   
//            };

    
    
     }]);
    
    
    
    
   
    
   
   