   app.controller("myctrl",($scope,myfactory,$window)=>{
//        $scope.getdate = ()=>{
//            alert("hello")
//            console.log($scope.date)
//        }
       autocall();
        function autocall(){
            $scope.desired = myfactory.desired();
            $scope.time = myfactory.time();
            $scope.mytime = true;
        }
       $scope.changeschedule = (i)=>{
            myfactory.check($scope.desired)
            if(i.service=="schedule for later"){
                $scope.mytime = false;  
            }
           else{
            $scope.mytime = true;   
           }
           i.mark = !i.mark;
       }
             $scope.timeadded=(i)=>{
           console.log("hello")
//           check($scope.time)
             myfactory.check($scope.time)
           i.mark = !i.mark
          
       }
             $scope.postdata = ()=>{
                 
     var date = $("#hw_datepicker").val()
//                 var obj = {};
       var DeliveryDate =date
                   localStorage.setItem('DeliveryDate',DeliveryDate)
//                 console.log(obj.date)
                  var data= myfactory.gettrue($scope.desired)
                 if(date==""){
                     alert("date")
                 }
               
                 else if(data.service=="schedule for later"){
//                 obj.schedule = data.service;
                     var time =  myfactory.gettrue($scope.time)
                     var StartTime=time.timing
                      localStorage.setItem('StartTime',StartTime)
                      localStorage.setItem('AsSoonAsPossible',"")
//                  console.log( obj.schedule)
                 $window.location.href = "http://localhost/halanx-final/new1big-kfc/Maps-master/cart.html"
                  }
                 else{
                     
                     var AsSoonAsPossible = "true";
                      localStorage.setItem('AsSoonAsPossible',AsSoonAsPossible)
                      localStorage.setItem('StartTime',"null")
                    var StartTime=  new Date(new Date().getTime()).toLocaleTimeString();
                     
                      localStorage.setItem('StartTime',StartTime)
                   $window.location.href = "http://localhost/halanx-final/new1big-kfc/Maps-master/cart.html"
                 }
             }
//             function post(){
////                 console.log(obj)
////                localStorage.setItem('myschedule',obj)
////                var data = localStorage.getItem('myschedule')
////                console.log(data)
////                
////                $window.location.href = "http://localhost/halanx-final/new1big-kfc/schedule map/map.html"
//              // window.location = "../../schedule map/map.html"
//             alert("post")
//             }
    })