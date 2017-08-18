app.factory("myfactory",($http,$q)=>{
    var object = {
        callserver : function(obj){
            console.log(obj)
            var pr = $q.defer();
				var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/shoppers/";
            console.log(obj);
				$http.post(url,obj).then(function(data){
					pr.resolve(data);
					console.log("Data is Success...",data);
				}
					,function(err){
					pr.reject(err);	
					console.log("Error");
					});
            return pr.promise;
				},
           updateserver : function(obj){
            console.log(obj)
            var pr = $q.defer();
				var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/shoppers/"+obj.PhoneNo+"/";
            console.log(obj);
				$http.patch(url,obj).then(function(data){
					pr.resolve(data);
					console.log("Data is Success...",data);
				}
					,function(err){
					pr.reject(err);	
					console.log("Error");
					});
            return pr.promise;
				},
				 aadharimage : function(obj){
            console.log(obj)
            var pr = $q.defer();
				var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/shoppers/documents/";
            console.log(obj);
				$http.post(url,obj).then(function(data){
					pr.resolve(data);
					console.log("Data is Success...",data);
				}
					,function(err){
					pr.reject(err);	
					console.log("Error");
					});
            return pr.promise;
				},
        	 updateaadharimage : function(obj){
            console.log(obj)
            var pr = $q.defer();
				var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/shoppers/documents/"+obj.ShopperPhoneNo+"/";
            console.log(obj);
				$http.patch(url,obj).then(function(data){
					pr.resolve(data);
					console.log("Data is Success...",data);
				}
					,function(err){
					pr.reject(err);	
					console.log("Error");
					});
            return pr.promise;
				},
        callimage : function(obj){
              var pr = $q.defer();
				var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/shoppers/"+obj.ShopperPhoneNo+"/upload-image/";
            console.log(obj);
				$http.post(url,obj).then(function(data){
					pr.resolve(data);
					console.log("Data is Success...",data);
				}
					,function(err){
					pr.reject(err);	
					console.log("Error");
					});
            return pr.promise;
        },
           updateimage : function(obj){
              var pr = $q.defer();
				var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/shoppers/"+obj.ShopperPhoneNo+"/upload-image/";
            console.log(obj);
				$http.post(url,obj).then(function(data){
					pr.resolve(data);
					console.log("Data is Success...",data);
				}
					,function(err){
					pr.reject(err);	
					console.log("Error");
					});
            return pr.promise;
        },
        getshopper : function(){
               var pr = $q.defer();
				var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/shoppers/";
          
				$http.get(url).then(function(data){
					pr.resolve(data.data);
					console.log("Data is Success...",data);
				}
					,function(err){
					pr.reject(err);	
					console.log("Error");
					});
            return pr.promise
        }
        
    }
    return object
})