app.controller("myctrl",($scope,myfactory)=>{

    
     $scope.showclass = false;
   $scope.movex = true;
    if(localStorage.storedata){
 myfactory.loaddata()
    }
   
   $scope.counter= myfactory.loadcounter();
   console.log($scope.counter);
    $scope.mystore= function(id){
         myfactory.saveid(id);
        var promise =  myfactory.productserver(id);
         promise.then(function(data){
        console.log(data)


       $scope.mydata = data;
             favdata()
       
      },function(err){
        alert("err");   
    } )
         datalogo(id);
     }
    load_id();
     getdata();
    function favdata(){
          var promise =  myfactory.favproduct();
         promise.then(function(data){
        console.log(data)
         console.log("food")
 for(var i=0;i<data.length;i++){
  for(var j=0;j<$scope.mydata.length;j++){
      if(data[i].id==$scope.mydata[j].id){
          $scope.mydata[j].FavoriteField = true;
          
      }
     
  }
 }
      },function(err){
        alert("err");   
    } ) 
    }
    
    function fav(){
        if(localStorage.mobilenumber==null){
            $scope.fav = true;
        }
        else{
           $scope.fav = false; 
        }
    }
//    $scope.mydata = myfactory.load(); 
   
function load_id(){
    var id = myfactory.load();
    console.log(id)
   $scope.mystore(id);
    
}
  
    function getdata(){
    var promise = myfactory.callserver();
    promise.then(function(data){
        console.log(data)
        
        var Food  = data.filter(function(obj){
            return obj.StoreCategory == "Food";
        })
       $scope.storedata =Food ;
      

        console.log($scope.storedata);
      },function(err){
        alert("err");   
    } );
    }
      
    $scope.addsidebar = ()=>{
        $scope.movex = !$scope.movex;
    }
$scope.addstore = ()=>{
    $scope.showclass = !$scope.showclass;
    
}
    

     $scope.addmodal = (data)=>{
         $scope.modal = data;
     }
 
     
     
     
     function datalogo(id){
           var promise = myfactory.storeserver(id);
    promise.then(function(data){
        console.log(data)
       $scope.StoreLogo = data.StoreLogo;
        $scope.StoreName= data.StoreName
       
      },function(err){
        alert("err");   
    } );
     }
         
    $scope.addtocart = (modal,q)=>{
//        console.log(q)
//        console.log($scope.counter)
//        console.log($scope.ProductName)
//         console.log(this.quantity)
//       var len = myfactory.arrlength();
//        console.log(len)
//        if(len==0){
//             myfactory.addproduct(modal)
//        }
        
//        else{
       var match =  myfactory.check(modal)
   
       if(match.length==1){
          alert("already present in cart")
       }
        else{
        modal.quantity = q;
         myfactory.addproduct(modal)
       
        $scope.counter = myfactory.arrlength();
            myfactory.savecounter($scope.counter)
         Notification.requestPermission(function(){
            var n = new Notification("Halanx", {
                body : "ADDED TO CART",
                icon : "images/success.png"
            });
           },1000);
        }

        
        
    }
    $scope.addfav = (data)=>{
        console.log(data)
        var val;
       data.FavoriteField = !data.FavoriteField;
//        data.FavoriteField = true;
        if(data.FavoriteField==true){
            val = 1;
//            alert("true")
            
       var obj= {}
       obj.LastItem = data.id;
            
            console.log(obj.LastItem)
//            var mobilenumber=localStorage.getItem("mobilenumber")
            var mobilenumber = 8506078226;
          
            
      var promise =   myfactory.callfav(obj,mobilenumber,val)
                 promise.then(function(data){
        console.log(data)


       
       
      },function(err){
        alert("err");   
    } )
 
        }
        else{
            
              val = 0;
//            alert("true")
            
       var obj= {}
       obj.LastItem = data.id;
           
            console.log(obj.LastItem)
            var mobilenumber = 8506078226;
          
            
      var promise =   myfactory.callfav(obj,mobilenumber,val)
                 promise.then(function(data){
        console.log(data)


       
       
      },function(err){
        alert("err");   
    } )  
            
            
        }
    }
   
    
});