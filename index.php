<head>
  <title>CakeForum</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>-->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="./assets/js/jquery-3.4.1.min.js"></script>
  <script src="./assets/js/bootstrap.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="./assets/css/mystylesheet.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
   
  </style>
</head>

<header id="Header">
    <div class="container headerbar">
        <div class="row">
            <div class="col-sm-3">
                <img id='cakeforumlogo' src=".\assets\logo.jpg" alt="This is a LOGO">
            </div>
            <div class="col-sm-6">
                <div class="search-container">
                    <button><p><i class="fa fa-search"></i></p></button>
                    <input type="text" placeholder="Search.." name="search">                    
                </div>
            </div>
            <div class="col-sm-3">
            <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">LOG In</a></li>
                    <li><a href="#">Sign Up</a></li>
                </ul>
                </nav>
            </div>
        </div>
    </div>
    <div id='classification'>
        <div  class="container">
            <div class='row'>
            <nav class="navbar navbar-toggleable-md navbar-light bg-faded col-sm-12">
                <!--<div id="navbar" class="navbar-collapse collapse">-->
                  <ul class="nav navbar-nav">
                    <li class="nav-item active"><a href="#">Home</a></li>
                    <li class="nav-item"><a href="#">About</a></li>
                    <li class="nav-item"><a href="#">Contact</a></li>
                  </ul>
                <!--</div>-->
            </nav>
            </div>
        </div>
    </div>
</header>

<div class="container">
   <div class="carousel slide" data-ride="carousel" id="carousel-demo">
        <ol class="carousel-indicators">
          <li data-target="#carousel-demo" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-demo" data-slide-to="1"></li>
          <li data-target="#carousel-demo" data-slide-to="2"></li>
        </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="https://www.taiwan.net.tw/att/1/big_scenic_spots/pic_412_8.jpg" alt="">
          <div class="carousel-caption d-none d-md-block">
          <h3>Welcome to CakeForum</h3>
          <p>View on GitHub</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="http://farm4.staticflickr.com/3795/9269794168_3ac58fc15c_b.jpg" alt="">
          <div class="carousel-caption d-none d-md-block">
          <h3>Welcome to CakeForum</h3>
          <p>View on GitHub</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://www.taiwan.net.tw/att/1/big_scenic_spots/pic_3266_19.jpg" alt="">
          <div class="carousel-caption d-none d-md-block">
          <h3>Welcome to CakeForum</h3>
          <p>View on GitHub</p>
          </div>
        </div>
      
        <a href="#carousel-demo" class="carousel-control-prev" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
        </a>
        <a href="#carousel-demo" class="carousel-control-next" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
</div>


<footer id="myFooter">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <h5>Get started</h5>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sign up</a></li>
                        <li><a href="#">Downloads</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <h5>About us</h5>
                    <ul>
                        <li><a href="#">Company Information</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Reviews</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Help desk</a></li>
                        <li><a href="#">Forums</a></li>
                    </ul>
                </div>
                <div class="col-sm-3 info">
                    <h5>Information</h5>
                </div>
            </div>
        </div>
    </footer>


    <script>
    $(document).ready(() => {
      $('.carousel').carousel()
})
    </script>