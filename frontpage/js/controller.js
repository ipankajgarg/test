app.controller("myctrl",($scope,myfactory)=>{
    storename();
    function storename()
    {
        var promise = myfactory.callserver();
    promise.then(function(data){
        console.log(data)
        var Food  = data.filter(function(obj){
            return obj.StoreCategory == "Food";
        })
        var Grocery  = data.filter(function(obj){
            return obj.StoreCategory == "Grocery";
        })
       $scope.stores = Food;
         $scope.grocery= Grocery;
        console.log($scope.stores)
      },function(err){
        alert("err");   
    } );
    }
  
    $scope.select=(store)=>{
        console.log(store)
        myfactory.save(store.id)
    }
   
})