<!-- eslint-disable no-unused-vars -->
<script setup>
import Header from "../components/header/Header.vue";
import News from "../components/news/News.vue";
import Nav from "../components/nav/Nav.vue";
import OtherOffer from "../components/others/OtherOffer.vue";
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
            <h3>CONTACT US</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="contact_us">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body d-flex justify-content-between">
              <div style="width: 500px;" class="text-center my-auto">
                <p style="font-weight: 600;">
                  If you have inquiries or need assistance, do not hesitate to reach out to us on 01 888 1106. We are available Monday to Sunday (8am to 8pm)
                </p>
              </div>
              <div style="width: 500px;">
                <img src="/customer-service-woman.png" style="width: 400px;" class="img-fluid" alt="">
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
