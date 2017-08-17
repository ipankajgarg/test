app.controller("myctrl",($scope,myfactory)=>{
   
    $scope.submitform = ()=>{
    
        var obj = {};
        obj.Dealer_FirstName = $scope.first;
        obj.Dealer_LastName = $scope.second;
        obj.StoreName = $scope.store;
        obj.StoreAddress = $scope.location;
        obj.Dealer_Designation = $scope.design;
        obj.Dealer_ContactNo = $scope.number;
        obj.MondayOpeningTime = $scope.monfrom;
        obj.MondayClosingTime= $scope.montill;
        obj.TuesdayOpeningTime = $scope.tuefrom;
        obj.TuesdayClosingTime = $scope.tuetill;
        obj.WednesdayOpeningTime= $scope.wedfrom;
        obj.WednesdayClosingTime= $scope.wedtill;
        obj.ThursdayOpeningTime = $scope.thufrom;
        obj.ThursdayClosingTime = $scope.thutill;
        obj.FridayOpeningTime = $scope.frifrom;
        obj.FridayClosingTime = $scope.fritill;
        obj.SaturdayOpeningTime = $scope.satfrom;
        obj.SaturdayClosingTime = $scope.sattill;
        obj.SundayOpeningTime = $scope.sunfrom;
        obj.SundayClosingTime = $scope.suntill;
        obj.CompanyLegalName = $scope.companylegal;
        obj.StoreName = $scope.companycustomer;
        obj.PANNumber = $scope.pan;
        obj.BankAccountNumber =$scope.accno;
        obj.BankAccountType =$scope.result;
        obj.BankName = $scope.bankname;
        obj.BankBranch = $scope.bankbranch;
        obj.BankBranchAddress = $scope.bankadd;
        obj.IFSCCode = $scope.ifsc;
        obj.Latitude= $scope.latitude;
        obj.Longitude=$scope.longitude;
        obj.Verified = $scope.verify;
        obj.StoreCategory = $scope.storecat;
       obj.Latitude   = localStorage.getItem("Latitude")
       obj.Longitude = localStorage.getItem("Longitude")
        obj.CategoriesAvailable = JSON.stringify($scope.cat);
        console.log(obj.CategoriesAvailable);
        console.log(obj)
       
        var promise = myfactory.callserver(obj);
       promise.then((data)=>{
				console.log(data.id)
                image(data.id)
				console.log(data);
			},(err)=>{
				
				alert("error");
			})
       

       
       
    }
    function image(id){
         var data=mydata();
//        console.log($scope.files[0].name)
        var obj = {}
        obj.StoreLogoImage = data;
       obj.StoreId = id;
        
        console.log(obj)
        var promise=myfactory.callimage(obj,id)
        promise.then((data)=>{
				
				console.log(data);
			},(err)=>{
				
				alert("error");
			})
    }
    
    function mydata(){
       

    console.log($scope.vm)
    console.log($scope.vm.uploadme)
    return $scope.vm.uploadme
    }
//update
    
    $scope.updateform = ()=>{
         var obj = {};
        obj.Dealer_FirstName = $scope.first;
        obj.Dealer_LastName = $scope.second;
        obj.StoreName = $scope.store;
        obj.StoreAddress = $scope.location;
        obj.Dealer_Designation = $scope.design;
        obj.Dealer_ContactNo = $scope.number;
        obj.MondayOpeningTime = $scope.monfrom;
        obj.MondayClosingTime= $scope.montill;
        obj.TuesdayOpeningTime = $scope.tuefrom;
        obj.TuesdayClosingTime = $scope.tuetill;
        obj.WednesdayOpeningTime= $scope.wedfrom;
        obj.WednesdayClosingTime= $scope.wedtill;
        obj.ThursdayOpeningTime = $scope.thufrom;
        obj.ThursdayClosingTime = $scope.thutill;
        obj.FridayOpeningTime = $scope.frifrom;
        obj.FridayClosingTime = $scope.fritill;
        obj.SaturdayOpeningTime = $scope.satfrom;
        obj.SaturdayClosingTime = $scope.sattill;
        obj.SundayOpeningTime = $scope.sunfrom;
        obj.SundayClosingTime = $scope.suntill;
        obj.CompanyLegalName = $scope.companylegal;
        obj.StoreName = $scope.companycustomer;
        obj.PANNumber = $scope.pan;
        obj.BankAccountNumber =$scope.accno;
        obj.BankAccountType =$scope.result;
        obj.BankName = $scope.bankname;
        obj.BankBranch = $scope.bankbranch;
        obj.BankBranchAddress = $scope.bankadd;
        obj.IFSCCode = $scope.ifsc;
         obj.Latitude= $scope.latitude;
        obj.Longitude=$scope.longitude;
         obj.Verified = $scope.verify;
        obj.StoreCategory = $scope.storecat;
         obj.CategoriesAvailable = JSON.stringify($scope.cat);
          obj.Latitude   = localStorage.getItem("Latitude")
       obj.Longitude = localStorage.getItem("Longitude")
        console.log(obj)
       
        var promise = myfactory.updateserver(obj,$scope.storeid);
       promise.then((data)=>{
          
				console.log(data.id)
                image1(data.id)
				console.log(data);
			},(err)=>{
				
				alert("error");
			})
        
    }
    function image1(id){
                var data=mydata();
//        console.log($scope.files[0].name)
        var obj = {}
        obj.StoreLogoImage = data;
       obj.StoreId = id;
        
        console.log(obj)
        var promise=myfactory.callimage1(obj,id)
        
        promise.then((data)=>{
				
				console.log(data);
			},(err)=>{
				
				alert("error");
			})
        
    }
    
    $scope.getdata = ()=>{
       var promise =  myfactory.getstore()
          promise.then((data)=>{
//           
//           console.log(falsearr)
      $scope.arr = data;
				console.log(data);
			},(err)=>{
				
				alert("error");
			})
    }
    $scope.inputdata = (data)=>{
        console.log("hello")
         $scope.first =  data.Dealer_FirstName;
       $scope.second =  data.Dealer_LastName;
        $scope.store =  data.StoreName;
       $scope.location= data.StoreAddress;
         $scope.design=data.Dealer_Designation; 
        $scope.number= data.Dealer_ContactNo ;
       $scope.monfrom=  data.MondayOpeningTime;
        $scope.montill=data.MondayClosingTime
       $scope.tuefrom= data.TuesdayOpeningTime;
        $scope.tuetill=data.TuesdayClosingTime;
       $scope.wedfrom =  data.WednesdayOpeningTime;
       $scope.wedtill= data.WednesdayClosingTime;
       $scope.thufrom =  data.ThursdayOpeningTime;
       $scope.thutill =  data.ThursdayClosingTime;
       $scope.frifrom =  data.FridayOpeningTime;
      $scope.fritill =   data.FridayClosingTime;
        $scope.satfrom=data.SaturdayOpeningTime;
       $scope.sattill= data.SaturdayClosingTime;
       $scope.sunfrom = data.SundayOpeningTime;
       $scope.suntill = data.SundayClosingTime;
        $scope.companylegal = data.CompanyLegalName;
       $scope.companycustomer =  data.StoreName;
        $scope.pan=data.PANNumber;
       $scope.accno= data.BankAccountNumber;
       $scope.result = data.BankAccountType;
       $scope.bankname= data.BankName;
       $scope.bankbranch =  data.BankBranch;
        $scope.bankadd=data.BankBranchAddress;
       $scope.ifsc =  data.IFSCCode;
         $scope.verify = data.Verified;
       $scope.storecat = data.StoreCategory;
    
        
    }
    $scope.addcat = ()=>{
      var arr = myfactory.pusharr($scope.prodcat);
        $scope.cat = arr;
        $scope.prodcat = "";
        
    }
    
})