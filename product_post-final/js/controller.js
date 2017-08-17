app.controller("myctrl",($scope,myfactory)=>{
    $scope.hide = true;
  $scope.postdata= ()=>{            
var obj={}
               
obj.ProductName = $scope.productname
   obj.Price = $scope.productprice
               obj.Category = $scope.productcategory
//               console.log($scope.files[0].name)
//               obj.ProductImage = $scope.image
               obj.Features = $scope.productdescription
               obj.ProductSize = $scope.productsize
              obj.StoreId = $scope.availablestores
               console.log(obj)
               console.log($scope.image)
              var promise =  myfactory.callserver(obj)
               promise.then((data)=>{
                   alert("data sent")
				console.log(data)
				console.log("Get the Data in Promise...")
                image(data.id)
			},(err)=>{
				alert("data not sent")
				
			})
               
               
               
               }
  
  $scope.try = ()=>{
      console.log($scope.files[0].name)
  }
  
  function image(id){
      var data=mydata();
      var obj ={}
      obj.ProductString = data;
      obj.ProductId = id;
    var promise =  myfactory.callimage(obj,id);
        promise.then((data)=>{
				
//				var str = data.ProductString ;
//            console.log(str)
//                console.log(data.ProductString);
            alert("image sent")
//          check(data.ProductString,obj.ProductString)
			},(err)=>{
				
				alert("image not sent");
			})
  }

  
  
  
//  function image(id){
//      console.log($scope.files[0])
//      var obj = {};
//      obj.image = $scope.files[0];
//obj.ProductId = id;
//    var promise =  myfactory.callimage(obj,id);
//        promise.then((data)=>{
//				
//				var str = data.ProductString ;
//            console.log(str)
//                console.log(data.ProductString);
//          check(data.ProductString,obj.ProductString)
//			},(err)=>{
//				
//				alert("error");
//			})
//
//  }
    function mydata(){
       

    console.log($scope.vm)
    console.log($scope.vm.uploadme)
    return $scope.vm.uploadme
    }
    $scope.print = ()=>{
      console.log($scope.vm) 
     
    }
    
//    
//    function check(data1,data2){
//        if(data1==data2){
//           alert("yes") 
//        }
//        else{
//            alert("no")
//        }
//    }
    
    
    
    $scope.getdata = ()=>{
        
     var promise =  myfactory.getproduct()
      promise.then((data)=>{
                   alert("success")
				console.log(data)
               var filterdata =  data.filter(function(obj){
                    return obj.StoreId == $scope.availablestores;
                })
               console.log(filterdata)
				$scope.arr =filterdata
               
			},(err)=>{
				
				console.log("Get the Err in Promise...");
			})
    }
    
    
    $scope.filldata = (i)=>{
       $scope.productname = i.ProductName
  $scope.productprice = i.Price
              $scope.productcategory = i.Category
//               console.log($scope.files[0].name)
$scope.image = i.ProductImage
              $scope.productdescription = i.Features
               $scope.productsize = i.ProductSize
              $scope.availablestores = i.StoreId;
        $scope.myid = i.id
        alert("added")
        
        
    }
    
    $scope.update=()=>{
        var obj={}
               
obj.ProductName = $scope.productname
   obj.Price = $scope.productprice
               obj.Category = $scope.productcategory
//               console.log($scope.files[0].name)
//               obj.ProductImage = $scope.image
               obj.Features = $scope.productdescription
               obj.ProductSize = $scope.productsize
              obj.StoreId = $scope.availablestores
               console.log(obj)
               console.log($scope.image)
               console.log($scope.myid)
              var promise =  myfactory.updateserver(obj,$scope.myid)
               promise.then((data)=>{
                   alert("data updated")
				console.log(data)
				console.log("Get the Data in Promise...")
                image1($scope.myid)
                console.log($scope.myid)
			},(err)=>{
				
				console.log("data not updated");
			})
               
            
        }
     function image1(id){
      var data=mydata();
      var obj ={}
      obj.ProductString = data;
      obj.ProductId = id;
    var promise =  myfactory.callimage1(obj,id);
        promise.then((data)=>{;
            console.log("image updated")
          check(data.ProductString,obj.ProductString)
			},(err)=>{
				
				alert("image not updated");
			})
  }

    
    $scope.storecat = ()=>{
        var promise =  myfactory.getstore($scope.availablestores);
        promise.then((data)=>{;
           
        console.log(data.CategoriesAvailable)
        $scope.list = JSON.parse(data.CategoriesAvailable)
        console.log($scope.list)
			},(err)=>{
				
				alert("err");
			})
    }
    


    
               })