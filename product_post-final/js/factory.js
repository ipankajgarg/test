app.factory("myfactory",($http,$q)=>{
            var object = {
            callserver : function(obj){
            var pr = $q.defer()
            var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/products/"
            console.log(obj)
            $http.post(url,obj).then(function(data){
                pr.resolve(data.data)
                console.log("success"),
                    function(err){
                    pr.reject(err)
                    console.log("error")
                }
            })
            return pr.promise
            },  
                updateserver : function(obj,id){
            var pr = $q.defer()
            var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/products/"+id;
            console.log(obj)
            $http.patch(url,obj).then(function(data){
                pr.resolve(data.data)
                console.log("success"),
                    function(err){
                    pr.reject(err)
                    console.log("error")
                }
            })
            return pr.promise
            },
                 callimage : function(obj,id){
            var pr = $q.defer()
            var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/products/"+id+"/upload-image"
            console.log(obj)
            $http.post(url,obj).then(function(data){
                pr.resolve(data.data)
                console.log("success"),
                    function(err){
                    pr.reject(err)
                    console.log("error")
                }
            })
            return pr.promise
            },
                      callimage1 : function(obj,id){
            var pr = $q.defer()
            var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/products/"+id+"/upload-image"
            console.log(obj)
            $http.patch(url,obj).then(function(data){
                
                pr.resolve(data.data)
                alert("patch")
                console.log("success"),
                    function(err){
                    pr.reject(err)
                    console.log("error")
                }
            })
            return pr.promise
            },
                getproduct : function(){
                      var pr = $q.defer()
            var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/products/";
            
            $http.get(url).then(function(data){
                pr.resolve(data.data)
                console.log("success"),
                    function(err){
                    pr.reject(err)
                    console.log("error")
                }
            })
            return pr.promise
                    
                },
                getstore : function(id){
                               var pr = $q.defer()
            var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/stores/"+id;
            
            $http.get(url).then(function(data){
                pr.resolve(data.data)
                console.log("success"),
                    function(err){
                    pr.reject(err)
                    console.log("error")
                }
            })
            return pr.promise
                }
                
            }
            return object
            })