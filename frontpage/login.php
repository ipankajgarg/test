 <?php
   
 ob_start();
 session_start();
 require_once 'Config.php';
 
 // it will never let you open (login) page if session is set
 if ( isset($_SESSION['user'])!="" ) {
  header("Location: index.html");
     
  exit;
 }

 require_once 'DB_Functions.php';
$db = new DB_Functions();
 
// json response array
$response = array("error" => FALSE);
 
if (isset($_POST['mobilenumber']) && isset($_POST['password'])) {
 
    // receiving the post params
    $mobilenumber = $_POST['mobilenumber'];
    $password = $_POST['password'];
    $_SESSION['mobilenumber']=$mobilenumber;
     
    // get the user by mobilenumber and password
    $user = $db->getUserByEmailAndPassword($mobilenumber, $password);
 
    if ($user != false) {
        // use is found
        $response["error"] = FALSE;
        //$response["uid"] = $user["unique_id"];
        //$response["user"]["firstname"] = $user["firstname"];
        //$response["user"]["lastname"]=$user["lastname"];
        //$response["user"]["email"] = $user["email"];
        //$response["user"]["created_at"] = $user["created_at"];
        //$response["user"]["updated_at"] = $user["updated_at"];
        $response["user"]="Login Success!";
        //$_SESSION['mobilenumber']=$mobilenumber;
         
       header("Location:index.php");
       $_SESSION['mobilenumber']=$user["mobilenumber"];

         
         echo json_encode($response);
    } else {
        // user is not found with the credentials
        $response["error"] = TRUE;
        $response["error_msg"] = "Login credentials are wrong. Please try again!";
        echo json_encode($response);
    }
} else {
    // required post params is missing
    $response["error"] = TRUE;
    $response["error_msg"] = "Required parameters email or password is missing!";
    echo json_encode($response);
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
    <link rel="stylesheet" href="login1.css">
</head>
<body>
<nav class="navbar navbar-fixed-top" role="navigation">
    <div class="container-fluid">
        <!-- add header -->
 
        
 
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
        <!-- menu items -->
        <div class="collapse navbar-collapse" id="navbar1">
            <ul class="nav navbar-nav navbar-right">
               <button class="btn btn-danger btn-md pull-right" onclick="window.location='login.html'"> Login </button>
                
            </ul>
        </div>
    </div>
</nav>

<div class="container-fluid bg1">
    <div class="row">
        <div class="col-md-4 col-md-offset-4 well">
            <form role="form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" name="loginform">
                <fieldset>
                    <legend>Login</legend>
                    
                    <div class="form-group">
                        <label for="name">Mobile Number</label>
                        <input type="text" name="mobilenumber" placeholder="Your Mobile Number" id="mobilenumber" required class="form-control" />
                    </div>

                    <div class="form-group">
                        <label for="name">Password</label>
                        <input type="password" name="password" placeholder="Your Password" id="password" required class="form-control" />
                    </div>

                    <div class="form-group">
                        <center><input type="submit" name="login" value="Login" class="btn btn-danger" id="submit" /></center>
                    </div>
                </fieldset>
            </form>
            <span class="text-success"><?php if (isset($response["user"])) { echo $response["user"]; } ?></span>
        </div>
    </div>
    <div class="row">
    <div class="col-md-4 col-md-offset-4 text-center">    
        Don't have an Account?<a href="register.php">Sign Up Here</a>
        </div>
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
        <span class="glyphicon glyphicon-copyright-mark">Halanx</span>
    </div>



 
 


</body>
 
</html>