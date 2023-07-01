<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
    const options = {
        width: '100%',
        rewind: true,
        gap: '1rem',
        perPage: 6,
        arrows: false, 
        pagination: false,
        type: 'loop',
        autoplay: "true",
        breakpoints: {
            640: {
                perPage: 2,
            },
        }
    };
</script>

<template>
    <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div>
              <h5>Beauty</h5>
              <div class="lines"></div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <Splide :options="options" aria-label="My Favorite Images">
              <SplideSlide>
                <div class="product text-center fashions">
                  <span class="discount">-20%</span>
                  <div class="prod_img mb-2">
                    <img src="/brand.png" class="img-fluid" alt="" />
                  </div>
                  <h5>Pacific Juice</h5>
                  <div class="d-flex justify-content-between">
                    <h6>&#8358;20,000</h6>
                    <s>&#8358;20,000</s>
                  </div>

                </div>
              </SplideSlide>


              <SplideSlide>
                <div class="product text-center fashions">
                  <span class="discount">-20%</span>
                  <div class="prod_img mb-2">
                    <img src="/brand.png" class="img-fluid" alt="" />
                  </div>
                  <h5>Pacific Juice</h5>
                  <div class="d-flex justify-content-between">
                    <h6>&#8358;20,000</h6>
                    <s>&#8358;20,000</s>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div class="product text-center fashions">
                  <span class="discount">-20%</span>
                  <div class="prod_img mb-2">
                    <img src="/brand.png" class="img-fluid" alt="" />
                  </div>
                  <h5>Pacific Juice</h5>
                  <div class="d-flex justify-content-between">
                    <h6>&#8358;20,000</h6>
                    <s>&#8358;20,000</s>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div class="product text-center fashions">
                  <span class="discount">-20%</span>
                  <div class="prod_img mb-2">
                    <img src="/brand.png" class="img-fluid" alt="" />
                  </div>
                  <h5>Pacific Juice</h5>
                  <div class="d-flex justify-content-between">
                    <h6>&#8358;20,000</h6>
                    <s>&#8358;20,000</s>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div class="product text-center fashions">
                  <span class="discount">-20%</span>
                  <div class="prod_img mb-2">
                    <img src="/brand.png" class="img-fluid" alt="" />
                  </div>
                  <h5>Pacific Juice</h5>
                  <div class="d-flex justify-content-between">
                    <h6>&#8358;20,000</h6>
                    <s>&#8358;20,000</s>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div class="product text-center fashions">
                  <span class="discount">-20%</span>
                  <div class="prod_img mb-2">
                    <img src="/brand.png" class="img-fluid" alt="" />
                  </div>
                  <h5>Pacific Juice</h5>
                  <div class="d-flex justify-content-between">
                    <h6>&#8358;20,000</h6>
                    <s>&#8358;20,000</s>
                  </div>
                </div>
              </SplideSlide>

            </Splide>
          </div>
        </div>
    </div>
</template>
