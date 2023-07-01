<!-- eslint-disable no-unused-vars -->
<script setup>
import Header from "../components/header/Header.vue";
import News from "../components/news/News.vue";
import Nav from "../components/nav/Nav.vue";
import Footer from "../components/footer/Footer.vue";
import OtherOffer from "../components/others/OtherOffer.vue";
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
            <h3>SELL ON SUREMARTS</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="help_center">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card mb-4">
            <div class="card-body">
               <p class="text-center pb-3">Benefits of Being A Seller in Suremarts</p>

                <div class="row">
                    <div class="col-md-3">
                        <div class="box text-center">
                            <h6>Connect with more buyers</h6>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="box text-center">
                            <h6>Sell more products</h6>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="box text-center">
                            <h6>Improve revenue</h6>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="box text-center">
                            <h6>Free training</h6>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
               <p class="text-center pb-3">How it works</p>

                <div class="row">
                    <div class="col-md-3">
                        <div class="boxx text-center">
                            <img src="https://ng.jumia.is/cms/8-18/sell-on-jumia/step-1.png" class="img-fluid" alt="">
                            <strong><p>Step 1: Register under 5 minutes</p></strong>
                            <p>
                                fill the registration form <br> submit the required documents
                            </p>
                            <p>
                                (a) business registration <br>
                                (b) bank account details
                            </p>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="boxx text-center">
                            <img src="https://ng.jumia.is/cms/8-18/sell-on-jumia/step-2.png" class="img-fluid" alt="">
                            <strong><p>Step 2: Become an ecommerce expert</p></strong>
                            <p>
                                complete the dedicated new seller training activate your seller center account to manage your shop
                            </p>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="boxx text-center">
                            <img src="https://ng.jumia.is/cms/8-18/sell-on-jumia/step-3.png" class="img-fluid" alt="">
                            <strong><p>Step 3: list your products and sell</p></strong>
                            <p>
                                upload your best selling products and start selling
                            </p>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="boxx text-center">
                            <img src="https://ng.jumia.is/cms/8-18/sell-on-jumia/step-4.png" class="img-fluid" alt="">
                            <strong><p>Step 4: Benefit from our promotions and marketing</p></strong>
                            <p>
                                get visibility from our campaigns/promotions and insight on best selling products.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="text-center">
                    <RouterLink to="/create-seller-account"><button class="btns" style="width: 180px;font-size: 0.9rem;">SIGN UP NOW</button></RouterLink>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="beauty" style="background-color: #f5f5f5;">
    <OtherOffer />
  </section>

  <section class="footer">
    <Footer />
  </section>
</template>

<style></style>
