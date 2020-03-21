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
    <!-- informations-block start -->
    <div class="row mt-4 mb-4 text-center">
      <!-- hot-topics start -->
      <div class="col-xl-4">
        <h4>Hot Topics test</h4>
        <div class="hot-info-border"></div>
        <!-- <article>
          <h2>Google Chrome</h2>
          <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
        </article> -->
        <table>
          <tbody>
            <tr v-for="(article,index) in hot_articles" :key="index">
              <td>{{ article.title }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- hot-topics end -->

      <!-- hot-articles start -->
      <div class="col-xl-4 border-left border-right">
        <h4>Hot Articles</h4>
        <div class="hot-info-border"></div>
        <article>
          <h2>Google Chrome</h2>
          <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
        </article>
      </div>
      <!-- hot-articles end -->

      <!-- newest-articles start -->
      <div class="col-xl-4">
        <h4>Newest Articles</h4>
        <div class="hot-info-border"></div>
        <article>
          <h2>Google Chrome</h2>
          <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
        </article>
      </div>
      <!-- newest-articles end -->
    </div>
    <!-- informations-block end -->
    <!--Front-end Start-->
    <div class='container'>
      <div class="row" float:right>
          <div class="col-sm-6">
              <h3>Front-end</h3>
          </div>          
            <div class="col-sm-6">
                <a href="#" style='text-align:center;float: right;' class="pull-right vertical-center">+ view more</a>
            </div>
      </div>
      <div class="row">
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
      </div>
      <!--Fornt-end End-->
    <!--Back-end Start-->
      <div class='container'>
    <div class="row" float:right>
        <div class="col-sm-6">
            <h3>Back-end</h3>
        </div>          
          <div class="col-sm-6">
              <a href="#" style='text-align:center;float: right;' class="pull-right vertical-center">+ view more</a>
          </div>
    </div>
    <div class="row">
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
      logojpg:'./cakeforum\\src\\assets\\logo.jpg',
      hot_articles: null
    }
  },
  mounted() {
    this.$axios
      .get('http://localhost/CakeForum/api/getAllArticles')
      .then(response => (this.hot_articles = response.data.articles))
      .catch(function(error) {
        console.log(error)
      })
  }
}
</script>