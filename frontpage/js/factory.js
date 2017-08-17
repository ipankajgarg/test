app.factory("myfactory",($http,$q)=>{
    var object = {
         callserver : function(){
         var pr = $q.defer();
         var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/stores/";
        
                
         $http.get(url).then(function(data){
             pr.resolve(data.data)
             console.log("success")
           
         },
                             function(err){
             pr.reject(err)
             console.log("error")
             
         }
         )
         return pr.promise
     
    },
        save : function(id){
                     var json = JSON.stringify(id)
         localStorage.setItem('storeid',json);
        }
    }
    
    return object;
})