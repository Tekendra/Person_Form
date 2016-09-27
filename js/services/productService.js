angular.module("app").service("productService", ["$http", function($http){

    
         $http.get("/service/person").then(function(response){
            Obj.productItems= response.data; 
             console.log("from Service person")
             console.log(Obj.productItems);
   
    });
    
       var Obj=this;
        this.id=null;

    this.getProductItemsIds=function(){
        
        var url ="/service/person/"+Obj.id;
        
        
         $http.get(url).then(function(response){
                          

            Obj.productItemsIds= response.data; 
             
             
             console.log("from Service person by personid);
             console.log(Obj.productItemsIds);
 
    });
    }
    
       
    $http.get("/service/person").then(function(response){  
                Obj.productLists= response.data;
                console.log("Service1");
                console.log(Obj.productLists);
                });
    
    
    
    this.currentId = null;
   
    
    this.getProductListsIds=function(){
         $http.get("/service/person/"+Obj.currentId).then(function(response){
            Obj.productListsIds= response.data;  
             
             console.log("from Service person by id")
             console.log(Obj.productListsIds);


   
    });
    }
      
    
    }]);




    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        