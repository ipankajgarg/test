app.factory("myfactory",($http,$q)=>{
    var object = {
         arr : [],
        pusharr : function(data){
            this.arr.push(data);
            console.log(this.arr)
            return this.arr;
        },
        callserver : function(obj){
            console.log(obj)
            var pr = $q.defer();
				var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/stores/";
            console.log(obj);
				$http.post(url,obj).then(function(data){
					pr.resolve(data.data);
					console.log("Data is Success...",data);
                    alert("success")
				}
					,function(err){
					pr.reject(err);	
					console.log(" Error");
					});
            return pr.promise;
				},
        callimage : function(obj,id){
            console.log(obj)
            var pr = $q.defer();
				var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/stores/"+id+"/upload-logo";
            console.log(obj);
				$http.post(url,obj).then(function(data){
					pr.resolve(data);
					console.log("Data is Success...",data);
                    alert("success")
				}
					,function(err){
					pr.reject(err);	
					console.log("Error");
					});
            return pr.promise;
				},
        updateserver : function(obj,id){
              console.log(obj)
            var pr = $q.defer();
				var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/stores/"+id;
            console.log(obj);
				$http.patch(url,obj).then(function(data){
					pr.resolve(data.data);
					console.log("Data is Success...",data);
                    alert("success")
				}
					,function(err){
					pr.reject(err);	
					console.log("Error");
					});
            return pr.promise; 
        },
         callimage1 : function(obj,id){
            console.log(obj)
            var pr = $q.defer();
				var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/stores/"+id+"/upload-logo";
            console.log(obj);
				$http.post(url,obj).then(function(data){
					pr.resolve(data);
					console.log("Data is Success...",data);
                    alert("success")
				}
					,function(err){
					pr.reject(err);	
					console.log("Error");
					});
            return pr.promise;
				},
        getstore : function(){
          
            var pr = $q.defer();
				var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/stores/";
            
				$http.get(url).then(function(data){
					pr.resolve(data.data);
					console.log("Data is Success...",data);
                    alert("success")
				}
					,function(err){
					pr.reject(err);	
					console.log("Error");
					});
            return pr.promise;
    },
        falsedata : function(data){
          var falsearr =   data.filter(function(obj){
                return obj.Verified == false;
            })
          return falsearr;
        }
        
				
        
    }
    return object
})