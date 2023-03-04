<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMenu } from "@mdi/js";

const path = defineProps({ mdiMenu });
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg-icon type="mdi" :path="mdiMenu"></svg-icon>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Fashion</RouterLink>

            <ul class="submenu">
              <li>
                <RouterLink class="nav-link" to="/">Shoes</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link" to="/">Clothing</RouterLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Beauty</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home & Office</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Services</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Art & Gallery</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
