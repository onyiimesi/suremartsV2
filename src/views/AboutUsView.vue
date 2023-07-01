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
            <h3>ABOUT US</h3>
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
                <p>Suremarts.com is Nigeria&#39;s largest online mall. We launched in July 2012 and our mission is to become the engine of commerce and trade in Africa.</p>

                <p>We serve a retail customer base that continues to grow exponentially, offering products that span various categories including Phones, Computers, Clothing, Shoes, Home Appliances, Books, healthcare, Baby Products, personal care and much more.</p>

                <p>Our range of services are designed to ensure optimum levels of convenience and customer satisfaction with the retail process; these services include our lowest price guarantee, 7-day free return policy*, order delivery-tracking, dedicated customer service support and many other premium services.</p>

                <p>As we continue to expand the mall, our scope of offerings will increase in variety, simplicity and convenience; join us and enjoy the increasing benefits.</p>

                <p>We are highly customer-centric and are committed towards finding innovative ways of improving our customers&#39; shopping experience with us; so give us some feedback on help@konga.com. For any press related questions, kindly send us an email at press@konga.com.</p>

                <p>Thank you and we hope you enjoy your experience with us.</p>

                <p>*Available for select stores</p>

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
