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
            <h5>Brands</h5>
            <div class="lines"></div>
          </div>

          <div class="view_cat">
            <RouterLink to="/"
              >View all brands
              <svg-icon type="mdi" :path="mdiArrowRightThin"></svg-icon
            ></RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-md-3 mb-3">
        <RouterLink to="/"
          ><div class="brand_box">
            <div class="row">
              <div class="col-md-5">
                <img src="/brand.png" class="img-fluid" alt="" />
              </div>
              <div class="col-md-7 bbb">
                <h3>Brand name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div></RouterLink
        >
      </div>

      <div class="col-6 col-md-3 mb-3">
        <RouterLink to="/"
          ><div class="brand_box">
            <div class="row">
              <div class="col-md-5">
                <img src="/brand1.png" class="img-fluid" alt="" />
              </div>
              <div class="col-md-7 bbb">
                <h3>Brand name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div></RouterLink
        >
      </div>

      <div class="col-6 col-md-3 mb-3">
        <RouterLink to="/"
          ><div class="brand_box">
            <div class="row">
              <div class="col-md-5">
                <img src="/brand2.png" class="img-fluid" alt="" />
              </div>
              <div class="col-md-7 bbb">
                <h3>Brand name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div></RouterLink
        >
      </div>

      <div class="col-6 col-md-3 mb-3">
        <RouterLink to="/"
          ><div class="brand_box">
            <div class="row">
              <div class="col-md-5">
                <img src="/brand3.png" class="img-fluid" alt="" />
              </div>
              <div class="col-md-7 bbb">
                <h3>Brand name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div></RouterLink
        >
      </div>

      <div class="col-6 col-md-3 mb-3">
        <RouterLink to="/"
          ><div class="brand_box">
            <div class="row">
              <div class="col-md-5">
                <img src="/brand3.png" class="img-fluid" alt="" />
              </div>
              <div class="col-md-7 bbb">
                <h3>Brand name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div></RouterLink
        >
      </div>

      <div class="col-6 col-md-3 mb-3">
        <RouterLink to="/"
          ><div class="brand_box">
            <div class="row">
              <div class="col-md-5">
                <img src="/brand2.png" class="img-fluid" alt="" />
              </div>
              <div class="col-md-7 bbb">
                <h3>Brand name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div></RouterLink
        >
      </div>

      <div class="col-6 col-md-3 mb-3">
        <RouterLink to="/"
          ><div class="brand_box">
            <div class="row">
              <div class="col-md-5">
                <img src="/brand1.png" class="img-fluid" alt="" />
              </div>
              <div class="col-md-7 bbb">
                <h3>Brand name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div></RouterLink
        >
      </div>

      <div class="col-6 col-md-3 mb-3">
        <RouterLink to="/"
          ><div class="brand_box">
            <div class="row">
              <div class="col-md-5">
                <img src="/brand.png" class="img-fluid" alt="" />
              </div>
              <div class="col-md-7 bbb">
                <h3>Brand name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div></RouterLink
        >
      </div>
    </div>
  </div>
</template>
