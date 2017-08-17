app.factory("myfactory",($http,$q)=>{
    var object = {
        
             load : function(){
          var usedata = localStorage.getItem("storedata")
              console.log(usedata)
          pushdata=JSON.parse(usedata)
          return pushdata;
     },
        filterfunction : function(filterlist){
            console.log(filterlist)
         var finalarr =    filterlist.filter(function(obj){
             return obj.Active == true
         })
           
            console.log(finalarr)
            return finalarr
            
        },
        calculatetotal : function(productarr){
            var sum=0
            for(var i=0;i<productarr.length;i++){
              sum = sum + (productarr[i].Price*productarr[i].quantity)  
            }
            return sum
        },
          cartlength : function(arr){
              
           console.log(arr.length)
        return arr.length;
    },

        callserver : function(obj){
        console.log(obj)
        var pr = $q.defer();
            var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/carts/items/"
            $http.post(url,obj).then(function(data){
                pr.resolve(data);
                console.log("success")
            },
                             function(err){
                pr.reject(err);
                console.log("error")
            })
            return pr.promise
    },
        getnumber : ()=>{
       var mobilenumber=localStorage.getItem("mobilenumber");
        return mobilenumber;
        
    }
//        setnumber : ()=>{
////        var mobilenumber = "9650355969"
//        localStorage.getItemItem('mobilenumber');
//            return mobilenumber;
//    }
        
    }
    return object
})