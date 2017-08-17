 <?php
session_start();
require_once 'DB_Functions.php';
$db = new DB_Functions();
 
// json response array
$response = array("error" => FALSE);
 
if (isset($_POST['firstname']) && isset($_POST['lastname']) &&isset($_POST['email']) && isset($_POST['password']) && isset($_POST['mobilenumber'])) {
 
    // receiving the post params
    $firstname = $_POST['firstname'];
    $lastname=$_POST['lastname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $mobilenumber=$_POST['mobilenumber'];
 
    // check if user is already existed with the same email
    if ($db->isUserExisted($mobilenumber)) {
        // user already existed
        //$response["error"] = TRUE;
        $response["error_msg"] = "User already existed with " . $mobilenumber;
        echo json_encode($response);
    } else {
        // create a new user
        $user = $db->storeUser($firstname,$lastname,$email,$password,$mobilenumber);
        if ($user) {
            // user stored successfully
            //$response["error"] = FALSE;
            //$response["uid"] = $user["unique_id"];
            //$response["user"]["firstname"] = $user["firstname"];
            //$response["user"]["lastname"]=$user["lastname"];
            //$response["user"]["email"] = $user["email"];
            //$response["user"]["mobilenumber"]=$user['mobilenumber'];
            //$response["user"]["created_at"] = $user["created_at"];
            //$response["user"]["updated_at"] = $user["updated_at"];
            $response["user"]="You have successfully registered.Please login to continue.";
            //echo json_encode($response);
        } else {
            // user failed to store
           // $response["error"] = TRUE;
            $response["error_msg"] = "Unknown error occurred in registration!";
            //echo json_encode($response);
        }
    }
} else {
    //$response["error"] = TRUE;
    //$response["error_msg"] = "Required parameters (name, email or password) is missing!";
    //echo json_encode($response);
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Halanx-'Everyone's Personal Shopper</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" >
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="register1.css">
  
 
</head>

<body>
<nav class="navbar navbar-fixed-top" role="navigation">
    <div class="container-fluid">
         
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.php"><img src="logo.png" class="img-responsive img-circle" width="50" height="50"> </a>
            <a class="navbar-brand navbar-bg" href="index.html">Halanx</a>
        </div>
        
         
        <div class="collapse navbar-collapse" id="navbar1">
            <ul class="nav navbar-nav navbar-right">
               <button class="btn btn-danger btn-md pull-right" onclick="window.location='login.php'"> Login </button>
                
            </ul>
        </div>
    </div>
</nav>

<div class="container-fluid bg2">
    <div class="row">
        <div class="col-md-4 col-md-offset-4 well">
            <form role="form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" name="signupform">
                <fieldset>
                    <legend>Sign Up</legend>

                    <div class="form-group">
                        <label for="name">First Name</label>
                        <input type="text" name="firstname" placeholder="Enter First Name"   class="form-control" id="firstname"/>
                        
                    </div>

                    <div class="form-group">
                        <label for="lastname">Last Name</label>
                        <input type="text" name="lastname" placeholder="Enter Last Name"  class="form-control" id="lastname"/>
                         
                    </div>
                    
                    <div class="form-group">
                        <label for="name">Email</label>
                        <input type="text" name="email" placeholder="Email"  class="form-control" id="email"/>
                        
                    </div>

                    <div class="form-group">
                        <label for="name">Password</label>
                        <input type="password" name="password" placeholder="Password" required class="form-control" id="password" />
                         
                    </div>

                    

                    <div class="form-group">
                      <label for="name">Mobile Number</label>
                      <input type="text" name="mobilenumber" placeholder="Enter the contact number"   class="form-control" id="mobilenumber" />
                       
                    </div>

                    <div class="form-group">
                        <input type="submit" value="Sign Up" id="submit"   class="btn btn-danger"/>
                    </div>
                </fieldset>
            </form>
            <span class="text-success"><?php if(isset($response["user"])) {echo $response["user"];}   ?></span>
             
        </div>
    </div>
    <div class="row">
        <div class="col-md-4 col-md-offset-4 text-center">    
        Already Registered? <a href="login.php">Login Here</a>
        </div>
    </div>
</div>

<div class="container-fluid bg3">
    <div class="row row_11">
        <div class="col-md-2"><a href="aboutus.html">About Us</a></div>
        <div class="col-md-2"><a href="#">Careers</a></div>
        <div class="col-md-2"><a href="#">Blog</a></div>
        <div class="col-md-2"><a href="#">Press</a></div>
        <div class="col-md-2"><a href="contactus.php">Contact Us</a></div>
        <div class="col-md-2"><a href="#">Terms</a></div>
    </div>

    <div class="row row_13">
        <div class="text-center center-block">
           <a href="https://www.facebook.com"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
           <a href="https://twitter.com"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
           <a href="https://plus.google.com"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
           <a href="mailto:mr.sidhantkumar1@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
        </div>
    </div>

    <div class="row row_12">
        <span class="glyphicon glyphicon-copyright-mark"> Halanx 2017 </span>
    </div>
</div>
<script>
$(document).ready(function(){
$("#submit").click(function(){

var person= new Object();
person.PhoneNo=$('#mobilenumber').val();
person.EmailId=$('#email').val();
person.FirstName=$('#firstname').val();
person.LastName=$('#lastname').val();
person.password=$('#password').val();

$.ajax({
url:'http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/users/',
type:'POST',
dataType:'json',
data:person,
success:function(data,textStatus,xhr){
    console.log(data);
},
error:function(xhr,textStatus,errorThrown){
    console.log('Error');
}
});
});
});

</script>
<script>
$(document).ready(function(){
$("#submit").click(function(){

var person= new Object();
person.UserPhone=$('#mobilenumber').val();
 
$.ajax({
url:'http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/carts/',
type:'POST',
dataType:'json',
data:person,
success:function(data,textStatus,xhr){
    console.log(data);
},
error:function(xhr,textStatus,errorThrown){
    console.log('Error');
}
});
});
});




</script>


 </body>
 </html>