app.controller("myctrl",($scope,myfactory)=>{
  
   $scope.submitcode = ()=>{
       var obj = {};
       obj.FirstName = $scope.firstname;
       obj.LastName = $scope.lastname;
       obj.PhoneNo = $scope.mobilenumber;
      console.log($scope.vm.uploadme)
      obj.IdType = $scope.idtype;
       obj.IdNumber = $scope.idnumber;
       obj.Vehicle = $scope.vname;
       obj.VehicleSpaceAvailable = $scope.vsize;
       obj.BankAccountNumber = $scope.accountnumber;
       obj.BankAccountType = $scope.result;
       obj.BankName = $scope.bankname;
       obj.BankBranch = $scope.bankbranch;
       obj.BankBranchAddress = $scope.bankaddress;
       obj.IFSCCode = $scope.ifsc;
       obj.Verified = $scope.verify;
      
       var promise = myfactory.callserver(obj);
       promise.then((data)=>{
				
				alert("data sent")
           
           imagedata()
           
			},(err)=>{
				
				alert("data not sent");
			})
			
		}
   $scope.updatecode = ()=>{
       var obj = {};
       obj.FirstName = $scope.firstname;
       obj.LastName = $scope.lastname;
       obj.PhoneNo = $scope.mobilenumber;
//    obj.DisplayPictureURL = $scope.vm.uploadme;
       obj.Verified = $scope.verify;
      
      obj.IdType = $scope.idtype;
       obj.IdNumber = $scope.idnumber;
       obj.Vehicle = $scope.vname;
       obj.VehicleSpaceAvailable = $scope.vsize;
       obj.BankAccountNumber = $scope.accountnumber;
       obj.BankAccountType = $scope.result;
       obj.BankName = $scope.bankname;
       obj.BankBranch = $scope.bankbranch;
       obj.BankBranchAddress = $scope.bankaddress;
       obj.IFSCCode = $scope.ifsc;
      
       var promise = myfactory.updateserver(obj);
       promise.then((data)=>{
				
				alert("data updated")
           
         imagedata1()
           
			},(err)=>{
				
				alert("data not updated");
			})
			
		}
   function imagedata1(){
       var obj = {};
       obj.DisplayPicture = $scope.vm.uploadme;
       obj.ShopperPhoneNo = $scope.mobilenumber;
         var promise = myfactory.updateimage(obj);
       promise.then((data)=>{
				
			alert("image updated")
      
           
			},(err)=>{
				
				alert("image not updated");
			})
       
   }
   function imagedata(){
       var obj = {};
       obj.DisplayPicture = $scope.vm.uploadme;
       obj.ShopperPhoneNo = $scope.mobilenumber;
         var promise = myfactory.callimage(obj);
       promise.then((data)=>{
				alert("image sent")
      
           
			},(err)=>{
				
				alert("image not sent");
			})
       
   }
//   $scope.submitimage = ()=>{
//       var obj = {}
//       obj.ShopperPhoneNo = $scope.mobilenumber;
//   obj.AadharImage = go($scope.files1[0].name);  
//        obj.LicenseImage = go($scope.files2[0].name);  
//        obj.VehicleRCImage = go($scope.files3[0].name); 
//      var promise =  myfactory.callimage(obj)
//        promise.then((data)=>{
//				
//				console.log(data);
//			},(err)=>{
//				
//				alert("error");
//			})
//  }
   $scope.submitimage = ()=>{
       console.log($scope.vm.uploadme1);
       console.log("hello")
       console.log($scope.vm.uploadme2);
       console.log("hello")
       console.log($scope.vm.uploadme3);
       var obj = {};
          obj.ShopperPhoneNo = $scope.mobilenumber;
   obj.AadharImage =$scope.vm.uploadme1;  
        obj.LicenseImage = $scope.vm.uploadme2;  
        obj.VehicleRCImage = $scope.vm.uploadme3;
             var promise =  myfactory.aadharimage(obj)
        promise.then((data)=>{
				
				console.log(data);
			},(err)=>{
				
				alert("error");
			})
       
                  
   }
   $scope.update = ()=>{
       console.log($scope.vm.uploadme1);
       console.log("hello")
       console.log($scope.vm.uploadme2);
       console.log("hello")
       console.log($scope.vm.uploadme3);
       var obj = {};
          obj.ShopperPhoneNo = $scope.mobilenumber;
   obj.AadharImage =$scope.vm.uploadme1;  
        obj.LicenseImage = $scope.vm.uploadme2;  
        obj.VehicleRCImage = $scope.vm.uploadme3;
             var promise =  myfactory.updateaadharimage(obj)
        promise.then((data)=>{
				
				alert("image sent")
			},(err)=>{
				
				alert("image not sent");
			})
       
                  
   }
  
   $scope.getdata = ()=>{
    var promise = myfactory.getshopper();
         promise.then((data)=>{
			var falsedata = 	data.filter(function(obj){
                    return obj.Verified == false;
                })
				console.log(data);
           $scope.arr = falsedata;
      
			},(err)=>{
				
				alert("error");
			})
       
   }
   $scope.inputdata = (obj)=>{
          $scope.firstname=obj.FirstName;
        $scope.lastname=obj.LastName;
       $scope.mobilenumber=obj.PhoneNo;
     
      $scope.idtype=obj.IdType;
       $scope.idnumber=obj.IdNumber;
       $scope.vname=obj.Vehicle;
     $scope.vsize =   obj.VehicleSpaceAvailable;
       $scope.accountnumber=obj.BankAccountNumber;
       $scope.result=obj.BankAccountType;
     $scope.bankname=  obj.BankName;
    $scope.bankbranch=   obj.BankBranch;
       $scope.bankaddress=obj.BankBranchAddress;
       $scope.ifsc=obj.IFSCCode;
       $scope.verify=obj.Verified;
      
   }
   

 
})