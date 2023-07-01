<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiArrowRightThin } from "@mdi/js";

const path = defineProps({ mdiArrowRightThin });
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="mb-4 d-flex">
          <div class="me-auto">
            <h5>Products</h5>
            <div class="lines"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-md-2 col-sm-12 mb-3">
        <div class="product text-center">
          <span class="discount">-20%</span>
          <div class="prod_img">
            <img src="/brand.png" class="img-fluid" alt="" />
          </div>
          <div class="location">
            <span class="mdi mdi-map-marker"></span>
            Lagos, Nigeria
          </div>
          <h5>Pacific Juice</h5>
          <div class="d-flex justify-content-between">
            <h6>&#8358;20,000</h6>
            <s>&#8358;20,000</s>
          </div>

          <div class="d-flex justify-content-between btt">
            <span>20 Items</span>
          </div>
        </div>
      </div>

      <div class="col-6 col-md-2 col-sm-12 mb-3">
        <div class="product text-center">
          <div class="prod_img">
            <img src="/brand1.png" class="img-fluid" alt="" />
          </div>
          <div class="location">
            <span class="mdi mdi-map-marker"></span>
            Lagos, Nigeria
          </div>
          <h5>Pacific Juice</h5>
          <div class="d-flex justify-content-between">
            <h6>&#8358;20,000</h6>
            <s>&#8358;20,000</s>
          </div>
          <div class="d-flex justify-content-between btt">
            <span>20 Items</span>
          </div>
        </div>
      </div>

      <div class="col-6 col-md-2 col-sm-12 mb-3">
        <div class="product text-center">
          <span class="discount">-20%</span>
          <div class="prod_img">
            <img src="/brand2.png" class="img-fluid" alt="" />
          </div>
          <div class="location">
            <span class="mdi mdi-map-marker"></span>
            Lagos, Nigeria
          </div>
          <h5>Pacific Juice</h5>
          <div class="d-flex justify-content-between">
            <h6>&#8358;20,000</h6>
            <s>&#8358;20,000</s>
          </div>

          <div class="d-flex justify-content-between btt">
            <span>20 Items</span>
          </div>
        </div>
      </div>

      <div class="col-6 col-md-2 col-sm-12 mb-3">
        <div class="product text-center">
          <div class="prod_img">
            <img src="/brand3.png" class="img-fluid" alt="" />
          </div>
          <div class="location">
            <span class="mdi mdi-map-marker"></span>
            Lagos, Nigeria
          </div>
          <h5>Pacific Juice</h5>
          <div class="d-flex justify-content-between">
            <h6>&#8358;20,000</h6>
            <s>&#8358;20,000</s>
          </div>

          <div class="d-flex justify-content-between btt">
            <span>20 Items</span>
          </div>
        </div>
      </div>

      <div class="col-6 col-md-2 col-sm-12 mb-3">
        <div class="product text-center">
          <div class="prod_img">
            <img src="/brand3.png" class="img-fluid" alt="" />
          </div>
          <div class="location">
            <span class="mdi mdi-map-marker"></span>
            Lagos, Nigeria
          </div>
          <h5>Pacific Juice</h5>
          <div class="d-flex justify-content-between">
            <h6>&#8358;20,000</h6>
            <s>&#8358;20,000</s>
          </div>

          <div class="d-flex justify-content-between btt">
            <span>20 Items</span>
          </div>
        </div>
      </div>

      <div class="col-6 col-md-2 col-sm-12 mb-3">
        <div class="product text-center">
          <div class="prod_img">
            <img src="/brand3.png" class="img-fluid" alt="" />
          </div>
          <div class="location">
            <span class="mdi mdi-map-marker"></span>
            Lagos, Nigeria
          </div>
          <h5>Pacific Juice</h5>
          <div class="d-flex justify-content-between">
            <h6>&#8358;20,000</h6>
            <s>&#8358;20,000</s>
          </div>

          <div class="d-flex justify-content-between btt">
            <span>20 Items</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
