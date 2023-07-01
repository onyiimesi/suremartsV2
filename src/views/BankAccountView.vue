<!-- eslint-disable no-unused-vars -->
<script setup>
import Header from "../components/header/Header.vue";
import News from "../components/news/News.vue";
import Nav from "../components/nav/Nav.vue";
import Footer from "../components/footer/Footer.vue";
import { mdiMapMarker, mdiCartOutline } from "@mdi/js";

const path = defineProps({ mdiMapMarker, mdiCartOutline });
</script>

<template>
  <div>
    <News />
  </div>
  <header>
    <Header />
  </header>
  <section class="navigation">
    <Nav />
  </section>

  <section class="place_holder">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="place_name">
            <h3>Add Bank Account Details</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="help_center">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
                <form action="">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Bank Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Account Number <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Account Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>

                    </div>
                    
                    <div class="text-start">
                        <RouterLink to="/summary"><button class="btns" style="width: 120px;font-size: 0.9rem;">Continue</button></RouterLink>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="footer">
    <Footer />
  </section>
</template>

<style></style>
