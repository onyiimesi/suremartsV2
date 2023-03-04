<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Input from "../input/Input.vue";
import Button from "../button/Button.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccount, mdiHeart, mdiCartOutline } from "@mdi/js";

const path = defineProps({ mdiAccount, mdiHeart, mdiCartOutline });

const search = ref("");

const searchHere = () => {
  alert(search.value);
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-12">
        <div class="head">
          <img src="/logo.jpg" alt="" />
        </div>
      </div>

      <div class="col-lg-6 col-md-6 col-sm-12">
        <div class="head search">
          <form @submit.prevent="searchHere()" class="text-center">
            <Input type="text" placeholder="Search Here..." v-model="search" />
            <Button type="submit">Search</Button>
          </form>
        </div>
      </div>

      <div class="col-lg-3 col-md-3 col-sm-12">
        <div class="head d-flex icons">
          <RouterLink to="/"
            ><div class="d-flex">
              <svg-icon type="mdi" :path="mdiAccount"></svg-icon>
              <p>Account</p>
            </div></RouterLink
          >

          <RouterLink to="/"
            ><div class="d-flex">
              <svg-icon type="mdi" :path="mdiHeart"></svg-icon>
              <p>Wishlist</p>
            </div></RouterLink
          >

          <RouterLink to="/"
            ><div class="d-flex">
              <span class="cart_num">0</span>
              <svg-icon type="mdi" :path="mdiCartOutline"></svg-icon>
              <p>Cart</p>
            </div></RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
