app.controller("cartctrl",function($scope,myfactory, $window){
    
    autoload();
    
    
    function autoload()
 {
       
     $scope.cartproductlist = myfactory.load();
    $scope.totalamount   = myfactory.calculatetotal($scope.cartproductlist)
    if($scope.cartproductlist.length==0){
        $scope.cartclass = true;
          $scope.emptyclass = false;    
    }
     else{
          $scope.emptyclass = true;
     $scope.cartclass = false;
     }
 }

    $scope.deleteproduct = (list)=>{
         console.log(list)
       list.Active = false;
        console.log(list)
     var finalarr =    myfactory.filterfunction($scope.cartproductlist)
     $scope.cartproductlist = finalarr;
        $scope.totalamount = myfactory.calculatetotal($scope.cartproductlist)
         var json = JSON.stringify($scope.cartproductlist)
          localStorage.setItem('storedata',json);
          console.log(localStorage)
          myfactory.load();
        var len = myfactory.cartlength($scope.cartproductlist);
         var json = JSON.stringify(len)
          localStorage.setItem('counter',json);
        if($scope.cartproductlist.length==0){
          $scope.emptyclass = false;
        $scope.cartclass = true;
    }
     else{
          $scope.emptyclass = true;
     $scope.cartclass = false;
     }
    }
    
   $scope.updateminus= (list)=>{
    list.quantity--;
     
       
       $scope.totalamount=myfactory.calculatetotal($scope.cartproductlist)
        var json = JSON.stringify($scope.cartproductlist)
          localStorage.setItem('storedata',json);
   }
   $scope.updateplus = (list)=>{
     
       
       list.quantity++;
      
    $scope.totalamount   = myfactory.calculatetotal($scope.cartproductlist)
     var json = JSON.stringify($scope.cartproductlist)
          localStorage.setItem('storedata',json);
   }

   $scope.submitcart = ()=>{
       
//      myfactory.setnumber()
var mobilenumber = myfactory.getnumber()
//       var mobilenumber = 8506078226;
       
//       localStorage.setItem("mobilenumber",mobilenumber);

console.log(mobilenumber)
if(mobilenumber=="null"|| mobilenumber==null){
    $window.location.href = "http://localhost/halanx-final/new1big-kfc/frontpage/login.php";
}
       else{
           var i;
                  for( i=0;i<$scope.cartproductlist.length;i++){
           var obj = {};
           obj.CartPhoneNo=mobilenumber;
           obj.Item = $scope.cartproductlist[i].id;
          obj.Quantity =$scope.cartproductlist[i].quantity ;
      var promise = myfactory.callserver(obj)
          
       promise.then(function(data){
        console.log(data)
                         if(i==$scope.cartproductlist.length){
                          alert("order" +i+1+"is ready")
$window.location.href = "http://localhost/halanx-final/new1big-kfc/jquery%20datepicker/index.html"; 
                          //window.location = "../jquery datepicker/index.html"
                     
           }

    },
                 function(err){
        alert("err")
        
    })
       }  
//         if(i==$scope.cartproductlist.length){
//           alert("loopover")
//           }  
       }
       
       
   }
})