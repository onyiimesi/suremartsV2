<!-- eslint-disable no-unused-vars -->
<script setup>
import Adverts from "./advert/Adverts.vue";
import Arts from "./art/Arts.vue";
import Banner from "./banner/Banner.vue";
import Beauty from "./beauty/Beauty.vue";
import Brand from "./brand/Brand.vue";
import Category from "./category/Category.vue";
import Fashion from "./fashion/Fashion.vue";
import Footer from "./footer/Footer.vue";
import Header from "./header/Header.vue";
import News from "./news/News.vue";
import Nav from "./nav/Nav.vue";
import Products from "./product/Products.vue";
import { ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMapMarker, mdiCartOutline } from "@mdi/js";


const path = defineProps({ mdiMapMarker, mdiCartOutline });
</script>

<template>
  <div class="body">
    <div>
      <News />
    </div>
    <header>
      <Header />
    </header>

    <section class="navigation">
      <Nav />
    </section>

    <section class="banner">
      <Banner />
    </section>

    <section class="category">
      <Category />
    </section>

    <section class="brand">
      <Brand />
    </section>

    <section class="products">
      <Products />
    </section>

    <section class="adverts">
      <Adverts />
    </section>

    <section class="fashion">
      <Fashion />
    </section>

    <section class="art">
      <Arts />
    </section>

    <section class="beauty">
      <Beauty />
    </section>
  </div>

  <section class="footer">
    <Footer />
  </section>
</template>
