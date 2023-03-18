<template>
  <div>
    <footer min-vh="100">
      <!-- <div class="container-sm">
              <div class="row th">
                <div class="col g-3"><h5>Address</h5></div>
                <div class="col g-3"><h5>Contact</h5></div>
              </div>
              <div class="row">
                <div class="col g-3">39114 Foni Street</div>
                <div class="col g-3">Phone: 067 661 6914</div>
              </div>
              <div class="row">
                <div class="col g-3">Harare</div>
                <div class="col g-3">
                  <a href="https://www.instagram.com/lebonobomvu"
                    ><i class="fa fa-instagram"></i
                  ></a>
                  <a href="https://www.twitter.com/kelebogile_04"
                    ><i class="fa fa-twitter"></i
                  ></a>
                  <a href="https://www.youtube.com"><i class="fa fa-youtube"></i></a>
                  <a href="https://www.linkedin.com/in/kelebogile-nobomvu-a6389717a"
                    ><i class="fa fa-linkedin"></i
                  ></a>
                  <a href="https://github.com/Lebo04"><i class="fa fa-github"></i></a>
                </div>
              </div>
              <div class="row">
                <div class="col g-3">
                </div>
                <div class="col g-3">Khayelitsha</div>
                <div class="col g-3"></div>
              </div>
              <div class="row">
                <div class="col g-3">7784</div>
                <div class="col g-3"></div>
              </div>
              <div class="row">
              </div>
              <div class="row">
                <div class="col g-3"></div>
              </div>
      
              <p>&copy; 2023 Kelebogile. All Rights Reserved</p>
            </div>
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="500"
                  height="400"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=39114%20Foni%20Street&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe
                ><a class="map" href="https://123movies-to.org"></a><br /><a
                  href="https://www.embedgooglemap.net"
                  >custom google maps for website</a
                >
              </div>
            </div> -->

      <!-- <p>&copy; 2023 KG Book Store. All Rights Reserved</p> -->
      <p>CopyRight @{{currentYear}}</p>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
<style scoped>

footer {
  position: fixed;
  bottom: 0;
  width: 100vw;
}
.mapouter {
  position: relative;
  text-align: center;
}
.gmap_canvas {
  float: right;
  padding-top: 2rem;
  padding-left: 2rem;
  margin-right: 2rem;
  overflow: hidden;
  background: none !important;
  height: 12rem;
  width: 15rem;
}
footer {
  background: #111;
  padding-top: 1rem;
  padding-left: 1rem;
  color: #fff;
  font-size: 0.6rem;
  display: flex;
}

footer p {
  text-align: center;
  font-size: 0.6rem;
  padding-bottom: 0.5rem;
}

.row a {
  color: #fff;
  padding-right: 1.5rem;
}

.row a:hover {
  color: crimson;
}

@media screen and (max-width: 300px) {
  .gmap_canvas {
    float: right;
    padding-top: 2rem;
    padding-left: 2rem;
    margin-right: 2rem;
    overflow: hidden;
    background: none !important;
    height: 8rem;
    width: 6rem;
  }
  footer {
    padding-top: 0rem;
    padding-left: 0rem;
    font-size: 0.5rem;
    flex-direction: column;
  }

  footer p {
    text-align: center;
    font-size: 0.5rem;
    padding-bottom: 0rem;
  }

  h5 {
    font-size: 0.7rem;
  }

  .row a {
    color: #fff;
    padding-right: 1.5rem;
  }

  .row a:hover {
    color: crimson;
  }
}
</style>
