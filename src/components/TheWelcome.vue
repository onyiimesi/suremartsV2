<!-- eslint-disable no-unused-vars -->
<script setup>
import Banner from "./banner/Banner.vue";
import Brand from "./brand/Brand.vue";
import Category from "./category/Category.vue";
import Header from "./header/Header.vue";
import News from "./news/News.vue";
import Nav from "./nav/Nav.vue";
import { ref } from "vue";
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
  </div>
</template>
