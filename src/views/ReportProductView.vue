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
            <h3>REPORT PRODUCT</h3>
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
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">First & Last Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email Address <span class="text-danger">*</span></label>
                                <input type="email" class="form-control">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Country <span class="text-danger">*</span></label>
                                <select class="form-control" name="" id="">
                                    <option value="">Select</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone Number <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Requester Type <span class="text-danger">*</span></label>
                                <select class="form-control" name="" id="">
                                    <option value="">Select</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Company or Organization's Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Reason for Reporting <span class="text-danger">*</span></label>
                                <select class="form-control" name="" id="">
                                    <option value="">Select</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Product Link <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Additional Details</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    
                    <div class="text-start mt-3">
                      <RouterLink to="/"><button class="btns" style="width: 120px;font-size: 0.9rem;">Submit</button></RouterLink>
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
