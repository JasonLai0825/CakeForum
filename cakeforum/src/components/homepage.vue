<template>
  <div class="container p-0">
    <!-- Banner-Carousel start --> 
    <div id="banner-carousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="banner-carousel" data-slide-to="0" class="active"></li>
        <li data-target="banner-carousel" data-slide-to="1"></li>
        <li data-target="banner-carousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://www.taiwan.net.tw/att/1/big_scenic_spots/pic_412_8.jpg" class="img">
        </div>
        <div class="carousel-item">
          <img src="http://farm4.staticflickr.com/3795/9269794168_3ac58fc15c_b.jpg" class="img">
        </div>
        <div class="carousel-item">
          <img v-bind:src="banner_img3" class="img">
        </div>

        <a href="#banner-carousel" class="carousel-control-prev" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a href="#banner-carousel" class="carousel-control-next" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
      <div class="carousel-caption d-none d-md-block">
        <h3>Welcome to CakeForum</h3>
        <button type="button" class="btn">View On Github</button>
      </div>
    </div>
    <!-- Banner-Carousel end --> 
    <!--Front-end Start-->
    <div class='container'>
      <div class="row" float:right>
          <div class="col-sm-6">
              <h3>Front-end</h3>
          </div>          
            <div class="col-sm-6">
                <a href="#" style='text-align:center;' class="pull-right vertical-center">+ view more</a>
            </div>
      </div>
        <div class="card col-sm-3 border-0 text-center" >
            <img class="card-img-top" v-bind:src="logojpg" alt="Card image cap">
            <div class="card-block">
                <h4 class="card-title">HTML</h4>
            </div>
        </div>
        <div class="card col-sm-3 border-0 text-center" >
            <img class="card-img-top" v-bind:src="logojpg" alt="Card image cap">
            <div class="card-block">
                <h4 class="card-title">css</h4>
            </div>
        </div>
        <div class="card col-sm-3 border-0 text-center" >
            <img class="card-img-top" v-bind:src="logojpg"  alt="Card image cap">
            <div class="card-block">
                <h4 class="card-title">bootstrap</h4>
            </div>
        </div>
        <div class="card col-sm-3 border-0 text-center" >
            <img class="card-img-top" v-bind:src="logojpg" alt="Card image cap">
            <div class="card-block">
                <h4 class="card-title">Vue.js</h4>
            </div>
        </div>
      </div>
      <!--Fornt-end End-->
    <!--Back-end Start-->
      <div class='container'>
    <div class="row" float:right>
        <div class="col-sm-6">
            <h3>Back-end</h3>
        </div>          
          <div class="col-sm-6">
              <a href="#" style='text-align:center;' class="pull-right vertical-center">+ view more</a>
          </div>
    </div>
      <div class="card col-sm-6 border-0 text-center" >
          <img class="card-img-top img" v-bind:src="logojpg" alt="Card image cap">
          <div class="card-block">
              <h4 class="card-title">HTML</h4>
          </div>
      </div>
      <div class="card col-sm-6 border-0 text-center" >
          <img class="card-img-top img" v-bind:src="logojpg" alt="Card image cap">
          <div class="card-block">
              <h4 class="card-title">Vue.js</h4>
          </div>
      </div>
    <!--Back-end End-->
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner_img3: 'https://www.taiwan.net.tw/att/1/big_scenic_spots/pic_3266_19.jpg',
      logojpg:'./cakeforum\\src\\assets\\logo.jpg'
    }
  }
}
</script>