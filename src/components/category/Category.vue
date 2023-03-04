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
            <h5>Categories</h5>
            <div class="lines"></div>
          </div>

          <div class="view_cat">
            <RouterLink to="/"
              >View all categories
              <svg-icon type="mdi" :path="mdiArrowRightThin"></svg-icon
            ></RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-md-2 mar">
        <RouterLink to="/"
          ><div class="cat_box">
            <img src="" class="img-fluid" alt="" />
            <p>Fashion</p>
          </div></RouterLink
        >
      </div>

      <div class="col-6 col-md-2 mar">
        <RouterLink to="/"
          ><div class="cat_box">
            <img src="" class="img-fluid" alt="" />
            <p>Beauty</p>
          </div></RouterLink
        >
      </div>

      <div class="col-6 col-md-2 mar">
        <RouterLink to="/"
          ><div class="cat_box">
            <img src="" class="img-fluid" alt="" />
            <p>Home & Office</p>
          </div></RouterLink
        >
      </div>

      <div class="col-6 col-md-2 mar">
        <RouterLink to="/"
          ><div class="cat_box">
            <img src="" class="img-fluid" alt="" />
            <p>Home & Office</p>
          </div></RouterLink
        >
      </div>

      <div class="col-6 col-md-2 mar">
        <RouterLink to="/"
          ><div class="cat_box">
            <img src="" class="img-fluid" alt="" />
            <p>Home & Office</p>
          </div></RouterLink
        >
      </div>

      <div class="col-6 col-md-2 mar">
        <RouterLink to="/"
          ><div class="cat_box">
            <img src="" class="img-fluid" alt="" />
            <p>Home & Office</p>
          </div></RouterLink
        >
      </div>

      <div class="col-6 col-md-2 mar">
        <RouterLink to="/"
          ><div class="cat_box">
            <img src="" class="img-fluid" alt="" />
            <p>Home & Office</p>
          </div></RouterLink
        >
      </div>

      <div class="col-6 col-md-2 mar">
        <RouterLink to="/"
          ><div class="cat_box">
            <img src="" class="img-fluid" alt="" />
            <p>Home & Office</p>
          </div></RouterLink
        >
      </div>

      <div class="col-6 col-md-2 mar">
        <RouterLink to="/"
          ><div class="cat_box">
            <img src="" class="img-fluid" alt="" />
            <p>Home & Office</p>
          </div></RouterLink
        >
      </div>

      <div class="col-6 col-md-2 mar">
        <RouterLink to="/"
          ><div class="cat_box">
            <img src="" class="img-fluid" alt="" />
            <p>Home & Office</p>
          </div></RouterLink
        >
      </div>

      <div class="col-6 col-md-2 mar">
        <RouterLink to="/"
          ><div class="cat_box">
            <img src="" class="img-fluid" alt="" />
            <p>Home & Office</p>
          </div></RouterLink
        >
      </div>

      <div class="col-6 col-md-2 mar">
        <RouterLink to="/"
          ><div class="cat_box">
            <img src="" class="img-fluid" alt="" />
            <p>Home & Office</p>
          </div></RouterLink
        >
      </div>
    </div>
  </div>
</template>
